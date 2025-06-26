import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import MetricCard from '../components/MetricCard'
import { TrendingUp, Users, Activity, AlertTriangle } from 'lucide-react'

// Mock analytics data
const monthlyPatients = [
  { month: 'Jan', patients: 120 },
  { month: 'Feb', patients: 135 },
  { month: 'Mar', patients: 148 },
  { month: 'Apr', patients: 162 },
  { month: 'May', patients: 178 },
  { month: 'Jun', patients: 195 }
]

const statusDistribution = [
  { name: 'Stable', value: 75, color: '#22c55e' },
  { name: 'Monitoring', value: 20, color: '#f59e0b' },
  { name: 'Critical', value: 5, color: '#ef4444' }
]

const ageGroups = [
  { group: '0-18', count: 45 },
  { group: '19-35', count: 120 },
  { group: '36-50', count: 180 },
  { group: '51-65', count: 150 },
  { group: '65+', count: 85 }
]

const Analytics = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-2">Comprehensive health data insights and trends</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Patients"
          value="1,247"
          trend="up"
          trendValue="+8.2%"
          status="normal"
          icon={Users}
        />
        <MetricCard
          title="Avg Recovery Time"
          value="12.5"
          unit="days"
          trend="down"
          trendValue="-2.1%"
          status="normal"
          icon={TrendingUp}
        />
        <MetricCard
          title="Active Cases"
          value="89"
          trend="up"
          trendValue="+5%"
          status="normal"
          icon={Activity}
        />
        <MetricCard
          title="Critical Alerts"
          value="3"
          trend="down"
          trendValue="-40%"
          status="warning"
          icon={AlertTriangle}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Growth Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyPatients}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="patients" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Status Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Percentage']}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {statusDistribution.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Age Group Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageGroups} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis type="number" stroke="#64748b" fontSize={12} />
                <YAxis dataKey="group" type="category" stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="count" fill="#10b981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Patient Growth</h4>
              <p className="text-sm text-blue-800">
                Patient enrollment has increased by 62% over the past 6 months, 
                indicating strong program adoption.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Recovery Rates</h4>
              <p className="text-sm text-green-800">
                Average recovery time has decreased by 2.1 days, showing 
                improved treatment effectiveness.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Age Demographics</h4>
              <p className="text-sm text-yellow-800">
                The 36-50 age group represents the largest patient segment, 
                requiring targeted care protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
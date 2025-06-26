import React from 'react'
import MetricCard from '../components/MetricCard'
import VitalChart from '../components/VitalChart'
import { 
  Users, 
  Activity, 
  AlertTriangle, 
  TrendingUp,
  Heart,
  Thermometer,
  Gauge
} from 'lucide-react'

// Mock data
const metrics = [
  {
    title: 'Total Patients',
    value: '1,247',
    trend: 'up',
    trendValue: '+12%',
    status: 'normal',
    icon: Users
  },
  {
    title: 'Active Monitoring',
    value: '89',
    trend: 'up',
    trendValue: '+5%',
    status: 'normal',
    icon: Activity
  },
  {
    title: 'Critical Alerts',
    value: '3',
    trend: 'down',
    trendValue: '-2',
    status: 'warning',
    icon: AlertTriangle
  },
  {
    title: 'Recovery Rate',
    value: '94.2%',
    trend: 'up',
    trendValue: '+1.2%',
    status: 'normal',
    icon: TrendingUp
  }
]

const heartRateData = [
  { time: '00:00', value: 72 },
  { time: '04:00', value: 68 },
  { time: '08:00', value: 75 },
  { time: '12:00', value: 82 },
  { time: '16:00', value: 78 },
  { time: '20:00', value: 74 },
  { time: '24:00', value: 70 }
]

const temperatureData = [
  { time: '00:00', value: 98.6 },
  { time: '04:00', value: 98.2 },
  { time: '08:00', value: 98.8 },
  { time: '12:00', value: 99.1 },
  { time: '16:00', value: 98.9 },
  { time: '20:00', value: 98.7 },
  { time: '24:00', value: 98.5 }
]

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Monitor patient health metrics and system status</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VitalChart 
          data={heartRateData}
          title="Average Heart Rate"
          color="#ef4444"
          unit=" BPM"
        />
        <VitalChart 
          data={temperatureData}
          title="Average Temperature"
          color="#f59e0b"
          unit="°F"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm font-medium text-red-900">High Blood Pressure</p>
                <p className="text-xs text-red-600">Patient #1247 - 2 min ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <Thermometer className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-sm font-medium text-yellow-900">Elevated Temperature</p>
                <p className="text-xs text-yellow-600">Patient #1089 - 15 min ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <Heart className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-blue-900">Irregular Heartbeat</p>
                <p className="text-xs text-blue-600">Patient #0892 - 1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Database</span>
              <span className="status-normal">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">API Services</span>
              <span className="status-normal">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Monitoring</span>
              <span className="status-normal">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Backup Systems</span>
              <span className="status-warning">Maintenance</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full btn-primary text-left">
              Add New Patient
            </button>
            <button className="w-full btn-secondary text-left">
              Generate Report
            </button>
            <button className="w-full btn-secondary text-left">
              Schedule Checkup
            </button>
            <button className="w-full btn-secondary text-left">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
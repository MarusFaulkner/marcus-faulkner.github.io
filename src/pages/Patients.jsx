import React, { useState } from 'react'
import PatientCard from '../components/PatientCard'
import { Search, Filter, Plus } from 'lucide-react'

// Mock patient data
const mockPatients = [
  {
    id: 'P001',
    name: 'John Smith',
    age: 45,
    status: 'stable',
    location: 'New York, NY',
    phone: '(555) 123-4567',
    lastVisit: '2024-01-15'
  },
  {
    id: 'P002',
    name: 'Sarah Johnson',
    age: 32,
    status: 'monitoring',
    location: 'Los Angeles, CA',
    phone: '(555) 987-6543',
    lastVisit: '2024-01-14'
  },
  {
    id: 'P003',
    name: 'Michael Brown',
    age: 58,
    status: 'critical',
    location: 'Chicago, IL',
    phone: '(555) 456-7890',
    lastVisit: '2024-01-16'
  },
  {
    id: 'P004',
    name: 'Emily Davis',
    age: 29,
    status: 'stable',
    location: 'Houston, TX',
    phone: '(555) 321-0987',
    lastVisit: '2024-01-13'
  },
  {
    id: 'P005',
    name: 'Robert Wilson',
    age: 67,
    status: 'monitoring',
    location: 'Phoenix, AZ',
    phone: '(555) 654-3210',
    lastVisit: '2024-01-12'
  },
  {
    id: 'P006',
    name: 'Lisa Anderson',
    age: 41,
    status: 'stable',
    location: 'Philadelphia, PA',
    phone: '(555) 789-0123',
    lastVisit: '2024-01-11'
  }
]

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredPatients = mockPatients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-600 mt-2">Manage and monitor patient information</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Patient</span>
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search patients by name or ID..."
            className="input-field pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            className="input-field w-auto"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="stable">Stable</option>
            <option value="monitoring">Monitoring</option>
            <option value="critical">Critical</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
      
      {filteredPatients.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No patients found</h3>
          <p className="text-gray-500">Try adjusting your search criteria or add a new patient.</p>
        </div>
      )}
    </div>
  )
}

export default Patients
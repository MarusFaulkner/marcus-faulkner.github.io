import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin, Phone } from 'lucide-react'

const PatientCard = ({ patient }) => {
  const navigate = useNavigate()

  const getStatusClass = (status) => {
    switch (status) {
      case 'stable': return 'status-normal'
      case 'monitoring': return 'status-warning'
      case 'critical': return 'status-critical'
      default: return 'status-normal'
    }
  }

  return (
    <div 
      className="card hover:shadow-lg transition-all duration-200 cursor-pointer"
      onClick={() => navigate(`/patients/${patient.id}`)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            {patient.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
            <p className="text-sm text-gray-500">ID: {patient.id}</p>
          </div>
        </div>
        <span className={getStatusClass(patient.status)}>
          {patient.status}
        </span>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Age: {patient.age}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{patient.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Phone className="w-4 h-4" />
          <span>{patient.phone}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Last Visit:</span>
          <span className="font-medium text-gray-900">{patient.lastVisit}</span>
        </div>
      </div>
    </div>
  )
}

export default PatientCard
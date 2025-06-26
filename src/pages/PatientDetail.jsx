import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, MapPin, Phone, Mail, Edit } from 'lucide-react'
import MetricCard from '../components/MetricCard'
import VitalChart from '../components/VitalChart'

// Mock detailed patient data
const mockPatientDetail = {
  id: 'P001',
  name: 'John Smith',
  age: 45,
  status: 'stable',
  location: 'New York, NY',
  phone: '(555) 123-4567',
  email: 'john.smith@email.com',
  lastVisit: '2024-01-15',
  bloodType: 'O+',
  allergies: ['Penicillin', 'Shellfish'],
  conditions: ['Hypertension', 'Type 2 Diabetes'],
  medications: ['Metformin 500mg', 'Lisinopril 10mg']
}

const vitals = [
  {
    title: 'Heart Rate',
    value: '72',
    unit: 'BPM',
    status: 'normal',
    trend: 'stable'
  },
  {
    title: 'Blood Pressure',
    value: '120/80',
    unit: 'mmHg',
    status: 'normal',
    trend: 'stable'
  },
  {
    title: 'Temperature',
    value: '98.6',
    unit: '°F',
    status: 'normal',
    trend: 'stable'
  },
  {
    title: 'Oxygen Saturation',
    value: '98',
    unit: '%',
    status: 'normal',
    trend: 'stable'
  }
]

const heartRateHistory = [
  { time: '6 AM', value: 68 },
  { time: '9 AM', value: 72 },
  { time: '12 PM', value: 75 },
  { time: '3 PM', value: 78 },
  { time: '6 PM', value: 74 },
  { time: '9 PM', value: 70 }
]

const PatientDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/patients')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{mockPatientDetail.name}</h1>
          <p className="text-gray-600 mt-1">Patient ID: {mockPatientDetail.id}</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Edit className="w-4 h-4" />
          <span>Edit Patient</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Vitals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vitals.map((vital, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{vital.title}</p>
                      <div className="flex items-baseline space-x-1">
                        <p className="text-2xl font-bold text-gray-900">{vital.value}</p>
                        <span className="text-sm text-gray-500">{vital.unit}</span>
                      </div>
                    </div>
                    <span className="status-normal">{vital.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <VitalChart 
            data={heartRateHistory}
            title="Heart Rate Trend (Today)"
            color="#ef4444"
            unit=" BPM"
          />
        </div>
        
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Age</p>
                  <p className="font-medium">{mockPatientDetail.age} years old</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{mockPatientDetail.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{mockPatientDetail.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{mockPatientDetail.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Blood Type</p>
                <p className="text-gray-900">{mockPatientDetail.bloodType}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Allergies</p>
                <div className="flex flex-wrap gap-1">
                  {mockPatientDetail.allergies.map((allergy, index) => (
                    <span key={index} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Conditions</p>
                <div className="flex flex-wrap gap-1">
                  {mockPatientDetail.conditions.map((condition, index) => (
                    <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Current Medications</p>
                <ul className="text-sm text-gray-900 space-y-1">
                  {mockPatientDetail.medications.map((medication, index) => (
                    <li key={index}>• {medication}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDetail
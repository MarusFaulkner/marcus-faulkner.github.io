import React from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

const MetricCard = ({ 
  title, 
  value, 
  unit, 
  trend, 
  trendValue, 
  status = 'normal',
  icon: Icon 
}) => {
  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4" />
    if (trend === 'down') return <TrendingDown className="w-4 h-4" />
    return <Minus className="w-4 h-4" />
  }

  const getTrendColor = () => {
    if (trend === 'up') return 'text-green-600'
    if (trend === 'down') return 'text-red-600'
    return 'text-gray-400'
  }

  const getStatusColor = () => {
    switch (status) {
      case 'warning': return 'border-l-warning-500'
      case 'critical': return 'border-l-danger-500'
      default: return 'border-l-success-500'
    }
  }

  return (
    <div className={`metric-card border-l-4 ${getStatusColor()}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {Icon && (
            <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary-600" />
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              {unit && <span className="text-sm text-gray-500">{unit}</span>}
            </div>
          </div>
        </div>
        
        {trend && (
          <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
            {getTrendIcon()}
            <span className="text-sm font-medium">{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default MetricCard
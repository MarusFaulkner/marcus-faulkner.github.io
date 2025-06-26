# Patient Health Tracker

A modern, responsive React application for tracking patient health metrics with real-time monitoring and comprehensive analytics.

## Features

### 🏥 Patient Management
- **Patient Dashboard**: Comprehensive overview of all patients with status indicators
- **Individual Patient Profiles**: Detailed patient information including vitals, medical history, and medications
- **Search & Filter**: Advanced filtering by patient status, name, and ID
- **Real-time Status Updates**: Live monitoring of patient conditions

### 📊 Health Analytics
- **Vital Signs Monitoring**: Track heart rate, blood pressure, temperature, and oxygen saturation
- **Interactive Charts**: Real-time data visualization using Recharts
- **Trend Analysis**: Historical data tracking and pattern recognition
- **Custom Dashboards**: Personalized views for different medical departments

### 🔔 Alert System
- **Critical Alerts**: Immediate notifications for emergency situations
- **Customizable Notifications**: Email, SMS, and push notification preferences
- **Alert History**: Complete audit trail of all system alerts
- **Escalation Protocols**: Automated alert routing based on severity

### 📈 Reporting & Analytics
- **Patient Growth Trends**: Monthly enrollment and demographic analysis
- **Status Distribution**: Visual breakdown of patient conditions
- **Age Group Analytics**: Demographic insights for targeted care
- **Recovery Rate Tracking**: Treatment effectiveness metrics

### ⚙️ System Management
- **User Profile Management**: Complete user account customization
- **Security Settings**: Two-factor authentication and session management
- **Data Privacy Controls**: HIPAA-compliant data handling and export
- **System Configuration**: Appearance, notifications, and regional settings

## Technology Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for single-page application
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Beautiful, customizable SVG icons
- **Recharts**: Responsive chart library for data visualization

### Development Tools
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting for consistent code quality
- **PostCSS**: CSS processing with Autoprefixer
- **Modern JavaScript**: ES6+ features and modules

## Getting Started

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MarusFaulkner/patient-health-tracker.git
   cd patient-health-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.jsx      # Main application layout
│   ├── Header.jsx      # Navigation header
│   ├── Sidebar.jsx     # Navigation sidebar
│   ├── MetricCard.jsx  # Health metric display cards
│   ├── PatientCard.jsx # Patient information cards
│   └── VitalChart.jsx  # Chart components for vitals
├── pages/              # Main application pages
│   ├── Dashboard.jsx   # Main dashboard overview
│   ├── Patients.jsx    # Patient management page
│   ├── PatientDetail.jsx # Individual patient details
│   ├── Analytics.jsx   # Analytics and reporting
│   └── Settings.jsx    # Application settings
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Key Features Explained

### Dashboard Overview
The main dashboard provides a comprehensive view of:
- Total patient count with growth trends
- Active monitoring cases
- Critical alerts requiring immediate attention
- System status and health metrics

### Patient Management
- **Patient Cards**: Visual representation of each patient with key information
- **Status Indicators**: Color-coded status (Stable, Monitoring, Critical)
- **Quick Actions**: Direct access to patient details and common tasks
- **Search Functionality**: Real-time search across patient names and IDs

### Health Monitoring
- **Real-time Vitals**: Live tracking of essential health metrics
- **Historical Trends**: Chart-based visualization of patient data over time
- **Alert Thresholds**: Configurable limits for automatic alert generation
- **Multi-patient Monitoring**: Simultaneous tracking of multiple patients

### Analytics & Reporting
- **Growth Analytics**: Patient enrollment trends and demographic analysis
- **Status Distribution**: Visual breakdown of patient conditions
- **Age Demographics**: Insights into patient age groups for targeted care
- **Performance Metrics**: Treatment effectiveness and recovery rates

## Medical Device Integration

This application is designed with medical device compatibility in mind, reflecting Marcus Faulkner's extensive experience in:

- **Robotic Surgery Systems**: Integration patterns suitable for da Vinci system data
- **Medical Device Standards**: HIPAA compliance and medical data security
- **Quality Assurance**: Built-in validation and error handling
- **Manufacturing Principles**: Lean development practices and quality control

## Security & Compliance

- **Data Privacy**: HIPAA-compliant data handling and storage
- **User Authentication**: Secure login with two-factor authentication support
- **Session Management**: Automatic session timeout and security monitoring
- **Audit Trails**: Complete logging of all user actions and data access

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Marcus Faulkner**
- Medical Device & Manufacturing Specialist
- Service Operations Technician II at Intuitive Surgical
- Expert in robotic surgery systems and healthcare technology

## Acknowledgments

- Built with modern React and Tailwind CSS
- Charts powered by Recharts library
- Icons provided by Lucide React
- Inspired by real-world medical device applications and healthcare workflows

---

*This application demonstrates modern web development practices applied to healthcare technology, reflecting the intersection of software engineering and medical device expertise.*
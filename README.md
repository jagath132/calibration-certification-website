<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Calibration Certificate Generator

A professional web application for generating ISO/IEC 17025:2017 compliant calibration certificates. Built with React, TypeScript, and Vite, this tool enables calibration labs to create, manage, and export standardized calibration certificates with real-time preview and PDF generation.

## Features

### Core Functionality
- **Certificate Generation**: Create comprehensive calibration certificates with all required sections
- **Real-time Preview**: Live preview of certificates before PDF generation
- **PDF Export**: Generate multi-page PDF certificates using react-pdf
- **Certificate Management**: Save, load, list, and delete certificates with local storage
- **Data Validation**: Robust form validation using Zod schemas
- **Auto-calculations**: Automatic error calculations for test results

### Certificate Sections
1. **Header Information**: Certificate number, dates, discipline, SRF details
2. **Customer Details**: Name and address
3. **Instrument Details**: Make, model, serial number, specifications
4. **Environmental Conditions**: Temperature, humidity, pressure
5. **Master Equipment**: Standards used for traceability
6. **Test Results**: 
   - Repeatability tests
   - Eccentricity tests
   - Weighing performance tests
7. **Annexure**: Linearity and hysteresis data
8. **Signatures**: Calibrated by and approved by fields

### User Interface
- Modern, responsive design with Tailwind CSS
- Intuitive form navigation with section-based layout
- Certificate library dashboard with search functionality
- Toast notifications for user feedback
- Print-optimized preview views

## Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd calibration-certificate-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## Usage

### Creating a Certificate

1. Start the application and authenticate (mock authentication using localStorage)
2. Navigate through the form sections:
   - **Header Info**: Enter certificate metadata
   - **Client & Inst.**: Add customer and instrument details
   - **Environment**: Specify environmental conditions
   - **Test Results**: Enter repeatability, eccentricity, and weighing performance data
   - **Annexure Data**: Add linearity and hysteresis test data
   - **Signatures**: Enter calibrator and approver names

3. Use the **Preview** tab to review the certificate before generating

4. Click **Save** to store the certificate in the library

5. Click **Download** to generate and download the PDF

### Managing Certificates

1. Click **Library** in the navigation bar to access the certificate dashboard
2. Use the search bar to find certificates by name, certificate number, or customer
3. Click **Load Certificate** to edit an existing certificate
4. Click the delete icon to remove a certificate
5. Click **New Certificate** to create a fresh certificate

### Generating PDFs

1. Ensure all required fields are filled (validation errors will be shown)
2. Click the **Download** button in the navigation bar
3. The PDF will be automatically downloaded with the filename: `Certificate_<certificate_number>.pdf`

## Project Structure

```
calibration-certificate-generator/
├── components/
│   ├── form/              # Form section components
│   ├── AnnexurePreview.tsx
│   ├── Auth.tsx
│   ├── CertificateDashboard.tsx
│   ├── CertificateForm.tsx
│   ├── CertificatePreview.tsx
│   ├── LandingPage.tsx
│   └── PDFDocument.tsx
├── utils/
│   ├── __tests__/         # Test files
│   ├── calculations.ts    # Error calculation utilities
│   ├── storage.ts         # localStorage certificate management
│   └── validation.ts      # Zod validation schemas
├── types.ts               # TypeScript type definitions
├── App.tsx                # Main application component
├── index.tsx              # Application entry point
└── vite.config.ts         # Vite configuration
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

### Testing

The project uses Vitest and React Testing Library for testing. Tests are located in the `utils/__tests__` directory.

Run tests:
```bash
npm test
```

## Deployment

The application is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration.

### Deploy to Vercel

1. Push your code to a Git repository
2. Import the project in Vercel
3. Vercel will automatically detect the Vite configuration and deploy

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **react-pdf** - PDF generation
- **Zod** - Schema validation
- **react-hot-toast** - Toast notifications
- **lucide-react** - Icons
- **Vitest** - Testing framework

## Data Storage

Certificates are stored in the browser's localStorage. Data persists across sessions but is specific to the browser and device.

**Storage Keys:**
- `certgen_user` - Current user session
- `certgen_certificates` - Saved certificates library
- `certgen_current_certificate` - Current working certificate (temporary)

## Browser Support

Modern browsers that support:
- ES2022 features
- localStorage API
- CSS Grid and Flexbox

Recommended browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is private and proprietary.

## Support

For issues, questions, or contributions, please contact the development team.

---

**Precision Engineering Suite** © 2025 ANC LABS

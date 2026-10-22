# Visitor Pass Management System

A MERN stack application for managing visitor entry, issuing visitor passes, tracking check-in/check-out records, and monitoring visitors efficiently for offices, apartments, schools, and gated communities.

## Overview

The Visitor Pass Management System helps administrators and security staff handle visitor registrations and passes digitally instead of relying on manual logs. It supports:

- Visitor registration and pass generation
- Admin dashboard for visitor tracking
- Real-time status updates (Pending, Approved, Checked In, Checked Out)
- Secure login and role-based access
- Search and filtering for visitor records
- Historical logs for audits and compliance

## Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js
- JWT Authentication
- Mongoose
- Bootstrap / Tailwind CSS (depending on implementation)

## Features

- Visitor registration form with personal and purpose details
- Pass approval workflow for admins
- Visitor check-in and check-out tracking
- Automated pass ID generation
- Dashboard statistics and analytics
- Visitor search by name, phone number, or pass ID
- Role-based access for admin and staff users
- Secure environment-based configuration

## Project Structure

```bash
visitor-pass-management/
├── client/                 # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   └── server.js
├── package.json            # Root scripts
├── .gitignore
└── README.md
```

## Prerequisites

Before running the project, make sure you have:

- Node.js v18 or higher
- npm or yarn
- MongoDB installed locally or remote MongoDB Atlas connection
- A modern browser

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
c d <project-folder>
```

2. Install backend dependencies:

```bash
cd server
npm install
```

3. Install frontend dependencies:

```bash
cd ../client
npm install
```

4. Start the backend server:

```bash
cd ../server
npm run dev
```

5. Start the frontend:

```bash
cd ../client
npm start
```

## Usage

1. Register an admin or staff account.
2. Log in to the dashboard.
3. Add a visitor entry with purpose and contact details.
4. Approve or reject the pass request.
5. Check in and check out visitors when they arrive and leave.
6. Search records from the dashboard for audits.

## API Endpoints

Sample backend APIs:

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/visitors` - Create visitor record
- `GET /api/visitors` - Get all visitors
- `GET /api/visitors/:id` - Get a specific visitor
- `PUT /api/visitors/:id` - Update visitor status
- `DELETE /api/visitors/:id` - Delete visitor record

## Future Enhancements

- QR code generation for visitor passes
- SMS or email notifications
- Face recognition or ID verification integration
- Visitor analytics and reports
- Multi-building / multi-office support

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact the project maintainer or team.


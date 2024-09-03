# Railway Management System

## Overview

This project is a railway management system similar to IRCTC, designed using Node.js and MySQL. It allows users to register, log in, check train availability, book seats, and view booking details. Admin users can add new trains.

## Table of Contents

## Setup and Installation

### Prerequisites

- Node.js (version 18.x or higher)
- MySQL server
- Postman or any API testing tool

### Clone the Repository

git clone https://github.com/your-repo/railway-management-system.git
cd railway-management-system

### Install Dependencies

npm install

### Configure Environment Variables

Create a `.env` file in the root directory of the project with the following content:

PORT=3000
DATABASE_URL=mysql://avnadmin:AVNS_gmDjrKjzhv9s3VQHOSl@mysql-17dcc0ef-lib-management-demo-neeraj.k.aivencloud.com:22918/defaultdb?ssl-mode=REQUIRED
JWT_SECRET=6f3b2d4c5e6a7d8e9f1g0h9j8k7l6m5n4o3p2q1r0s
ADMIN_API_KEY=Y29m4kL1n2eX8sM7tR9qW6zV0b3pQ5xN

### Database Setup

Ensure that MySQL is running and the database `defaultdb` is created. Sequelize will automatically create the required tables based on the models.

## Running the Application

### Start the Server

node app.js

The server will start on port 3000 by default.

### Testing the Endpoints

You can use Postman or any API testing tool to test the endpoints. Refer to the API Endpointssection for details on how to test each endpoint.

## API Endpoints

### 1. Register a User

- **URL:** `http://localhost:3000/api/register`
- **Method:** POST
- **Body:**

  {
  "username": "testuser",
  "password": "password123",
  "role": "user" // or "admin"
  }

### 2. Login User

- **URL:** `http://localhost:3000/api/login`
- **Method:** POST
- **Body:**

  {
  "username": "testuser",
  "password": "password123"
  }

### 3. Add a New Train

- **URL:** `http://localhost:3000/api/trains`
- **Method:** POST
- **Headers:**
  - `Authorization: Bearer [Admin JWT Token]`
  - `x-api-key: [Admin API Key]`
- **Body:**

  {
  "source": "Station A",
  "destination": "Station B"
  }

### 4. Get Seat Availability

- **URL:** `http://localhost:3000/api/trains?source=StationA&destination=StationB`
- **Method:** GET
- **Headers:**
  - `Authorization: Bearer [User JWT Token]`

### 5. Book a Seat

- **URL:** `http://localhost:3000/api/bookings`
- **Method:** POST
- **Headers:**
  - `Authorization: Bearer [User JWT Token]`
- **Body:**

  {
  "train_id": 1
  }

### 6. Get Specific Booking Details

- **URL:** `http://localhost:3000/api/bookings/:id`
- **Method:** GET
- **Headers:**
  - `Authorization: Bearer [User JWT Token]`

## Optional: Running Tests

If you have test cases set up, you can run them using the following command:

npm test

**Note:** Ensure you have test cases defined and appropriate configurations set up for testing.

## Troubleshooting

- **SSL Mode Warning:** If you encounter warnings related to `ssl-mode`, consider updating the `mysql2` package or adjusting the configuration settings in your `.env` file.

- **API Not Working:** Ensure the server is running and check the `.env` file for correct environment variables. Verify that the database is properly configured.

For additional support, feel free to open an issue on the repository or contact the project maintainers.

# Bill Management Backend

---

## Project Overview  
This is the backend API for the Bill Management application. It provides RESTful endpoints to manage bills, categories, and users securely and efficiently. The backend handles data storage, authentication, and business logic to support the frontend application.

---

## Technologies Used  
- **Node.js**  
- **Express.js**  
- **MongoDB** (or your DB of choice)  
- **Cors**  
- **dotenv** (for environment variables)  

---

## Key Features  
- CRUD operations for bills and categories  
- Data validation and error handling  
- Integration-ready to connect with the frontend app  

---

## Dependencies

```bash
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "lottie-react": "^2.4.1",
    "mongodb": "^7.0.0"
  }
```

---

## Getting Started

### Prerequisites  
- Node.js installed (v14 or higher recommended)  
- MongoDB database (local or cloud like MongoDB Atlas)  

### Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/yourusername/bill-management-backend.git
   ```
2. Navigate to the backend directory
```bash
cd bill-management-backend
```

Install dependencies
```bash
npm install
```

Create a .env file in the root directory and add the following environment variables:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the development server
```bash
npm run dev
```

The API will be running at:
http://localhost:5000

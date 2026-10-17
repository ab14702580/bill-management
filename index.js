import express from 'express'
import { config } from 'dotenv'
import path from 'path'
import cors from 'cors'
import billRouter from './routes/routes.js'
import { connect } from './connection.js'

config({
    path: path.join(process.cwd(), '.env')
})

const port = process.env.PORT || 5001;
const app = express();

app.use(cors())
app.use(express.json())

// Ensure MongoDB is connected for every request in serverless environment
app.use(async (req, res, next) => {
    try {
        await connect();
        next();
    } catch (error) {
        console.error('Database connection error in request:', error);
        res.status(500).json({ error: 'Database connection failed' });
    }
});

// Root health check route
app.get('/', (req, res) => {
    res.json({ message: "Utility Bill Management API is running on Vercel!" });
});

app.use('/bill', billRouter)

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server is running on ${port}`)
    })
}

// Export for Vercel Serverless Function
export default app;
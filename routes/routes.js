import express from 'express'
import { BillController } from '../controllers/BillController.js';

const billRouter = express.Router();



billRouter.get('/', BillController.allBill);
billRouter.get('/recent-bill/all', BillController.recentBill);
billRouter.get('/:id', BillController.singleBill);
billRouter.get('/bill-filter/all', BillController.filterByBill)
billRouter.post('/pay', BillController.payBill);
billRouter.get('/my-bills/:email', BillController.myBill);
billRouter.patch('/my-bills/:email', BillController.myBillUpdate);
billRouter.delete('/my-bill/delete/:id', BillController.myBillDelete);



export default billRouter
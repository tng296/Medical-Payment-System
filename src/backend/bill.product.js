const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
    billID: {
        type: String,
        required: [true, 'Bill ID is required']
    },
    amountCharge: {
        type: Number,
        required: [true, 'Amount Charge is required']
    },
    dueDate: {
        type: Date,
        required: [true, 'Due Date is required']
    },
    paid: {
        type: Boolean,
        required: [true, 'Paid is required']
    },
    amountDue: {
        type: Number,
        required: [true, 'Amount Due is required']
    }

});

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;
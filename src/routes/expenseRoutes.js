const express = require('express');
const { transactions } = require('../data/store');

const router = express.Router();

// GET: Retrieve all transactions and financial summaries
router.get('/transactions', (req, res) => {
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
  const balance = totalIncome - totalExpense;

  res.status(200).json({
    success: true,
    summary: { totalIncome, totalExpense, balance },
    data: transactions
  });
});

// POST: Add new transaction
router.post('/transactions', (req, res) => {
  try {
    const { title, amount, type, category, date } = req.body;
    if (!title || !amount || !type) {
      return res.status(400).json({ success: false, message: 'Title, amount, and type are required.' });
    }

    const newTx = {
      id: Date.now(),
      title: title.trim(),
      amount: parseFloat(amount),
      type: type === 'income' ? 'income' : 'expense',
      category: category ? category.trim() : 'General',
      date: date || new Date().toISOString().split('T')[0]
    };

    transactions.unshift(newTx);
    res.status(201).json({ success: true, message: 'Transaction added successfully!', data: newTx });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE: Remove transaction by ID
router.delete('/transactions/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = transactions.findIndex(t => t.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Transaction not found.' });
    }

    transactions.splice(index, 1);
    res.status(200).json({ success: true, message: 'Transaction deleted successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
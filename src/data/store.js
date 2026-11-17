/**
 * @project Personal Expense Tracker & Budgeting REST API
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

// In-memory transactions database store
const transactions = [
  { id: 1, title: 'Freelance Upwork Payout', amount: 850, type: 'income', category: 'Freelance', date: '2026-11-15' },
  { id: 2, title: 'Server Hosting AWS', amount: 45, type: 'expense', category: 'Utilities', date: '2026-11-16' },
  { id: 3, title: 'Office Groceries & Coffee', amount: 30, type: 'expense', category: 'Food', date: '2026-11-17' }
];

module.exports = { transactions };
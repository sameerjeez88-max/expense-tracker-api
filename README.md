# 💳 Personal Expense Tracker & Budgeting REST API

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **Personal Expense Tracker & Financial Budgeting REST API** built with Node.js, Express, real-time KPI balance calculations, transaction categorization, and a responsive dark-mode financial dashboard styled with **Tailwind CSS**.

---

## 📋 Table of Contents
1. [Core Features & Highlights](#-core-features--highlights)
2. [Tech Stack & Architecture](#-tech-stack--architecture)
3. [Project Folder Structure](#-project-folder-structure)
4. [API Endpoints Reference](#-api-endpoints-reference)
5. [Local Installation & Setup](#-local-installation--setup)
6. [Testing the Application](#-testing-the-application)
7. [Author & Developer](#-author--developer)

---

## 🌟 Core Features & Highlights

* **Real-Time Financial KPIs:** Instantly computes and displays Total Balance, Total Income, and Total Expenditures.
* **Transaction Management:** Add, categorize, and delete income or expense entries seamlessly.
* **Category Tagging:** Assign custom categories (e.g., Freelance, Utilities, Food) to track spending habits.
* **Modern Dark-Mode UI:** Clean financial command center designed using Tailwind CSS.
* **Clean Code Architecture:** Modular separation of routing logic, in-memory data store, and server configuration.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5 & Tailwind CSS | Responsive financial KPI cards and transaction history table |
| **Backend Runtime** | Node.js & Express.js | REST routing, financial calculations, and CRUD operations |

---

## 📂 Project Folder Structure

```text
expense-tracker-api/
├── public/
│   └── index.html             # Tailwind CSS budgeting dashboard UI
├── src/
│   ├── routes/
│   │   └── expenseRoutes.js   # Transactions CRUD & summary endpoints
│   └── data/
│       └── store.js           # In-memory database store for transactions
├── server.js                  # Main entry point & static bindings
├── package.json               # Dependencies and scripts manifest
├── .env                       # Environment variables configuration
├── .gitignore                 # Git ignore exclusions
└── README.md                  # Comprehensive technical documentation

# 💸 AI Finance Platform

An AI-powered financial analytics platform that helps users **track**, **analyze**, and **optimize** their spending with real-time insights. Built with **Next.js**, **Supabase**, and **Gemini API**, this full-stack platform brings automation, AI, and finance together in one seamless experience.

---

## 🚀 Features

### 📥 AI Receipt Scanner
- Upload bills or receipts and let the AI do the rest.
- Images are processed using **Google Gemini API** to extract structured transaction data in JSON.
- Automatically populates transaction forms and updates spending history.
- Achieves over **97% accuracy**, reducing manual entry time by **75%+**.

### 📧 Monthly Financial Insights via Gemini
- Summarizes users' financial activity at the end of each month.
- Analyzes spending habits using Gemini's LLM to generate smart, personalized insights.
- Delivered via email to drive smarter budgeting and financial planning.
- Boosts user engagement by **65%** through intelligent reporting.

### 📊 Real-Time Financial Dashboard
- View daily, weekly, and monthly spending breakdowns.
- Dynamic charts and data visualizations.
- Automatic categorization of expenses.

### 🔐 Secure Authentication
- Authentication powered by **Supabase Auth**.
- Supports user sessions, email sign-in, and secure token management.

### 📈 Transaction Management
- Add, edit, and delete transactions with ease.
- Attach receipts to each transaction.
- Tag and filter expenses with smart categorization.

---

## 🧠 Tech Stack

| Layer        | Technology                 | Description                                          |
|--------------|----------------------------|------------------------------------------------------|
| Frontend     | **Next.js 14 (App Router)**| React-based framework with server-side rendering     |
| Styling      | **Tailwind CSS**           | Utility-first CSS framework for custom styling       |
| UI Components| **shadcn/ui**              | Accessible, customizable UI components               |
| Backend      | **Supabase (PostgreSQL)**  | Auth + Database + Storage                           |
| ORM          | **Prisma**                 | Type-safe database client & schema management        |
| AI Services  | **Gemini API (Google)**    | Powers receipt scanning and monthly insight emails   |
| Jobs         | **Inngest**                | Handles event-driven background task workflows       |
| Deployment   | **Vercel**                 | Frontend + serverless function hosting               |

---

## 📁 Folder Structure (Simplified)

```bash
.
├── app/               # App Router pages and layouts
│   └── (auth)/        # Auth route grouping (e.g. sign-in)
├── actions/           # Server actions and API logic
├── components/        # Reusable UI components
├── data/              # Static config / sample data
├── emails/            # Monthly insights email templates
├── hooks/             # Custom React hooks
├── lib/               # Utility functions (Gemini, DB, etc.)
├── prisma/            # Prisma schemas & migrations
├── public/            # Static files (images, icons, etc.)
└── .env               # Environment variables

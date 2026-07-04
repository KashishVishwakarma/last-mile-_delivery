# last-mile-_delivery
Logistics operations involve complex pricing rules, dynamic agent assignment, and reliable customer communication. Build a delivery management platform where customers and admins can create orders with auto-calculated charges, agents are assigned intelligently, and customers are notified at every step of the delivery journey.

## 📌 Project Overview

The Last Mile Delivery Tracker is designed to simplify the delivery process from pickup to final destination. Customers can place delivery requests, while admins manage orders and assign the nearest available delivery agent. The system provides live tracking, delivery status updates, and automatic price calculation based on package details.

## ✨ Features

### 👤 Customer
- Create delivery orders
- Enter pickup and drop locations
- View delivery status
- Track delivery in real time
- Receive delivery notifications

### 👨‍💼 Admin
- Dashboard with delivery statistics
- Manage customers and orders
- Assign delivery agents
- Monitor delivery progress
- Update delivery status

### 🚴 Delivery Agent
- View assigned deliveries
- Accept or reject orders
- Navigate to pickup and drop locations
- Update delivery status
- Mark deliveries as completed

### 💰 Pricing
- Automatic delivery charge calculation
- Distance-based pricing
- Weight and package size consideration

### 📍 Tracking
- Live location updates
- Interactive map
- Pickup and destination markers
- Estimated delivery time (ETA)
- ## 📁 Project Structure

```text
Last-Mile-Delivery-Tracker/
│
├── .github/
│   └── workflows/
│       ├── build.yml
│       ├── commit.yml
│       ├── directory.yml
│       └── map.yml
│
├── temp/
│
├── README.md
├── Screenshot-2026-07-03-223546.png
├── app.json
├── App.tsx
├── config.json
├── eslint.json
├── extend.json
├── .gitignore
├── package.json
├── package-lock.json
└── release.config.js
```

### 📂 Folder Description

| File/Folder | Description |
|-------------|-------------|
| `.github/workflows/` | GitHub Actions workflows for build and automation |
| `temp/` | Temporary project files |
| `App.tsx` | Main React/React Native application component |
| `app.json` | Application configuration |
| `config.json` | Project configuration settings |
| `package.json` | Project dependencies and scripts |
| `package-lock.json` | Locked dependency versions |
| `.gitignore` | Files ignored by Git |
| `README.md` | Project documentation |
| `release.config.js` | Release and versioning configuration |
| `Screenshot-2026-07-03-223546.png` | Project screenshot |

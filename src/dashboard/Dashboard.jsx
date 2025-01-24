import React, { useState } from 'react';
import { FaBox, FaUsers, FaShoppingCart, FaUser } from 'react-icons/fa';
import '../styles/Dashboard.css'; // Import your custom CSS styles
import Orders from './Orders'; // Ensure the Orders component is properly imported
import Users from './Users';
import Applicant from './Applicant';

function Dashboard() {
    const [view, setView] = useState(""); // Initially, no view is selected

    const handleViewChange = (viewName) => {
        setView(viewName); // Set the view when a button is clicked
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>Admin Panel</h2>
                </div>
                <nav className="sidebar-nav">
                    <a href="#Applications" className="sidebar-link" onClick={() => handleViewChange("Applications")}>
                        <FaBox className="sidebar-icon" />
                        <span>Applications</span>
                    </a>
                    <a href="#users" className="sidebar-link" onClick={() => handleViewChange("users")}>
                        <FaUser className="sidebar-icon" />
                        <span>Users</span>
                    </a>
                    <a href="#orders" className="sidebar-link" onClick={() => handleViewChange("orders")}>
                        <FaShoppingCart className="sidebar-icon" />
                        <span>Orders</span>
                    </a>
                    <a href="#clients" className="sidebar-link" onClick={() => handleViewChange("clients")}>
                        <FaUsers className="sidebar-icon" />
                        <span>Clients</span>
                    </a>
                </nav>
            </aside>

            <main className="main-content">
                <div className="dashboard-header">
                    <h2>Admin Dashboard</h2>
                    <p>Manage your Applications, users, orders, and clients efficiently.</p>
                </div>

                {/* Conditionally render sections based on the state */}
                {view === "Applications" && (
                    <section id="Applications" className="dashboard-card">
                        <FaBox className="dashboard-icon" />
                        <h3>Applications</h3>
                        <p>Manage your Applications, stock, and pricing.</p>
                        <button className="dashboard-btn">View Applications</button>
                         <Applicant/>
                    </section>
                )}

                {view === "users" && (
                    <section id="users" className="dashboard-card">
                        <FaUser className="dashboard-icon" />
                        <h3>Users</h3>
                        <p>Manage users, view their activity and roles.</p>
                        <button className="dashboard-btn">View Users</button>
                        <Users/>
                    </section>
                )}

                {view === "orders" && (
                    <section id="orders" className="dashboard-card">
                        <FaShoppingCart className="dashboard-icon" />
                        <h3>Orders</h3>
                        <p>Track and manage customer orders and payments.</p>
                        <button className="dashboard-btn">View Orders</button>
                        <Orders /> {/* Display Orders component when view is 'orders' */}
                    </section>
                )}

                {view === "clients" && (
                    <section id="clients" className="dashboard-card">
                        <FaUsers className="dashboard-icon" />
                        <h3>Clients</h3>
                        <p>View and manage client details and interactions.</p>
                        <button className="dashboard-btn">View Clients</button>
                    </section>
                )}
            </main>
        </div>
    );
}

export default Dashboard;

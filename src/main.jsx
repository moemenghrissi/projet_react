import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/css/admin.css";
import './index.css';
import AdminLayout from "./layouts/AdminLayout/AdminLayout.jsx";

import Quotes from "./pages/admin/Quotes/Quotes.jsx";

// Define the admin routes
const AdminRoutes = (
    <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<Quotes />} />
    </Route>
);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {AdminRoutes}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

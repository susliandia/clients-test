import './app.css';
import React from 'react';
import { AppContent } from '../Layout/Layout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ClientsPage } from '../../components/ClientsPage/ClientsPage';
import {
  PRODUCT_URL,
  COSTUMERS_URL,
  INCOME_URL,
  PROMOTE_URL,
  HELP_URL,
  DASHBOARD_URL,
} from '../../routes/Clienturl';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<AppContent />}>
            <Route path={DASHBOARD_URL} element={<p>DASHBOARD</p>} />
            <Route path={PRODUCT_URL} element={<p>PRODUCT</p>} />
            <Route path={COSTUMERS_URL} element={<ClientsPage />} />
            <Route path={INCOME_URL} element={<p>INCOME</p>} />
            <Route path={PROMOTE_URL} element={<p>PROMOTE</p>} />
            <Route path={HELP_URL} element={<p>HELP</p>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

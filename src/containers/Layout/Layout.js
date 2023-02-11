import { Outlet } from 'react-router-dom';
import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import './layout.scss';

export const AppContent = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="contact__users">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

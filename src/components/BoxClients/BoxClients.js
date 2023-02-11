import { ClientsHeader } from '../ClientsHeader/ClientsHeader';
import { ClientsTableHeader } from '../ClientsTableHeader/ClientsTableHeader';
import { ClientsFooter } from '../ClientsFooter/ClientsFooter';
import React from 'react';
import './boxClients.scss';

export const BoxClients = () => {
  return (
    <div className="boxes">
      <ClientsHeader />
      <ClientsTableHeader />
      <ClientsFooter />
    </div>
  );
};

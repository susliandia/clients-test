import { ClientsCards } from '../ClientsCards/ClientsCards';
import './clientsTableHeader.scss';
export const ClientsTableHeader = () => {
  return (
    <>
      <div className="table__header">
        <div className="table__header-info">
          <p>Customer Name</p>
          <p>Company</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
        <div className="table__header-info_second">
          <p>Country</p>
          <p>Status</p>
        </div>
      </div>
      <ClientsCards />
    </>
  );
};

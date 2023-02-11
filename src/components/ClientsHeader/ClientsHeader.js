import './clientsHeader.scss';
import search from '../../assets/search.svg';
export const ClientsHeader = () => {
  return (
    <div className="clients__header">
      <div className="pr-10p">
        <h2 className="clients__header-title">All Customers</h2>
        <p className="clients__header-subtitle">Active Members</p>
      </div>
      <div className="clients__header-search">
        <img className="ml-10p" src={search} alt="" />
        <input
          className="clients__header-search_input"
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
};

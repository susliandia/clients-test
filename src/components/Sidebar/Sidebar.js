import './sidebar.scss';
import {
  Logo,
  Dashboard,
  Product,
  Customers,
  Income,
  Promote,
  Help,
  Arrow,
} from '../../assets/icon';
import iconProfile from '../../assets/IconProfile.png';
import { Link, useLocation } from 'react-router-dom';
import {
  PRODUCT_URL,
  COSTUMERS_URL,
  INCOME_URL,
  PROMOTE_URL,
  HELP_URL,
  DASHBOARD_URL,
} from '../../routes/Clienturl';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo-title">
        <Logo />
        <h2 className="sidebar__title">Dashboard</h2>
      </div>
      <div className="sidebar__pages">
        <ul className="pl-30p-w10">
          <Link to={DASHBOARD_URL}>
            <Item
              path={DASHBOARD_URL}
              title={'Dashboard'}
              icon={<Dashboard />}
            />
          </Link>

          <Link to={PRODUCT_URL}>
            <Item
              path={PRODUCT_URL}
              title={'Product'}
              icon={<Product />}
              arrow={<Arrow />}
            />
          </Link>

          <Link to={COSTUMERS_URL}>
            <Item
              path={COSTUMERS_URL}
              title={'Customers'}
              icon={<Customers />}
              arrow={<Arrow />}
            />
          </Link>

          <Link to={INCOME_URL}>
            <Item
              path={INCOME_URL}
              title={'Income'}
              icon={<Income />}
              arrow={<Arrow />}
            />
          </Link>

          <Link to={PROMOTE_URL}>
            <Item
              path={PROMOTE_URL}
              title={'Promote'}
              icon={<Promote />}
              arrow={<Arrow />}
            />
          </Link>

          <Link to={HELP_URL}>
            <Item
              path={HELP_URL}
              title={'Help'}
              icon={<Help />}
              arrow={<Arrow />}
            />
          </Link>
        </ul>
      </div>
      <div className="sidebar__profile">
        <img className="sidebar__icon" src={iconProfile} />
        <div className="sidebar__profile-info">
          <p className="sidebar__profile-name">Evano</p>
          <p className="sidebar__profile-job">Project Managar</p>
        </div>
      </div>
    </div>
  );
};

const Item = ({ title, icon, arrow, path }) => {
  const location = useLocation();
  const active = path === location.pathname;
  const activeClass = active ? 'sidebar__itemActive' : '';

  return (
    <li className={`${activeClass} sidebar__item`}>
      <div className="sidebar__item-background"></div>
      <div className="sidebar__item-icon">{icon}</div>
      <span className="sidebar__subtitle">{title}</span>
      <span className="sidebar__arrow">{arrow}</span>
    </li>
  );
};

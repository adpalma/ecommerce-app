import './MainLayout.css';
import { useState } from 'react';
import {
  PiTicketDuotone,
  PiUserDuotone,
  PiHouseDuotone,
  PiHouseFill,
  PiTicketFill,
  PiUserFill,
} from 'react-icons/pi';
import { Home } from '../pages/Home';
import { Coupons } from '../pages/Coupons';
import { Profile } from '../pages/Profile';
import { NavItem } from '../components/nav-item';

export const MainLayout = () => {
  const [page, setPage] = useState(0);

  const renderPage = () => {
    switch (page) {
      case 0:
        return <Home />;
      case 1:
        return <Coupons />;
      case 2:
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div className="page">{renderPage()}</div>
      <nav>
        <ul className="nav-list">
          <NavItem
            label="Home"
            onClick={() => setPage(0)}
            NavIcon={PiHouseDuotone}
            SelectedNavIcon={PiHouseFill}
            isSelected={page === 0}
          />
          <NavItem
            label="My Coupons"
            onClick={() => setPage(1)}
            NavIcon={PiTicketDuotone}
            SelectedNavIcon={PiTicketFill}
            isSelected={page === 1}
          />
          <NavItem
            label="Me"
            onClick={() => setPage(2)}
            NavIcon={PiUserDuotone}
            SelectedNavIcon={PiUserFill}
            isSelected={page === 2}
          />
        </ul>
      </nav>
    </>
  );
};

import { Outlet } from 'react-router-dom';
import styles from './Sidebar.module.css';
import AppNav from '../AppNav/AppNav';
import Logo from '../../shared/Logo/Logo';
import Footer from '../Footer/Footer';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;

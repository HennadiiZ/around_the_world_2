import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to='/'>
      <div className={styles.logoContainer}>
        <img
          src='/logo.png'
          alt='Around The World logo'
          className={styles.logo}
        />
      </div>
    </Link>
  );
}

export default Logo;

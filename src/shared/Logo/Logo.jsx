import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to='/'>
      <img
        src='/logo.png'
        alt='Around The World logo'
        className={styles.logo}
      />
      {/* <div className={styles.logo}>Around The World</div> */}
    </Link>
  );
}

export default Logo;

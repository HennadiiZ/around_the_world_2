import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav';
import styles from './Homepage.module.css';

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>Do you like to travel the world?</h1>
        <h2>
          With the 'Around The World app,' you can effortlessly track your
          travels and cherish the memories of your adventures.
        </h2>
        <h2>
          Imagine a world map that records every step you've taken in cities all
          around the globe. Never lose the memory of your incredible adventures,
          and proudly share with your friends the remarkable journey you've
          embarked on across the world
        </h2>
        <Link to='/login' className='cta'>
          Start tracking now
        </Link>
      </section>
    </main>
  );
}

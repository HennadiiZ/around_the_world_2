import PageNav from '../components/PageNav';
import styles from './Product.module.css';

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src='img-1.jpg'
          alt='person with dog overlooking mountain with sunset'
        />
        <div>
          <h2>About "Around The World" app.</h2>
          <p>
            At "Around The World" we believe that travel is a transformative
            experience, and every city holds a story waiting to be discovered.
            Our app is designed to empower travelers like you, so you can
            capture the magic of your journeys and share it with the world.
          </p>
          <p>
            We're passionate about enabling your wanderlust and turning your
            travel dreams into reality. Our app is built with love and
            commitment to helping you explore the world, one adventure at a
            time.
          </p>
        </div>
      </section>
    </main>
  );
}

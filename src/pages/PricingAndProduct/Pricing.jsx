import PageNav from '../../components/PageNav/PageNav';
import styles from './Product.module.css';

export default function Pricing() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Pricing is so afordable.
            <br />
            Just $1/month.
          </h2>
          <p>
            Do you dream of exploring the world, one city at a time? With the
            "Around The World" app, your dreams become a reality. For just $1,
            you can unlock a world of features and experiences that will forever
            change the way you travel.
          </p>
        </div>
        <img src='img-2.jpg' alt='overview of a large city with skyscrapers' />
      </section>
    </main>
  );
}

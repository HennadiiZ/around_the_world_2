import styles from './SpinnerSmall.module.css';

function SpinnerSmall() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default SpinnerSmall;

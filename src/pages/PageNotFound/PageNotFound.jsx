import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.messege}>Page not found!</div>
      </div>
    </>
  );
};

export default PageNotFound;

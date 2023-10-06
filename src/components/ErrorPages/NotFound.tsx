import { css } from '@emotion/css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.text}>Oops! Page not found.</p>
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f8f8;
  `,
  heading: css`
    font-size: 4rem;
    font-weight: bold;
    color: #333333;
    margin-bottom: 1rem;
  `,
  text: css`
    font-size: 1.5rem;
    color: #666666;
  `,
};

export default NotFound;
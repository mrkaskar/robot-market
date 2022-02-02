import React from 'react';
import styles from 'components/Error/Error.module.css';

interface IError {
  message: string
}
function Error({ message }: IError): React.ReactElement {
  return (
    <div className={styles.error}>
      <b>Something went wrong!</b>
      <p>
        Reason:
        {' '}
        {message}
      </p>
      <button
        className={styles.error__button}
        type="button"
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );
}

export default Error;

import React from 'react';
import styles from './HookDetails.module.css';

export default function HookDetails() {
  return (
    <section className={styles.features}>
      <div className="container">

        <h3 className={styles.red}>
          Installation
        </h3>
        <pre>
          npm install --save react-use-custom-hooks
          <br />
          yarn add react-use-custom-hooks
        </pre>
        <h3 className={styles.red}>
          Usage
        </h3>
        <pre>
          {`import {useDebounce} from 'react-use-custom-hooks';`}
        </pre>
      </div>
    </section>
  );
}

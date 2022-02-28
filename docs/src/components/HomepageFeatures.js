import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to install and use',
  },
  // {
  // title: 'Supports SSR',
  // },

  {
    title: 'Comprehensive documentation',
  },
  {
    title: 'TypeScript support',
  },
];

function Feature({ Svg, title, description }) {
  return (
    <li className={styles.feature_item}>{title}</li>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <ol className={styles.spread}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ol>
      </div>
    </section>
  );
}

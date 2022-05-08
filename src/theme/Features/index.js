import React from "react";
import clsx from "clsx";
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useColorMode} from '@docusaurus/theme-common';

import styles from "./styles.module.scss";

const size = 64;
const data = [
  {
    title: <>Countries</>,
    icon: 'img/features/countries-w.svg',
    iconDark: 'img/features/countries-b.svg',
    description: (
      <>
        Get a list of countries with ISO2, ISO3, Phonecode, Capital, Currency, Flag etc.
      </>
    ),
  },
  {
    title: <>States</>,
    icon: 'img/features/states-w.svg',
    iconDark: 'img/features/states-b.svg',
    description: (
      <>
        Get a list of states with ISO2 code and attached to its belonging country code.
      </>
    ),
  },
  {
    title: <>Cities</>,
    icon: 'img/features/cities-w.svg',
    iconDark: 'img/features/cities-b.svg',
    description: (
      <>
        Get a list of cities attached with state and country code, longitude and latitude information.
      </>
    ),
  },
];

function Feature({ icon, iconDark, title, description }) {
  const {colorMode, setColorMode} = useColorMode();
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="item">
        {icon && <div className={styles.icon}>
          <img
            src={(colorMode === 'dark') ? useBaseUrl(iconDark) : useBaseUrl(icon)}
            alt={title}
            width={size}
          />
        </div>}
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <>
      {data && data.length && (
        <section id="features" className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--11 col--offset-1">
                <div className="row">
                  {data.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Features;

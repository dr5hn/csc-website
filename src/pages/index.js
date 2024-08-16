import React from "react";
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from "./styles.module.scss";

import Examples from "@theme/Examples";
import Features from "@theme/Features";
import Hero from "@theme/Hero";

function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
      <Layout description={siteConfig.tagline}>
        <Hero />

        <main className={clsx(styles.main)}>
          <Features />
          <Examples />
        </main>
      </Layout>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';

import styles from "./styles.module.scss";

function CodeSnippet({ language = "rust", code }) {
  const { siteConfig } = useDocusaurusContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { colorMode } = useColorMode();

  const theme = colorMode === 'dark' ? themes.dracula : themes.github;

  if (!mounted) {
    return <pre className={styles.codePlaceholder}>Loading...</pre>;
  }

  return (
    <Highlight
      code={code}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${styles.code}`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default CodeSnippet;

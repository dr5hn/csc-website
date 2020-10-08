import React from "react";
import CodeSnippet from "@theme/CodeSnippet";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import Headline from "@theme/Headline";
import snippets from "./snippets";
import styles from "./styles.module.scss";

function renderTabs() {
  return (
    <Tabs
      defaultValue={snippets[0].label}
      values={snippets.map((props, idx) => {
        return { label: props.label, value: props.label };
      })}
      className={styles.tabs}
    >
      {snippets.map((props, idx) => (
        <TabItem key={idx} value={props.label}>
          <CodeSnippet key={idx} {...props} />
        </TabItem>
      ))}
    </Tabs>
  );
}

function Examples() {
  return (
    <>
      {snippets && snippets.length && (
        <section id="examples" className={styles.examples}>
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <Headline
                  category="Examples"
                  title="Quick snippets to get started with Country State City API"
                />
                {renderTabs()}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Examples;

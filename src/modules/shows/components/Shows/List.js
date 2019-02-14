import React from "react";
import Row from "./Row";

import styles from "./list.module.css";

export default ({ shows }) => (
  <div className={styles.showList}>
    {shows.map(show => (
      <Row key={show.id} {...show} />
    ))}
  </div>
);

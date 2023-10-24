import React from "react";
import Link from "next/link";
import styles from "./menucategories.module.css";
const menucategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href={"/blog?cat=style"}
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href={"/blog?cat=style"}
        className={`${styles.categoryItem} ${styles.food}`}
      >
        Food
      </Link>
      <Link
        href={"/blog?cat=style"}
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        Fashion
      </Link>
      <Link
        href={"/blog?cat=style"}
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        Coding
      </Link>
      <Link
        href={"/blog?cat=style"}
        className={`${styles.categoryItem} ${styles.culture}`}
      >
        Culture
      </Link>
      <Link
        href={"/blog?cat=style"}
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Travel
      </Link>
    </div>
  );
};

export default menucategories;

import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
          <Link
            href={"/blog?cat=style"}
            className={`${styles.category} ${styles.style}`}
          >
            <Image
              src="/assets/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            ></Image>
            Style
          </Link>
          <Link href={"/blog"} className={`${styles.category} ${styles.food}`}>
            <Image
              src="/assets/food.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            ></Image>
            Food
          </Link>
          <Link
            href={"/blog"}
            className={`${styles.category} ${styles.fashion}`}
          >
            <Image
              src="/assets/fashion.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            ></Image>
            Fashion
          </Link>
          <Link
            href={"/blog"}
            className={`${styles.category} ${styles.travel}`}
          >
            <Image
              src="/assets/travel.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            ></Image>
            Travel
          </Link>
          <Link
            href={"/blog"}
            className={`${styles.category} ${styles.culture}`}
          >
            <Image
              src="/assets/culture.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            ></Image>
            Culture
          </Link>
          <Link
            href={"/blog"}
            className={`${styles.category} ${styles.coding}`}
          >
            <Image
              src="/assets/coding.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            ></Image>
            Coding
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryList;

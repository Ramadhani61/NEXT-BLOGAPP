import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menupost.module.css";
const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href={"/"} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src={"/assets/p1.jpeg"}
              alt=""
              fill
              className={styles.image}
            ></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Waka </span>
            <span className={styles.date}>- 10.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src={"/assets/p1.jpeg"}
              alt=""
              fill
              className={styles.image}
            ></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.culture}`}>Culture</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Waka </span>
            <span className={styles.date}>- 10.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src={"/assets/p1.jpeg"}
              alt=""
              fill
              className={styles.image}
            ></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Waka </span>
            <span className={styles.date}>- 10.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src={"/assets/p1.jpeg"}
              alt=""
              fill
              className={styles.image}
            ></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.fashion}`}>Fashion</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Waka </span>
            <span className={styles.date}>- 10.10.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;

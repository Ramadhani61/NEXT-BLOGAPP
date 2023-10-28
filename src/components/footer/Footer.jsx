import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={"/assets/icon.png"} alt="" width={50} height={50}></Image>
          <h1 className={styles.logoText}>Waka</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          veritatis, aspernatur sed beatae provident, nemo nobis minus
          consequuntur perspiciatis similique nisi blanditiis. Consequuntur et
          ex ullam, dolor at repudiandae praesentium.
        </p>
        <div className={styles.icons}>
          <Image
            src={"/assets/facebook.png"}
            alt=""
            width={18}
            height={18}
          ></Image>
          <Image
            src={"/assets/instagram.png"}
            alt=""
            width={18}
            height={18}
          ></Image>
          <Image
            src={"/assets/tiktok.png"}
            alt=""
            width={18}
            height={18}
          ></Image>
          <Image
            src={"/assets/youtube.png"}
            alt=""
            width={18}
            height={18}
          ></Image>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={"/"}>Coding</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Food</Link>
          <Link href={"/"}>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>Tiktok</Link>
          <Link href={"/"}>Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
const Comment = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            className={styles.input}
            placeholder="write your comments.."
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link>Login to write comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/assets/culture.png"}
              alt=""
              height={50}
              width={50}
              className={styles.image}
            ></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>Waka</span>
              <span className={styles.date}>12.12.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo esse
            hic nulla vitae laborum dolorem consequuntur cum molestiae ratione
            aliquid quaerat, quasi tempore possimus optio voluptates laudantium
            doloremque exercitationem! Voluptatem.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/assets/culture.png"}
              alt=""
              height={50}
              width={50}
              className={styles.image}
            ></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>Waka</span>
              <span className={styles.date}>12.12.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo esse
            hic nulla vitae laborum dolorem consequuntur cum molestiae ratione
            aliquid quaerat, quasi tempore possimus optio voluptates laudantium
            doloremque exercitationem! Voluptatem.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/assets/culture.png"}
              alt=""
              height={50}
              width={50}
              className={styles.image}
            ></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>Waka</span>
              <span className={styles.date}>12.12.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo esse
            hic nulla vitae laborum dolorem consequuntur cum molestiae ratione
            aliquid quaerat, quasi tempore possimus optio voluptates laudantium
            doloremque exercitationem! Voluptatem.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/assets/culture.png"}
              alt=""
              height={50}
              width={50}
              className={styles.image}
            ></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>Waka</span>
              <span className={styles.date}>12.12.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo esse
            hic nulla vitae laborum dolorem consequuntur cum molestiae ratione
            aliquid quaerat, quasi tempore possimus optio voluptates laudantium
            doloremque exercitationem! Voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

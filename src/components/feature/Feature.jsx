import React from "react";
import styles from "./feature.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <b>Hey, Waka is here!</b> shares your stories and creative ideas.
        </h1>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/assets/p1.jpeg" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h1>
            <p className={styles.postDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque nobis consequuntur in labore! Dolorum officiis
              repudiandae incidunt quas architecto, eaque ea eius laboriosam est
              debitis, repellat quod esse et soluta.
            </p>
            <button className={styles.button}> Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;

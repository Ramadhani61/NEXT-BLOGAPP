import Menu from "@/components/menu/Menu";
import Comments from "@/components/Comments/Comment";
import styles from "./singlePage.module.css";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={"/assets/p1.jpeg"}
                alt=""
                fill
                className={styles.avatar}
              ></Image>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Waka Etc.</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/assets/p1.jpeg"}
            alt=""
            fill
            className={styles.image}
          ></Image>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nisi
              dolor ex autem quisquam dolorum expedita architecto consequatur
              sunt hic aperiam, repudiandae esse, accusantium ut, velit adipisci
              placeat voluptatum deleniti.
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nisi
              dolor ex autem quisquam dolorum expedita architecto consequatur
              sunt hic aperiam, repudiandae esse, accusantium ut, velit adipisci
              placeat voluptatum deleniti.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nisi
              dolor ex autem quisquam dolorum expedita architecto consequatur
              sunt hic aperiam, repudiandae esse, accusantium ut, velit adipisci
              placeat voluptatum deleniti.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;

import React from "react";
import CardList from "../../components/cardList/CardList";
import Menu from "../../components/menu/Menu";
import styles from "./blopage.module.css";
const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;

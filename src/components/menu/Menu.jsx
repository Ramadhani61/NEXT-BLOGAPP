import React from "react";
import styles from "./menu.module.css";
import MenuCategories from "../menucategories/menucategories";
import MenuPost from "../menuPosts/MenuPost";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false}></MenuPost>
      <h2 className={styles.subtitle}>Discover by Topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories></MenuCategories>
      <h2 className={styles.subtitle}>Chosen By the Editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPost withImage={true}></MenuPost>
    </div>
  );
};

export default Menu;

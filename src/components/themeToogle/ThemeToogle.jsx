"use client";
import React from "react";
import styles from "./toogle.module.css";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToogle = () => {
  const { toogle, theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={styles.container}
        onClick={toogle}
        style={
          theme === "dark"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#0f172a" }
        }
      >
        <Image src="/assets/moon.png" alt="moon" width={14} height={14}></Image>
        <div
          className={styles.ball}
          style={
            theme === "dark"
              ? { left: 1, background: "#0f172a" }
              : { right: 1, background: "white" }
          }
        ></div>
        <Image src="/assets/sun.png" alt="moon" width={14} height={14}></Image>
      </div>
    </>
  );
};

export default ThemeToogle;

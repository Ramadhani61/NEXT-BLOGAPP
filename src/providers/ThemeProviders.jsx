"use client";

import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
const ThemeProviders = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProviders;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
//css파일을 javascript파일인 것처럼 import함
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/blog">Another</Link> {path == "/blog" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}

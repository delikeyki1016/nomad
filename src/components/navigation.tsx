"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css"

export default function Navigation() {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Home</Link>{path === "/" ? "😘" : ""}</li>
                <li><Link href="/mypage">Mypage</Link>{path === "/mypage" ? "😘" : ""}</li>
                <li><Link href="/signin">Signin</Link>{path === "/signin" ? "😘" : ""}</li>
                <li><Link href="/notice/1">Notice</Link>{path === "/notice/:id" ? "😘" : ""}</li>
            </ul>
        </nav>        
    )
}
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li><Link href="/">홈</Link>{path === "/" ? "😘" : ""}</li>
                <li><Link href="/mypage">mypage</Link>{path === "/mypage" ? "😘" : ""}</li>
                <li><Link href="/signin">signin</Link>{path === "/signin" ? "😘" : ""}</li>
                <li><Link href="/notice/1">notice</Link>{path === "/notice/:id" ? "😘" : ""}</li>
            </ul>
        </nav>        
    )
}
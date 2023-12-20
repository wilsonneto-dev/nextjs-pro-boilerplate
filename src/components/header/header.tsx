import styles from './header.module.scss';
import Link from "next/link";
import Button from "@/components/button/button";

export default function Header()
{
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div>
                    <div>
                        <b>Next.js</b>
                    </div>
                </div>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/">Mission</Link>
                    <Link href="/">Portfolio</Link>
                    <Link href="/">Blog</Link>
                </div>
                <div>
                    <Button>Contact</Button>
                </div>
            </div>
        </header>
    )
}

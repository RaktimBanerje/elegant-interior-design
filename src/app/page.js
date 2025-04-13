import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/vercel.jpg"
          alt="Vercel logo"
          width={180}
          height={38}
          priority
        />
        
        <p className={styles.warningMessage}>
          ⚠️ We're currently experiencing a server-side issue. Please bear with us — our engineers are working hard to resolve it as soon as possible. Thank you for your patience!
        </p>
      </main>
    </div>
  );
}
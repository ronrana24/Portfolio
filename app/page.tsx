import LeftPart from "./components/left-part";
import RightPart from "./components/right-part/right-part";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <LeftPart />
      <RightPart />
    </main>
  );
}

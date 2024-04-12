import styles from "./page.module.css";
import Topbanner from "@/components/landing/Topbanner";
import DanceGif from "@/components/landing/DanceGif";
import ThirdSection from "@/components/landing/ThirdSection";
import FourthSection from "@/components/landing/FourthSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Topbanner />
      <DanceGif />
      <ThirdSection />
      <FourthSection />
    </main>
  );
}

import CategoryList from "@/Components/categoryList/CategoryList";
import styles from "./homepage.module.css";
import Featured from "@/Components/featured/Featured";
import CardList from "@/Components/cardList/CardList";
import Menu from "@/Components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

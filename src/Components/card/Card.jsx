import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}> Culture</span>
        </div>
        <Link href="/">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem
          quasi libero sint, iure hic aut nam illo officiis? Sunt alias delectus
          deleniti voluptatibus tempora beatae impedit voluptatem explicabo eos!
          Quo perspiciatis officiis ex expedita tempore? Incidunt exercitationem
          nostrum nihil labore quo unde libero perferendis error, excepturi
          voluptas, ducimus natus odit illo delectus, facere architecto iure
          nisi nobis vero cum.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import styles from "./Anim.module.css";
import Image from "next/image";
import res from "../public/assets/res.png";
import img2 from "../public/assets/img2.png";
import img1 from "../public/assets/img1.png";

function Anim() {
  return (
    <div className={styles.animContainer}>
      <div style={{ background: "yellow" }} className={styles.viewHolder}>
        <div className={styles.animationContainer}>
          <Image
            className={styles.img_1}
            src={img1.src}
            width={150}
            height={150}
            alt={""} // Must be updated from image description
          />
          <Image
            className={styles.img_res}
            src={res.src}
            width={150}
            height={150}
            alt={""} // Must be updated from image description
          />
          <Image
            className={styles.img_2}
            src={img2.src}
            width={150}
            height={150}
            alt={""} // Must be updated from image description
          />
        </div>
      </div>
      <div className={styles.description}>
        <h2>Createart</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          sit, consectetur officiis, totam distinctio modi provident voluptates
          ex quod amet quasi maiores molestias dolore voluptate, illo fuga
          laudantium. Impedit, explicabo?
        </p>
      </div>
    </div>
  );
}

export default Anim;

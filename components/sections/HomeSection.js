import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import styles from "/styles/HomeSection.module.css";

const HomeSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeContent}>
        <div className={styles.headingContainer}>
          <motion.h1
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            className={styles.mainHeading}
          >
            WELCOME
          </motion.h1>
          <motion.h3
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
            className={styles.subHeading}
          >
            TO <span className={styles.diff}>CHAKRA KRIYA</span>
          </motion.h3>
        </div>

        <motion.p
          whileInView={{ opacity: 1, transform: "translateY(0%) " }}
          initial={{ opacity: 0, transform: "translateY(-100%) " }}
          transition={{
            duration: 0.3,
            delay: 0.3,
          }}
          className={styles.subHeading2}
        >
          ANCIENT ART OF <span className={styles.diff2}>YOGIC SCIENCE</span>
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, transform: "translateX(0%) " }}
          initial={{ opacity: 0, transform: "translateX(-100%) " }}
          transition={{
            duration: 0.3,
            delay: 0.5,
          }}
          className={styles.para}
        >
          Groundbreaking breathwork meditation technology proven by science.
          Unleash your peak performance & unlock your inner pharmacy with
        </motion.p>

        <div className={styles.buttonContainer}>
          <motion.div
            whileInView={{ opacity: 1, transform: "translateX(0%) " }}
            initial={{ opacity: 0, transform: "translateX(-100%) " }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
            className={styles.buttonWrapper}
          >
            <Link className={styles.button} href={"/"}>
              TRY CHAKRA KRIYA FOR FREE
            </Link>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, transform: "translateX(0%) " }}
            initial={{ opacity: 0, transform: "translateX(-100%) " }}
            transition={{
              duration: 0.3,
              delay: 0.7,
            }}
            className={styles.buttonWrapper}
          >
            <Link className={styles.button} href={"/"}>
              TRY CHAKRA KRIYA MASTER CLASSES
            </Link>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, transform: "translateX(0%) " }}
            initial={{ opacity: 0, transform: "translateX(-100%) " }}
            transition={{
              duration: 0.3,
              delay: 1.1,
            }}
            className={styles.buttonWrapper}
          >
            <Link className={styles.button} href={"/"}>
              TRY CHAKRA KRIYA COURSES
            </Link>
          </motion.div>
        </div>
      </div>
      <Image
        src={"/images/homeImg1.jpg"}
        width={600}
        height={1000}
        alt="Home Background Image"
        className={`${styles.backgroundImg1} ${styles.backgroundImg}`}
      ></Image>
      <Image
        width={600}
        height={1000}
        alt="Home Background Image"
        src={"/images/homeImg2.jpg"}
        className={`${styles.backgroundImg2} ${styles.backgroundImg}`}
      ></Image>
    </div>
  );
};

export default HomeSection;

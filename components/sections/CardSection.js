import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "/styles/CardSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const cardSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.curve}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#232323"
            fill-opacity="1"
            d="M0,288L120,256C240,224,480,160,720,154.7C960,149,1200,203,1320,229.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <Image
              className={styles.cardImage}
              src="/images/cards/card1.png"
              width={100}
              height={100}
              alt="Card Head Image"
            />
          </div>
          <div className={styles.cardTop}>
            <div className={styles.headingContainer}>
              <h1 className={styles.heading}>FOOD FOR SOUL</h1>
            </div>
            <p className={styles.para}>
              Around the world, 815 million people regularly go to bed hungry...
              which is why we made it our mission to provide meals to those in
              need.
            </p>
          </div>
          <Link className={styles.button} href="/">
            JOIN NOW
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <Image
              className={styles.cardImage}
              src="/images/cards/card2.png"
              width={100}
              height={100}
              alt="Card Head Image"
            />
          </div>
          <div className={styles.cardTop}>
            <div className={styles.headingContainer}>
              <h1 className={styles.heading}>EDUCATION</h1>
            </div>
            <p className={styles.para}>
              Education is every child&apos;s birth right, but unfortunately
              millions around the world are deprived from it. By educating one
              at a time, the world becomes a better place!
            </p>
          </div>
          <Link className={styles.button} href="/">
            JOIN NOW
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <Image
              className={styles.cardImage}
              src="/images/cards/card1.png"
              width={100}
              height={100}
              alt="Card Head Image"
            />
          </div>
          <div className={styles.cardTop}>
            <div className={styles.headingContainer}>
              <h1 className={styles.heading}>ANIMAL WELFARE</h1>
            </div>
            <p className={styles.para}>
              Animals need love too! Which is why it is also important to
              regularly contribute towards animal welfare and protecting
              nature&apos;s residents.
            </p>
          </div>
          <Link className={styles.button} href="/">
            JOIN NOW
          </Link>
        </div>
      </div> */}

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          250: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className={`${"mySwiper"} ${styles.swiperContainer}`}
      >
        <SwiperSlide className={styles.card}>
          <div className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image
                className={styles.cardImage}
                src="/images/cards/card1.png"
                width={100}
                height={100}
                alt="Card Head Image"
              />
            </div>
            <div className={styles.cardTop}>
              <div className={styles.headingContainer}>
                <h1 className={styles.heading}>ANIMAL WELFARE</h1>
              </div>
              <p className={styles.para}>
                Animals need love too! Which is why it is also important to
                regularly contribute towards animal welfare and protecting
                nature&apos;s residents.
              </p>
            </div>
            <Link className={styles.button} href="/">
              JOIN NOW
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
          <div className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image
                className={styles.cardImage}
                src="/images/cards/card1.png"
                width={100}
                height={100}
                alt="Card Head Image"
              />
            </div>
            <div className={styles.cardTop}>
              <div className={styles.headingContainer}>
                <h1 className={styles.heading}>ANIMAL WELFARE</h1>
              </div>
              <p className={styles.para}>
                Animals need love too! Which is why it is also important to
                regularly contribute towards animal welfare and protecting
                nature&apos;s residents.
              </p>
            </div>
            <Link className={styles.button} href="/">
              JOIN NOW
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
          <div className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image
                className={styles.cardImage}
                src="/images/cards/card1.png"
                width={100}
                height={100}
                alt="Card Head Image"
              />
            </div>
            <div className={styles.cardTop}>
              <div className={styles.headingContainer}>
                <h1 className={styles.heading}>ANIMAL WELFARE</h1>
              </div>
              <p className={styles.para}>
                Animals need love too! Which is why it is also important to
                regularly contribute towards animal welfare and protecting
                nature&apos;s residents.
              </p>
            </div>
            <Link className={styles.button} href="/">
              JOIN NOW
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>

      <Image
        src={"/images/curves/blobGroup.png"}
        className={`${styles.blobGroup} ${styles.blobGroup1}`}
        width={100}
        height={100}
        alt={"Blob Group Image"}
      />
      <Image
        src={"/images/curves/blobGroup2.png"}
        className={`${styles.blobGroup} ${styles.blobGroup2}`}
        width={300}
        height={300}
        alt={"Blob Group Image"}
      />
    </div>
  );
};

export default cardSection;

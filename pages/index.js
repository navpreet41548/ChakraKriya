import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/HomeSection.module.css";
import HomeSection from "../components/sections/HomeSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Chakra Kriya</title>
        <meta name="description" content="Chakra Kriya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSection />
    </Layout>
  );
}

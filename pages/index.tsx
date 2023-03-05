import Socials from "../components/Socials";
import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss"
import { GetStaticProps } from "next";
import { socialType } from "../types";
import { FC } from "react";

type socialInfoType = {
  socials: [socialType],
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials/`);
  const data = await response.json();

  if (!data) {
      return {
          notFound: true,
      }
  }

  return {
      props: { socials: data },
  }
}

const Home:FC<socialInfoType> = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
        <title>Home</title>
    </Head>
    <Heading text="Next.js Application" /> 
    <Socials socials={socials} />
  </div>
);

export default Home;




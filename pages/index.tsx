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

console.log(process.env.API_HOST);

export const getStaticProps:GetStaticProps = async () => {
  try {
  // const response = await fetch(`${process.env.API_HOST}/socials/`);
  const response = await fetch(`https://next-js-maxexc.vercel.app/api/socials/`);
  const data = await response.json();

  if (!data) {
      return {
          notFound: true,
      }
  }

  return {
      props: { socials: data },
  }
} catch {
  return {
    props: {socials: null},
  }
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

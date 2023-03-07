import { GetStaticProps } from "next";
import { FC } from "react";
import { socialType } from "../types";
import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";
import MainContainer from "../components/MainContainer";
// import MainContainer from "../components/MainContainer";

console.log(process.env.NEXT_PUBLIC_API_HOST);

type socialInfoType = {
  socials: [socialType],
}

export const getStaticProps:GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/socials`);
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
      props: { socials: null },
    }
  }
};

const Home:FC<socialInfoType> = ({ socials }) => (
  <>
  <MainContainer nameTitle={"Home"} keyword={"application"}>
    {/* <Head>
      <title>Home</title>
      <meta name="Next.js project created by maxexc" content="application" ></meta>
    </Head> */}
    <div className={styles.wrapper}>
      <Heading text="Next.js Application" />
      <Socials socials={socials} />
    </div>
  </MainContainer >
  </>
);

export default Home;


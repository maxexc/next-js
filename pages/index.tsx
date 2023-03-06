import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

console.log(process.env.NEXT_PUBLIC_API_HOST);


export const getStaticProps = async () => {
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

const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Next.js Application" />
    <Socials socials={socials} />
  </div>
);

export default Home;



// import { GetStaticProps } from "next";
// import { FC } from "react";
// import { socialType } from "../types";
// import Head from "next/head";
// import Heading from "../components/Heading";
// import Socials from "../components/Socials";
// import styles from "../styles/Home.module.scss"

// type socialInfoType = {
//   socials: [socialType],
// }

// console.log("test");

// console.log(process.env.NEXT_PUBLIC_API_HOST);

// export const getServerSideProps = async () => {
// // export const getStaticProps:GetStaticProps = async () => {
//   try {
//   const response = await fetch("https://next-js-nine-teal.vercel.app/api/socials/");
//   // const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/socials/`);
//   const data = await response.json();

//   if (!data) {
//       return {
//           notFound: true,
//       }
//   }

//   return {
//       props: { socials: data },
//   }
// }
//  catch {
//   return {
//     props: {socials: null},
//   }
// }
// };

// const Home:FC<socialInfoType> = ({ socials }) => (
//   <div className={styles.wrapper}>
//     <Head>
//         <title>Home</title>
//     </Head>
//     <Heading text="Next.js Application" /> 
//     <Socials socials={socials} />
//   </div>
// );

// export default Home;

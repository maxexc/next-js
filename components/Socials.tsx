import Head from "next/head";
import { FC } from "react";
import styles from "../styles/Socials.module.scss";
import { socialType } from "../types";

type socialInfoType = {
  socials: [socialType],
}

const Socials:FC<socialInfoType> = ({ socials }) => {
  

  if (!socials) {
    return null;
  }

  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
    </Head>
    <ul className={styles.socials}>
      { socials.map(({ id, icon, path }) => (
        <li key={id} title={icon}>
          <a href={path} target="_blank" rel="noopener noreferrer" >
            <i className={`fab fa-${icon}`} aria-hidden="true"/>
          </a>
        </li>
      ))}
    </ul>
    </>
  );
}

export default Socials;
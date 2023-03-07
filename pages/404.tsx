import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";
import styles from "../styles/404.module.scss"
import Head from "next/head";
import MainContainer from "../components/MainContainer";

const Error = () => {
  const router = useRouter()
  
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router])

  return (
        <MainContainer nameTitle={"Error"} keyword={"error message"} >              
          <div className={styles.wrapper}>
            <Heading text="404" />
            <Heading text="Something is going wrong..." />
          </div>
        </MainContainer>
  )
}

export default Error;
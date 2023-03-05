import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";
import styles from "../styles/404.module.scss"
import Head from "next/head";

const Error = () => {
  const router = useRouter()
  
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router])

  return (
        <div className={styles.wrapper}>
              <Head>
                  <title>Error</title>
              </Head>
          <div>
            <Heading text="404" />
            <Heading text="Something is going wrong..." />
          </div>
        </div>
  )
}

export default Error;
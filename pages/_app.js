import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import youtubeImg from "../public/youtube.png"
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (  
            <Layout>
              <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
              </Head>
              <main>
                <Component {...pageProps} />
              </main>
              <div className='thumb'>
                <Image 
                  src={youtubeImg}              
                  alt="preview"
                  className='imgWrapper'   
                  loading='lazy'  
                  placeholder='blur'
                />
              </div>
            </Layout>         
)

export default MyApp;


// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

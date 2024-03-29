import Layout from '../components/Layout';
import Image from 'next/image';
import backgroundImg from "../public/phonebook-bg1.jpg"
import '../styles/globals.scss'
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (  
            <Layout>              
              <main>
                <Component {...pageProps} />
              </main>
              <div className='thumb'>
                <Image 
                  src={backgroundImg}              
                  alt="preview"
                  className='imgWrapper'   
                  loading='lazy'  
                  placeholder='blur'
                />
              </div>
            </Layout>         
)

export default MyApp;



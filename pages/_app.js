import Layout from '../components/Layout';
import Image from 'next/image';
import youtubeImg from "../public/youtube.png"
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (  
            <Layout>              
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



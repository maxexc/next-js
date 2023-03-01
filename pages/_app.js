// import Layout from '@/components/Layout';
import Layout from '@/components/Layout';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (  
            <Layout>
              <Component {...pageProps} />
            </Layout>         
)

export default MyApp;


// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

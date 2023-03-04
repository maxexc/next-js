import ContactInfo from "../../components/Contactinfo";
import Head from "next/head";

// ----- SSR -----
export const getServerSideProps = async (context) => {
    console.log(context);
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    // --- check 404 ---
    // const data = null;

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contacts: data },
    }
}

const Contact = ({ contact }) => (
    <>
        <Head>
            <title>Contact</title>
        </Head>
        <ContactInfo contact={contact} />
    </>
);

export default Contact;
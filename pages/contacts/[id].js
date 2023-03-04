import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

// ----- SSR -----
export const getServerSideProps = async (context) => {
    const { id } = context.params;
    // console.log(context);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    // --- check 404 ---
    // const data = null;

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contact: data },
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
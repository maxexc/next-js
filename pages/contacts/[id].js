import ContactInfo from "../../components/Contactinfo";
import Head from "next/head";
import Heading from "../../components/Heading";

const Contact = ({ contact }) => (
    <>
        <Head>
            <title>Contact</title>
        </Head>
        <ContactInfo contact={contact} />
    </>
);

export default Contact;
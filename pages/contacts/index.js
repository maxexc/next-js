import Head from "next/head";
// import { useEffect, useState } from "react";
import Heading from "../../components/Heading";

export const getStaticProps = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
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


const Contacts = ({ contacts }) => {
    //  ----- we will use the server -----

    // const [contacts, setContacts] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    //         const data = await response.json();
    //         setContacts(data);
    //     }
    //     fetchData();
    // }, []);
    

    return (
    <>
        <Head>
            <title>Contacts</title>
        </Head>
        <Heading text="Contacts list:" />
        <ul>
            {contacts && contacts.map(({id, name, email}) => (
                <li key={id}><strong>{name}</strong> ({email})</li>
            ))}
        </ul>
    </>
);
}

export default Contacts;
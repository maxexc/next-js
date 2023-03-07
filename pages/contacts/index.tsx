import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
// import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import MainContainer from "../../components/MainContainer";
import { contactType } from "../../types";

type contactsTypeProps ={
    contacts: [contactType],
}


export const getStaticProps:GetStaticProps = async () => {
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


const Contacts:FC<contactsTypeProps> = ({ contacts }) => {
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
    <MainContainer nameTitle={"Contacts"} keyword={"Contacts list:"}>        
        <Heading text="Contacts list:" />
        <ul>
            {contacts && contacts.map(({id, name, email}) => (
                <li key={id}>
                    <Link href={`/contacts/${id}`}>{name}</Link>
                </li>
            ))}
        </ul>
    </MainContainer >
);
}

export default Contacts;
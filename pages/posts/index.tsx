import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import MainContainer from "../../components/MainContainer";

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await response.json();
    // --- check 404 ---
    // const data = null;

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts: data },
    }
}

const Posts = ({ posts }) => {
    return (
        <MainContainer nameTitle={"Posts"} keyword={"Post list:"}>
            <Heading text="Static site generation (SSG), Post list:" />
            <ul>
                {posts && posts.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>      
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea!</p>
        </MainContainer >
    );
};

export default Posts;
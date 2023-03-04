import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";

export const getStaticProps = async () => {
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
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text="Post list:" />
            <ul>
                {posts && posts.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>      
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea!</p>
        </>
    );
};

export default Posts;
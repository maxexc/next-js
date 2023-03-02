
// import Link from "next/link";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss"

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Contacts', path: '/contacts' },
  ];

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo} >
                maxExc
            </div>
            <div className={styles.links} >
                <Link href="/">Home</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/contacts">Contacts</Link>
            </div>
        </nav>
    );
};

export default Navbar;
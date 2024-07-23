import Social from '../Social/Social';
export default function Footer() {
    const year = new Date().getFullYear();
    return <footer className="md:flex justify-around bg-black text-white p-10 dark:bg-gray-900 text-center">
        <p  className="text-xl md:m-5 ">Copyright © {year}. All rights are reserved</p>
        <Social />
    </footer>
}
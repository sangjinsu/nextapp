import Image from "next/image";


export default function Home() {
    return (
        <>
            <h1>Hello Next.js</h1>
            Hello, Web
            <p><Image src="/next.svg" height="50" width="80" alt=""/></p>
        </>
    );
}

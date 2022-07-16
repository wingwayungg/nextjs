import { useRouter } from "next/router";
export default function Index({ time }) {
    const router = useRouter();
    return (
        <main>
            <h1>Hello</h1>
            <time dateTime={time}>{time}</time>
            <button onClick={() => router.push(router.pathname)}>fwwf</button>
        </main>
    );
}

export async function getServerSideProps({ req, res }) {
    res.setHeader("Cache-Control", "public, s-maxage=100, stale-while-revalidate=590");

    return {
        props: {
            time: new Date().toISOString(),
        },
    };
}

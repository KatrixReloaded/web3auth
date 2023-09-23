import Image from "next/image";
import Head from "next/head";
import axios from "axios";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    async function getName() {
        const response = await axios.get("/api/hello");
        console.log(response);
    }
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <button onClick={getName}>Get Name</button>
            </div>
        </main>
    );
}

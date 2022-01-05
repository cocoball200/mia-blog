import type { NextPage } from "next";
import { Table } from "antd";
import Head from "next/head";
import "antd/dist/antd.css";
import { Button } from "antd";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 tw-bg-red-500">
      <Head>
        <title>블로그 만드는중입니다</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔥</text></svg>"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold flex">Life Itself Climate Inquiry</h1>
        <p className="mt-3 text-2xl">Hello, world</p>
        <Button type="primary">블로그 만들러 가기</Button>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        ahah
      </footer>
    </div>
  );
};

export default Home;

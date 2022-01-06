import type { NextPage } from "next";
import Head from "next/head";

const posts = [
  { title: "getting started!", excerpt: "my brain", key: 1 },
  { title: "OMG Too Much", excerpt: "my brain", key: 2 },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300 ">
      <Head>
        <title> Mia BLOG</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔥</text></svg>"
        />
      </Head>
      <div className="grid girid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((item) => {
          return <div key={item.key}> {item.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Home;

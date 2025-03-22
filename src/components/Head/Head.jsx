import Head from "next/head";

const PageHead = ({ data }) => {
  console.log(data);
  return (
    <head>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
    </head>
  );
};

export default PageHead;

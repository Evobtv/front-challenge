import { NextPage } from "next";
import NotFoundError from "../src/components/NotFoundError";
import Head from "next/head";

const PageNotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Erro 404</title>
      </Head>
      <NotFoundError />
    </>
  );
};

export default PageNotFound;

import Head from "next/head";
import styles from "./styles.module.scss";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Integração do Material UI com ReactJS</strong>
            <p>
              Não falaremos do Material UI em si, mas sim da junção dele com o
              nosso queridíssimo ReactJS criando uma interface semelhante ao do
              WhatsApp Web
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Integração do Material UI com ReactJS</strong>
            <p>
              Não falaremos do Material UI em si, mas sim da junção dele com o
              nosso queridíssimo ReactJS criando uma interface semelhante ao do
              WhatsApp Web
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Integração do Material UI com ReactJS</strong>
            <p>
              Não falaremos do Material UI em si, mas sim da junção dele com o
              nosso queridíssimo ReactJS criando uma interface semelhante ao do
              WhatsApp Web
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};

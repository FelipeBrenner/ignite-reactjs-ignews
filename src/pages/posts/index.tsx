import Head from "next/head";
import styles from "./styles.module.scss";

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

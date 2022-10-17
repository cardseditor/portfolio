import Head from "next/head";
import Layout, { siteTitle } from "../componets/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../componets/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.selfIntro}>I’m CardsEditor!</div>

        <a href="https://twitter.com/cardseditor" target="_blank">
          <div className={utilStyles.selfIntro}>
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                width: "24px",
                color: "gray",
                marginRight: "20px",
              }}
            />
            <div>Twitter</div>
          </div>
        </a>
        <a href="https://www.instagram.com/cardseditor/" target="_blank">
          <div className={utilStyles.selfIntro}>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{
                width: "24px",
                color: "gray",
                marginRight: "20px",
              }}
            />
            <div>Instagram</div>
          </div>
        </a>
        <a href="https://gajeroll.com/" target="_blank">
          <div className={utilStyles.selfIntro}>
            <FontAwesomeIcon
              icon={faPen}
              style={{
                width: "24px",
                color: "gray",
                marginRight: "20px",
              }}
            />
            <div>Blog (Gajeroll)</div>
          </div>
        </a>
        <a href="https://github.com/cardseditor" target="_blank">
          <div className={utilStyles.selfIntro}>
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                width: "24px",
                color: "gray",
                marginRight: "20px",
              }}
            />
            <div>GitHub</div>
          </div>
        </a>
        <a
          href="https://www.youtube.com/channel/UCD4Vokjng44fu0vBpY50odg"
          target="_blank"
        >
          <div className={utilStyles.selfIntro}>
            <FontAwesomeIcon
              icon={faYoutube}
              style={{
                width: "24px",
                color: "gray",
                marginRight: "20px",
              }}
            />
            <div>YouTube</div>
          </div>
        </a>
      </section>
      {/* <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>          ))}
        </ul>
      </section> */}
      <style jsx>{``}</style>
    </Layout>
  );
}

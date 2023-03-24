import Head from "next/head";
import Layout, { siteTitle } from "../componets/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Date from "../componets/date";
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
        <h2 className={utilStyles.headingLg}>ハッカソン</h2>

        <section className={utilStyles.headingMd}>
          <div>
            <a href="https://github.com/Dev-roll/thundercard">
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  width: "16px",
                  marginRight: "8px",
                }}
              />
              Thundercard：名刺からインスピレーションを得たSNSアプリ
            </a>
          </div>
          <small className={utilStyles.lightText}>
            エンジニアフレンドリーシティ福岡(EFC) AWARD 2022 プロダクト開発部門受賞<br />
            2022年9月〜10月<br />
            Flutter、Firebase<br />
            クリエイター同士が集まる場面で、複数のアカウント情報の共有を、アプリ上のカード交換によって実現するサービスである。
            アカウント画面の実装、カード交換時のFirebaseによるデータの操作、データ構造やセキュリティに関する保守管理、ストアへの公開作業に貢献した。
            この作品はプロダクトの完成度や有益性が評価された。<br />
            既存の法人向け名刺管理アプリと異なり、個人がコミュニケーションを広げるツールとして位置づけ競争優位性を高めた。
            またQRコードの表示と読み取りを1画面にまとめ、直感的にカード交換できるようにした。
          </small>
        </section>

        <section className={utilStyles.headingMd}>
          <div>
            <a href="https://github.com/Dev-roll/couponroll-client">
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  width: "16px",
                  marginRight: "8px",
                }}
              />
              CouponRoll：店舗アプリを気軽に導入できるサービス
            </a>
          </div>
          <small className={utilStyles.lightText}>
            Open Hack U 2022 Spring ONLINE 優秀賞受賞<br />
            2023年2月（2週間）<br />
            Kotlin、Go、MySQL<br />
            集客に取り組もうとする小規模事業者が、気軽に店舗アプリを取り入れてクーポンなどの割引制度を導入できるようにするサービスである。
            YouTube、Twitter、PayPayなどの既存のサービスを参考に、FigJamでアプリ全体のレイアウトやページ遷移を決定し、フロント部分の実装に貢献した。
            非常に洗練された直感的なデザインやチーム開発における試行錯誤、バックエンドの作り込みが評価された。<br />
            社会で活躍できるエンジニアになることを見据えて、ハッカソンで初めてビジネス向けのサービス開発に取り組んだ。
            個人が簡単に動画をアップロードできるYouTubeのようなプラットフォームに着目し、店舗ページの開設や割引制度の提供ができる1つのプラットフォームとしたことで開発コストの削減ができるように工夫した。
          </small>
        </section>

        <section className={utilStyles.headingMd}>
          <div>
            <a href="https://github.com/Dev-roll/qrio">
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  width: "16px",
                  marginRight: "8px",
                }}
              />
              QR I/O：QRコード管理アプリ
            </a>
          </div>
          <small className={utilStyles.lightText}>
            技育CAMP Vol.9 努力賞受賞<br />
            技育CAMPアドバンス2023 Vol.1 企業賞（株式会社サイバーエージェント）受賞<br />
            2022年12月（1週間）、2023年3月（1週間）<br />
            Flutter<br />
            QRコードを読み取って履歴に残したり、カスタマイズして生成したりできる。
            履歴の管理や表示部分の実装、そしてイベント後のアプリのリリース作業を担った。
            この作品は、非常に直感的なレイアウトやパフォーマンス改善が評価された。
          </small>
        </section>

        <section className={utilStyles.headingMd}>
          <div>
            <a href="https://github.com/Dev-roll/capture-the-task">
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  width: "16px",
                  marginRight: "8px",
                }}
              />
              Capture The Task：写真で管理する直感的なタスク管理アプリ
            </a>
          </div>
          <small className={utilStyles.lightText}>
            技育CAMP Vol.10 努力賞受賞<br />
            2023年1月（2日間）<br />
            Kotlin<br />
            Kotlinを習得するため、タスク管理アプリに取り組んだ。
            単なるToDoアプリではなく、写真を撮ってタスクを管理することで、タスクの実行状況を直感的に把握できるようにした。
            それと同時にカメラの利用やローカルへのデータ保存を経験できた。
            タスクの表示部分やトグルボタンの実装に貢献した。
            この作品は、画像を利用したタスク管理という新しいアイデアや、短期開発の完成度が評価された。
          </small>
        </section>

        <h2 className={utilStyles.headingLg}>インターン</h2>

        <section className={utilStyles.headingMd}>
          <div>
            株式会社UnReact
          </div>
          <small className={utilStyles.lightText}>
            GitHub、React、Next.js、TypeScript、Tailwind CSS、Liquid、Firebase<br />
            株式会社UnReactにおいて、2021年5月から11月までの約半年間、週10時間ほど育成型のインターンに参加した。
            GitHubやReact、TypeScript、Firebaseなどを学習した。
            またECサイト制作に用いられるShopifyテーマのチーム開発に携わった。
            円滑なチーム開発を行うためのポイントを学び、例えばプルリクエストするコードの内容が伝わるように簡潔にポイントを抑えて文章化することを心がけた。<br />
            単にエンジニアに必要なプログラミングスキルにとどまらず、スタートアップの意思決定や仕事を進める際の心構えなど、ビジネス的な視点を身につける大きなきっかけとなった。
          </small>
        </section>

        {/* <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>
                  <div>{title}</div>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </a>
              </Link>
            </li>))}
        </ul> */}
      </section>
      <style jsx>{``}</style>
    </Layout>
  );
}

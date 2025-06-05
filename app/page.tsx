import Layout, { siteTitle } from '../componets/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../componets/date'

export const metadata = {
  title: siteTitle
}

export default async function Home() {
  const allPostsData = getSortedPostsData()
  return (
    <Layout home>
      <div className="sections">
        <h2 className="section-title">ハッカソン</h2>

        <section>
          <div className="content-title">
            <a href="https://github.com/Dev-roll/thundercard" target="_blank">
              <div>Thundercard：名刺からインスピレーションを得たSNSアプリ</div>
            </a>
          </div>
          <p>
            エンジニアフレンドリーシティ福岡(EFC) AWARD 2022
            プロダクト開発部門受賞
            <br />
            2022年9月〜10月
            <br />
            Flutter、Firebase
            <br />
            クリエイター同士が集まる場面で、複数のアカウント情報の共有を、アプリ上のカード交換によって実現するサービスである。
            アカウント画面の実装、カード交換時のFirebaseによるデータの操作、データ構造やセキュリティに関する保守管理、ストアへの公開作業に貢献した。
            この作品はプロダクトの完成度や有益性が評価された。
            <br />
            既存の法人向け名刺管理アプリと異なり、個人がコミュニケーションを広げるツールとして位置づけ競争優位性を高めた。
            またQRコードの表示と読み取りを1画面にまとめ、直感的にカード交換できるようにした。
          </p>
        </section>

        <section>
          <div className="content-title">
            <a
              href="https://github.com/dao0203/cooking_completly_understood"
              target="_blank"
            >
              <div>レシピLite：画像認識でレシピを提案するアプリ</div>
            </a>
          </div>
          <p>
            技育CAMPキャラバン2023 Vol.2 @福岡
            企業賞（株式会社サイバーエージェント）受賞
            <br />
            2023年6月（1週間）
            <br />
            Flutter、TensorFlow Lite、PaLM API
            <br />
            テキストではなくカメラを使って食材を簡単に読み取り、レシピを提案するアプリである。食品管理やAIとのチャット、栄養素管理などの機能がある。食材の活用や食事のバリエーションを広げることが期待できる。
            クリーンアーキテクチャを採用し、テストや役割分担しやすい環境を整えて、4人チームで開発した。
            TensorFlow Liteを利用した画像認識、GoogleのPaLM
            APIを利用したチャットの実装などに貢献した。
            初めてアプリに機械学習モデルを導入し、ML
            KitやChatGPTとも比較してパフォーマンス改善に取り組むなど、積極的に機械学習に触れることができた。
          </p>
        </section>

        <section>
          <div className="content-title">
            <a
              href="https://github.com/Dev-roll/couponroll-client"
              target="_blank"
            >
              <div>CouponRoll：店舗アプリを気軽に導入できるサービス</div>
            </a>
          </div>
          <p>
            Open Hack U 2022 Spring ONLINE 優秀賞受賞
            <br />
            2023年2月（2週間）
            <br />
            Kotlin、Go、MySQL
            <br />
            集客に取り組もうとする小規模事業者が、気軽に店舗アプリを取り入れてクーポンなどの割引制度を導入できるようにするサービスである。
            YouTube、Twitter、PayPayなどの既存のサービスを参考に、FigJamでアプリ全体のレイアウトやページ遷移を決定し、フロント部分の実装に貢献した。
            非常に洗練された直感的なデザインやチーム開発における試行錯誤、バックエンドの作り込みが評価された。
            <br />
            社会で活躍できるエンジニアになることを見据えて、ハッカソンで初めてビジネス向けのサービス開発に取り組んだ。
            個人が簡単に動画をアップロードできるYouTubeのようなプラットフォームに着目し、店舗ページの開設や割引制度の提供ができる1つのプラットフォームとしたことで開発コストの削減ができるように工夫した。
          </p>
        </section>

        <section>
          <div className="content-title">
            <a href="https://github.com/Dev-roll/qrio" target="_blank">
              <div>QR I/O：QRコード管理アプリ</div>
            </a>
          </div>
          <p>
            技育CAMPアドバンス2023 Vol.1
            企業賞（株式会社サイバーエージェント）受賞
            <br />
            技育CAMP Vol.9 努力賞受賞
            <br />
            2022年12月（1週間）、2023年3月（1週間）
            <br />
            Flutter
            <br />
            QRコードを読み取って履歴に残したり、カスタマイズして生成したりできる。
            履歴の管理や表示部分の実装、そしてイベント後のアプリのリリース作業を担った。
            この作品は、読み取りと作成の画面遷移や可視化された履歴などの非常に直感的なレイアウトや、パフォーマンス改善が評価された。
          </p>
        </section>

        <section>
          <div className="content-title">
            <a
              href="https://github.com/Dev-roll/capture-the-task"
              target="_blank"
            >
              <div>
                Capture The Task：写真で管理する直感的なタスク管理アプリ
              </div>
            </a>
          </div>
          <p>
            技育CAMP Vol.10 努力賞受賞
            <br />
            2023年1月（2日間）
            <br />
            Kotlin
            <br />
            Kotlinを習得するため、タスク管理アプリに取り組んだ。
            単なるToDoアプリではなく、写真を撮ってタスクを管理することで、タスクの実行状況を直感的に把握できるようにした。
            それと同時にカメラの利用やローカルへのデータ保存を経験できた。
            タスクの表示部分やトグルボタンの実装に貢献した。
            この作品は、画像を利用したタスク管理という新しいアイデアや、短期開発の完成度が評価された。
          </p>
        </section>

        <h2 className="section-title">インターンシップ</h2>

        <section>
          <div className="content-title">楽天グループ株式会社</div>
          <p>
            2023年8月〜9月の約2ヶ月間、アプリケーションエンジニアとして長期インターンに参加予定である。
          </p>
        </section>

        <section>
          <div className="content-title">株式会社UnReact</div>
          <p>
            GitHub、React、Next.js、TypeScript、Tailwind CSS、Liquid、Firebase
            <br />
            株式会社UnReactにおいて、2021年5月から11月までの約半年間、週10時間ほど育成型のインターンに参加した。
            GitHubやReact、TypeScript、Firebaseなどを学習した。
            またECサイト制作に用いられるShopifyテーマのチーム開発に携わった。
            単にエンジニアに必要なプログラミングスキルにとどまらず、スタートアップの意思決定や仕事を進める際の心構えなど、ビジネス的な視点を身につける大きなきっかけとなった。
          </p>
        </section>

        <h2 className="section-title">イベント</h2>

        <section>
          <div className="content-title">Bug Shooting Challenge #9</div>
          <p>
            株式会社MIXI
            <br />
            2023年6月（1日間）
            <br />
            Ruby、MySQL
            <br />
            お問い合わせ内容およびログの情報から、バグの発見や修正に取り組んだ。
            問題を発見した後、バグの原因や修正方法を導くのが難しいと感じた。
          </p>
        </section>

        <section>
          <div className="content-title">
            DroidKaigi.collect {' { #2@Fukuoka }'}
          </div>
          <p>
            2023年4月（1日間）
            <br />
            Android
            <br />
            LINE
            Fukuoka株式会社においてAndroidアプリ開発に関するLTを聴き、エンジニアの方々と交流した。
            DroidKaigi 2023 のボランティアスタッフに参加するきっかけとなった。
          </p>
        </section>

        <section>
          <div className="content-title">
            <a
              href="https://github.com/CyberAgentHack/web-speed-hackathon-2023"
              target="_blank"
            >
              <div>Web Speed Hackathon 2023</div>
            </a>
          </div>
          <p>
            株式会社サイバーエージェント
            <br />
            2023年3月（2日間）
            <br />
            React
            <br />
            Webサービスのパフォーマンス改善に取り組んだ。パフォーマンスの確認や改善方法を学び、パフォーマンスを意識した開発の重要性に気づくことができた。
          </p>
        </section>

        <h2 className="section-title">活動</h2>

        <section>
          <div className="content-title">
            <a href="https://2023.droidkaigi.jp/" target="_blank">
              <div>DroidKaigi 2023</div>
            </a>
          </div>
          <p>
            DroidKaigi 2023 のボランティアスタッフとして活動している。
            配信チームに所属し、セッションの動画配信や編集に携わる予定である。
          </p>
        </section>

        <h2 className="section-title">ブログ</h2>

        <ul>
          {allPostsData.map(({ id, date, title, icon }) => (
            <li key={id}>
              <Link href={`/posts/${id}`} className="post-link">
                <section>
                  <div className="section-link">
                    <div className="section-link-left">
                      <span className="material-symbols-outlined article-icon">
                        {icon}
                      </span>
                    </div>
                    <div className="section-link-right">
                      <div className="blog-title">{title}</div>
                      <small>
                        <Date dateString={date ?? ''} />
                      </small>
                    </div>
                  </div>
                </section>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

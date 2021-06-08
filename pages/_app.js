import './/styles/global.css'

// App コンポーネントは、すべてのページに共通するトップレベルのコンポーネント
// ページ間を移動するときに状態（state）を保持するために App コンポーネントを使用することができます。
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
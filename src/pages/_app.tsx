import store from "@/app/store";
import Layout from "@/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export default function App({ Component, pageProps }: AppProps) {

  return(
    <Provider store={store}>
      <ReactNotifications />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  ) 
  }

import MetaData from "@/components/seo/MetaData";
import { SessionProvider } from "next-auth/react";
import store from "@/store/index";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <MetaData />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />;
        </QueryClientProvider>
      </Provider>
    </SessionProvider>
  );
}

export default appWithTranslation(App);

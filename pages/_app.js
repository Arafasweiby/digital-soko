import { ChakraProvider } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import "../styles/globals.css";
import theme from "../utils/theme";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <ChakraProvider theme={theme}>
      {Component.auth ? (
        <Auth>
          <div className="bg-soko-light-blue min-h-screen">
            <Layout />
            <Component {...pageProps} />
          </div>
        </Auth>
      ) : (
        <>
          <div className="bg-soko-light-blue min-h-screen">
            <Layout />
            <Component {...pageProps} />
          </div>
        </>
      )}
    </ChakraProvider>
  );
}

function Auth({ children }) {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  let _loading = loading;

  if (error) {
    _loading = true;
    router.replace("/login");
  }

  if (!user) {
    _loading = true;
    router.replace("/login");
  }

  if (_loading) {
    return <p>Loading...</p>;
  }

  return children;
}

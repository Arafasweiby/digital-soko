import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/theme";
import { AuthProvider } from "../firebase/auth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;

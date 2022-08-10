import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../firebase/auth";
import "../styles/globals.css";
import theme from "../utils/theme";

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

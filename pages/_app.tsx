import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GasPrice } from '@cosmjs/stargate';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from '../config';
import { ChainInfoID } from '@cosmos-kit/types';
import { WalletManagerProvider } from '@cosmos-kit/react';

const LOCAL_STORAGE_KEY = 'connectedWalletId';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp;

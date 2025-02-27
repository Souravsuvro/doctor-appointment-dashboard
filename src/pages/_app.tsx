import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

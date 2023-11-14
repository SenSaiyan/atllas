import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Login, {LoginProps} from './Login';

export default function App({Component, pageProps}: AppProps) {
  const loginProps: LoginProps = {
    username: 'test',
    password: 'test',
  };
  return (
    <>
      <Component {...pageProps} />
      <Login {...loginProps}/>
    </>
    )
}

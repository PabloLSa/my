import '@/styles/globals.css'
import ThemeProviderContext from '@/context/ThemeProviderContext'

export default function App({ Component, pageProps }) {
  return(
<>
<ThemeProviderContext>
<Component {...pageProps} />
</ThemeProviderContext>
</>
  );
   
};

import { defineClientAppEnhance } from '@vuepress/client';

declare global {
  interface Window {
    adsbygoogle?: {
      loaded: boolean;
      push: (...args: any[]) => any;
    };
  }
}

declare const __DEV__: boolean;
declare const __SSR__: boolean;
declare const ADS_ID: string;

export default defineClientAppEnhance(() => {
  if (__DEV__ || __SSR__ || !ADS_ID) return;

  // avoid duplicated import
  if (window.adsbygoogle) {
    return;
  }
  // insert ads `<script>` tag
  const adsScript = document.createElement('script');
  adsScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  adsScript.async = true;
  adsScript.setAttribute('data-ad-client', ADS_ID);
  document.head.appendChild(adsScript);
});

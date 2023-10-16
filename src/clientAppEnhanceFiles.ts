import { defineClientConfig } from '@vuepress/client';

declare global {
  interface Window {
    adsbygoogle?: {
      loaded: boolean;
      push: (...args: any[]) => any;
    };
  }
}

declare const __VUEPRESS_DEV__: boolean;
declare const __VUEPRESS_SSR__: boolean;
declare const ADS_ID: string;

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__ || !ADS_ID) return;

    // avoid duplicated import
    if (window.adsbygoogle) {
      return;
    }
    // insert ads `<script>` tag
    const adsScript = document.createElement('script');
    adsScript.setAttribute('data-ad-client', ADS_ID);
    adsScript.async = true;
    adsScript.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    document.head.appendChild(adsScript);
  },
});

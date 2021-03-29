import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils';

export interface GoogleAdSensePluginOptions {
  id: string
}

const googleAdSensePlugin: Plugin<GoogleAdSensePluginOptions> = ({ id }) => ({
  name: 'vuepress-plugin-google-adsense2',
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhanceFiles.js'),
  define: {
    ADS_ID: id || false,
  },
});

export default googleAdSensePlugin
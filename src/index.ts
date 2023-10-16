import type { Plugin } from '@vuepress/core';
import { path, getDirname } from '@vuepress/utils';

export interface GoogleAdSensePluginOptions {
  id: string;
}

const __dirname = getDirname(import.meta.url);

export const googleAdSensePlugin = ({
  id,
}: GoogleAdSensePluginOptions): Plugin => ({
  name: 'vuepress-plugin-google-adsense2',
  clientConfigFile: path.resolve(__dirname, './clientAppEnhanceFiles.js'),

  define: {
    ADS_ID: id || false,
  },
});

export default googleAdSensePlugin;

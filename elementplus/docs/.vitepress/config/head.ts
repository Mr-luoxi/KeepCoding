import fs from 'fs'
import path from 'path'
import { vpRoot } from '@element-plus/build-utils'
import { languages } from '../utils/lang'
import { features } from './features'

import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      href: '/images/element-plus-logo-small.svg',
      type: 'image/svg+xm',
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
  [
    'link',
    {
      rel: 'manifest',
      href: '/manifest.webmanifest',
    },
  ],
  [
    'meta',
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  [
    'meta',
    {
      name: 'msapplication-TileColor',
      content: '#409eff',
    },
  ],
  [
    'meta',
    {
      name: 'msapplication-config',
      content: '/browserconfig.xml',
    },
  ],
  [
    'link',
    {
      rel: 'stylesheet',
      href: '//fonts.loli.net/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
    },
  ],
  [
    'script',
    {},
    `;(() => {
      window.supportedLangs = ${JSON.stringify(languages)}
    })()`,
  ],

  ['script', {}, fs.readFileSync(path.resolve(vpRoot, 'lang.js'), 'utf-8')],
  [
    'script',
    {
      async: 'true',
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-175337989-1',
    },
  ],
  [
    'script',
    {},
    `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-175337989-1');`,
  ],
  [
    'script',
    {},
    `(function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:2894908,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
  ],
]
if (features.theme) {
  head.push([
    'script',
    {},
    fs.readFileSync(path.resolve(vpRoot, 'dark-mode.js'), 'utf-8'),
  ])
}

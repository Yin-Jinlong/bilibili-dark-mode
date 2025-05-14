import {defineConfig} from 'vite'
import monkey from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        minify: 'terser',
        reportCompressedSize:false,
    },
    plugins: [
        monkey({
            entry: 'src/main.ts',
            userscript: {
                author:'Yin-Jinlong',
                version:'1.0',
                icon: 'https://vitejs.dev/logo.svg',
                homepage:'https://github.com/Yin-Jinlong/bilibili-dark-mode',
                homepageURL:'https://github.com/Yin-Jinlong/bilibili-dark-mode',
                namespace: 'npm/vite-plugin-monkey',
                match: [
                    'https://*.bilibili.com/*'
                ],
            },
        })
    ],
});

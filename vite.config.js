import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'
import babel from "vite-babel-plugin";
import legacy from '@vitejs/plugin-legacy'
const env = process.argv[process.argv.length - 1]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets:['defaults','not IE 11']
    }),
    babel(),
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // additionalData: '@import "./src/less/variable.less";'
      }
    }
  },
  server: {
    port: 3000,
    proxy: {
      // '/api': {
      //   target: 'http://47.99.134.126:28019/api/v1',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/api/, '')
      // }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    }
  },
})

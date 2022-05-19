/*
 * @Author: benzic 690018019@qq.com
 * @Date: 2022-05-17 10:33:36
 * @LastEditors: benzic 690018019@qq.com
 * @LastEditTime: 2022-05-18 18:08:04
 * @FilePath: \adc-components\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.jsx'),
      name: 'adc-components',
      fileName: format => `adc-components.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React'
        }
      }
    },
    outDir: 'lib/dist'
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionData: '@import"./src/assets/style/global.less'
      }
    }
  }
})

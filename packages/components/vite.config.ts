/*
 * @Author: Cookie
 * @Date: 2021-03-02 13:47:42
 * @LastEditors: benzic 690018019@qq.com
 * @LastEditTime: 2022-05-19 15:19:06
 * @FilePath: /vite-react-boty-desing/packages/components/vite.config.ts
 * @Description:
 */
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@adc-component",
      formats: ["es", "umd", "cjs"],
    },
  },
});

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import { presetUno, presetIcons } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/SibgatUl/",
    plugins: [
        vue(),
        UnoCSS({
            presets: [presetUno(), presetIcons()],
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});

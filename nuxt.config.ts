// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  sourcemap: {
    client: true
  },
  vite: {
    build: {
      sourcemap: true,
      minify: false
    },
    server: {
      // sourcemapIgnoreList(sourcePath, sourcemapPath) {
      //   console.log(sourcePath,sourcemapPath);
      //   return true;
      // },
    }
  }
});

/*
 * @Author: your name
 * @Date: 2021-06-30 09:58:01
 * @LastEditTime: 2021-07-03 14:02:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mobile-vue\vue.config.js
 */
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    devServer: {
      open: false,
      proxy: {
        '/api': {
          target: 'https://www.cnblogs.com/',
          changeOrigin: true
        },
        '/abc': {
          target: 'http://127.0.0.1:8020/',
          changeOrigin: true,
          ws: true
        },

        '/sockjs-node': {
          target: 'http://127.0.0.1:8020',
          changeOrigin: true,
          ws: true,
        },
        '/socket.io': {
          target: 'http://127.0.0.1:8020',
          changeOrigin: true,
          ws: true,
        }
      }
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        // 以设计稿750为例， 750 / 10 = 75
                        remUnit: 75
                    }),
                ]
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("views", resolve("src/views"))
            .set("http", resolve("src/http"))
            // .set("base", resolve("baseConfig"))
            // .set("public", resolve("public"));
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/less/variables.less') // 变量文件位置
            ]
        }
    }
};

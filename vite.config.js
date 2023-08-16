const { resolve } = require('path')
export default {
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg'],
    plugins: [],
    server: {
        open: '/index.html',
        port: 3116,
    },
    build: {
        publicDir: 'public',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                another: resolve(__dirname, 'another.html')
            }
        }
    }
}
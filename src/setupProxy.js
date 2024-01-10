const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',  // Specify the API endpoint you want to proxy
        createProxyMiddleware({
            target: 'https://smiling-mark-production.up.railway.app',
            changeOrigin: true,
        })
    );
};

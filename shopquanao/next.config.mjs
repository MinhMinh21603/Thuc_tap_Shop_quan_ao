// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    appDir: true, // bắt buộc bật khi sử dụng App Directory
  },
  images: {
    domains: ['fakestoreapi.com'], // Thêm domain của API hình ảnh
    domains: ['api-core.dsp.one'],
    
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api-core.dsp.one/api/:path*', // Proxy các yêu cầu đến API của bạn
      },
      {
        source: '/:path*',
        destination: 'https://api-core.dsp.one/:path*', // Proxy các yêu cầu đến API của bạn
      },
      {
        source: '/uploads/:path*',
        destination: 'https://api-core.dsp.one/api/auth/file/uploads/:path*', // Proxy các yêu cầu tải tệp
      },
      {
        source: '/images/:path*',
        destination: 'https://fakestoreapi.com/img/:path*', // Proxy các yêu cầu hình ảnh từ fakestoreapi.com
      },
      {
        source: '/company/:path*',
        destination: 'https://fakestoreapi.com/company/:path*', // Proxy các yêu cầu hình ảnh từ fakestoreapi.com
      },
      {
        source: '/login',
        destination: 'https://fakestoreapi.com/login',
      },
      
    ];
  },
};

export default nextConfig;
module.exports = {
  turbopack: {
    root: process.cwd(),
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
};

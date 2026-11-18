module.exports = {
  apps: [
    {
      name: 'larken',
      script: './server/src/server.js',
      instances: 1, // Single instance or 'max' on VPS
      exec_mode: 'fork', // Clean single process without cluster complexity on multi-app VPS
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        PORT: 5092,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5092,
      },
    },
  ],
};

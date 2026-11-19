const fs = require('fs');
const path = require('path');

function parseEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf-8');
  const env = {};
  content.split('\n').forEach((line) => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    const idx = line.indexOf('=');
    if (idx !== -1) {
      const key = line.slice(0, idx).trim();
      let val = line.slice(idx + 1).trim();
      val = val.replace(/^["']|["']$/g, '');
      env[key] = val;
    }
  });
  return env;
}

const serverEnv = parseEnv(path.resolve(__dirname, 'server/.env'));
const rootEnv = parseEnv(path.resolve(__dirname, '.env'));
const loadedEnv = { ...rootEnv, ...serverEnv };

module.exports = {
  apps: [
    {
      name: 'larken',
      script: './server/src/server.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        PORT: 5092,
        ...loadedEnv,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5092,
        ...loadedEnv,
      },
    },
  ],
};

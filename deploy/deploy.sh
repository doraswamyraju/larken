#!/usr/bin/env bash
# ==============================================================================
# Larken Technologies LLC - Automated Zero-Downtime Deployment Script
# Domain: larken.sriddha.com (Port 5092)
# Designed for safe execution on Hostinger multi-tenant VPS
# ==============================================================================

set -e # Exit immediately on error

echo "=========================================================="
echo "🚀 Deploying Larken Technologies (Port 5092)"
echo "📅 $(date)"
echo "=========================================================="

APP_DIR="/var/www/larken"

if [ ! -d "$APP_DIR" ]; then
  echo "❌ Directory $APP_DIR does not exist. Please clone the repository first."
  exit 1
fi

cd "$APP_DIR"

echo "📥 1. Pulling latest commits from GitHub (origin/main)..."
git fetch origin main
git reset --hard origin/main

echo "📦 2. Installing root and backend dependencies..."
npm install --prefix server --production

echo "🔨 3. Building React Client production bundle..."
npm install --prefix client
npm run build --prefix client

echo "⚙️ 4. Managing PM2 process (Target: 'larken' on Port 5092)..."
# Check if PM2 process 'larken' is already registered
if pm2 describe larken > /dev/null 2>&1; then
  echo "🔄 Reloading existing PM2 process 'larken'..."
  pm2 reload larken --update-env
else
  echo "🚀 Starting new PM2 process 'larken'..."
  pm2 start ecosystem.config.cjs --env production
fi

# Save PM2 process list to persist across VPS reboots
pm2 save

echo "🩺 5. Verifying service health on port 5092..."
sleep 2
HEALTH_CHECK=$(curl -s http://127.0.0.1:5092/api/health || echo "FAILED")
echo "Health status: $HEALTH_CHECK"

echo "🌐 6. Testing Nginx configuration..."
sudo nginx -t
sudo systemctl reload nginx

echo "=========================================================="
echo "✅ Deployment Successful!"
echo "🌐 URL: http://larken.sriddha.com"
echo "=========================================================="

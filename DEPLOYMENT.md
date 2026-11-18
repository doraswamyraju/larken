# Hostinger VPS Production Deployment Guide
**Company:** Larken Technologies LLC  
**Domain:** `https://larkenit.com`  
**Target Environment:** Hostinger VPS (Ubuntu, Nginx, PM2, Cloudflare, SSL)

---

## ⚠️ Pre-Deployment Safety Rules (VPS Protection)
> **IMPORTANT:** The Hostinger VPS may already host active websites or databases. Follow these safety rules:
> 1. **Do not overwrite existing Nginx default configurations or sites in `/etc/nginx/sites-enabled/`.**
> 2. **Always test Nginx configs using `nginx -t` before issuing `systemctl reload nginx`.**
> 3. **Use isolated PM2 process names (`larken-backend`).**
> 4. **Store Larken under an isolated directory (e.g. `/var/www/larken`).**

---

## 1. Initial VPS Setup & Directory Isolation

Connect to the Hostinger VPS via SSH:
```bash
ssh user@your-hostinger-vps-ip
```

Create an isolated directory for the project:
```bash
sudo mkdir -p /var/www/larken
sudo chown -R $USER:$USER /var/www/larken
```

Clone the repository:
```bash
cd /var/www/larken
git clone <YOUR_GITHUB_REPO_URL> .
```

---

## 2. PostgreSQL Setup on Hostinger VPS

Log into PostgreSQL and create the isolated database and user:
```bash
sudo -u postgres psql
```

```sql
CREATE DATABASE larken_db;
CREATE USER larken_user WITH ENCRYPTED PASSWORD 'your_strong_password_here';
GRANT ALL PRIVILEGES ON DATABASE larken_db TO larken_user;
\q
```

---

## 3. Server Configuration & PM2 Process Management

1. Create the production `.env` in `/var/www/larken/server`:
```bash
cd /var/www/larken/server
cp .env.example .env
nano .env
```
Fill in the PostgreSQL credentials and SMTP credentials for `contracts@larkenit.com`.

2. Install dependencies:
```bash
npm install --omit=dev
```

3. Start backend with PM2 from the project root:
```bash
cd /var/www/larken
pm2 start ecosystem.config.cjs --env production
pm2 save
pm2 startup
```

Verify backend health:
```bash
curl http://127.0.0.1:5050/api/health
```

---

## 4. Frontend Client Build

1. Build the production React bundle:
```bash
cd /var/www/larken/client
npm install
npm run build
```
The static files will be generated in `/var/www/larken/client/dist`.

---

## 5. Nginx Configuration & SSL

1. Copy the provided Nginx configuration:
```bash
sudo cp /var/www/larken/deploy/nginx/larkenit.com.conf /etc/nginx/sites-available/larkenit.com.conf
sudo ln -s /etc/nginx/sites-available/larkenit.com.conf /etc/nginx/sites-enabled/
```

2. Test Nginx syntax safely:
```bash
sudo nginx -t
```

3. Obtain / Renew SSL using Let's Encrypt Certbot:
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d larkenit.com -d www.larkenit.com
```

4. Reload Nginx safely:
```bash
sudo systemctl reload nginx
```

---

## 6. Verification Checklist
- [ ] Visit `https://larkenit.com` in browser.
- [ ] Check responsive navigation and sticky header.
- [ ] Submit hero enquiry form and confirm email notification arrives at `contracts@larkenit.com`.
- [ ] Verify Google Maps loads for `10318 Conser St, Ste 1J, Overland Park, KS 66212`.
- [ ] Test candidate application modal and resume upload on Careers page.
- [ ] Verify private storage key for uploaded resumes (resumes cannot be downloaded without admin auth).

---

## 7. Rollback Procedure
If any issue occurs during deployment:
```bash
cd /var/www/larken
git log --oneline -n 5
git checkout <PREVIOUS_COMMIT_HASH>
npm run build:client
pm2 restart larken-backend
```

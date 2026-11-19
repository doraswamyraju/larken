# Larken Technologies LLC – Hostinger VPS Deployment & Operations Manual
**Company:** Larken Technologies LLC  
**Staging Domain:** `http://larken.sriddha.com` (Targeting `https://larken.sriddha.com`)  
**Production Domain:** `https://larkenit.com`  
**Hostinger VPS IP:** `147.93.107.21`  
**Allotted Internal Application Port:** `5092`  
**GitHub Repository:** `https://github.com/doraswamyraju/larken.git`  
**PM2 Process Name:** `larken`

---

## 🛡️ Strict Multi-Application Safety Principles (Zero Disruption)
Your Hostinger VPS hosts multiple active production applications occupying existing ports (`5085`, `5086`, `5087`, `5088`, `5089`, `5090`, `5091`, etc.).
To ensure **zero impact** on any existing service:
1. **Isolated Port**: This application strictly runs on internal port **`5092`**.
2. **Isolated Filesystem**: All application files, logs, and uploads live exclusively inside `/var/www/larken`.
3. **Isolated PM2 Process**: Managed exclusively as process name `larken` (`pm2 reload larken`). **Never run `pm2 kill`, `pm2 restart all`, or flush other app logs.**
4. **Isolated Nginx Virtual Host**: Nginx configuration is saved as `/etc/nginx/sites-available/larken.sriddha.com.conf`. Existing sites in `/etc/nginx/sites-enabled/` are never touched.
5. **Pre-flight Nginx Validation**: Always run `sudo nginx -t` before issuing `sudo systemctl reload nginx`.

---

## 1. Hostinger Firewall Configuration
As seen in the Hostinger VPS Firewall panel:
1. Go to **hPanel > VPS > Security > Firewall**.
2. If direct external port testing is required, add a rule:
   - **Action:** Accept
   - **Protocol:** TCP
   - **Port:** `5092`
   - **Source:** Any
3. *(Note: Standard web traffic flows through ports `80` / `443` via Nginx, so Nginx will proxy directly to `127.0.0.1:5092` internally even without opening 5092 externally.)*

---

## 2. One-Time Initial VPS Setup (First Time Only)

Connect to the VPS via SSH:
```bash
ssh root@147.93.107.21
```

### A. Clone Repository into Isolated Directory
```bash
# Create dedicated directory
sudo mkdir -p /var/www/larken
sudo chown -R $USER:$USER /var/www/larken

# Clone repository
git clone https://github.com/doraswamyraju/larken.git /var/www/larken
cd /var/www/larken
```

### B. Setup Environment Variables & Email Routing
```bash
cd /var/www/larken/server
cp .env.example .env
nano .env
```
Ensure the `.env` contains:
```env
NODE_ENV=production
PORT=5092

# Database (PostgreSQL)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=larken_db
DB_USER=larken_user
DB_PASSWORD=your_db_password

# Email Notifications -> contracts@larkenit.com
# Use your Hostinger Email credentials for contracts@larkenit.com
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contracts@larkenit.com
SMTP_PASS=your_actual_email_password_here
NOTIFICATION_RECEIVER=contracts@larkenit.com
```

> **Verifying Email Delivery:**
> Once configured, you can test email connectivity with:
> ```bash
> # 1. Check SMTP status
> curl http://127.0.0.1:5092/api/health
> 
> # 2. Dispatch a live test email directly to contracts@larkenit.com
> curl -X POST http://127.0.0.1:5092/api/admin/test-email
> ```

### C. Build React Frontend & Install Dependencies
```bash
cd /var/www/larken

# Install server dependencies
npm install --prefix server --production

# Install and build frontend
npm install --prefix client
npm run build --prefix client
```

### D. Start Backend via PM2
```bash
cd /var/www/larken
pm2 start ecosystem.config.cjs --env production
pm2 save
```

Verify service is running on port 5092:
```bash
curl http://127.0.0.1:5092/api/health
# Response: {"status":"healthy","company":"Larken Technologies LLC",...}
```

### E. Configure Nginx Virtual Host
```bash
# 1. Copy virtual host config
sudo cp /var/www/larken/deploy/nginx/larken.sriddha.com.conf /etc/nginx/sites-available/larken.sriddha.com.conf

# 2. Enable the site
sudo ln -s /etc/nginx/sites-available/larken.sriddha.com.conf /etc/nginx/sites-enabled/

# 3. Test syntax to protect all other VPS sites!
sudo nginx -t

# 4. Safe reload
sudo systemctl reload nginx
```

### F. Enable Free SSL via Let's Encrypt / Certbot
```bash
sudo certbot --nginx -d larken.sriddha.com
```
Choose the option to automatically redirect HTTP traffic to HTTPS.

---

## 3. Routine Future Deployments (Git Push & Pull Workflow)

Whenever changes are made:
1. **Locally in IDE:**
   ```bash
   git add .
   git commit -m "feat/fix: description of update"
   git push origin main
   ```

2. **On Hostinger VPS:**
   Simply run the automated 1-command deployment script:
   ```bash
   ssh root@147.93.107.21
   /var/www/larken/deploy/deploy.sh
   ```

   *(Or manually perform the equivalent steps:)*
   ```bash
   cd /var/www/larken
   git pull origin main
   npm run build --prefix client
   npm install --prefix server --production
   pm2 reload larken
   sudo nginx -t && sudo systemctl reload nginx
   ```

---

## 4. Hosting at Production Domain (`larkenit.com`) & Protecting ZenBusiness Email

### ⚠️ Critical Email Safety Rule (Protecting Customer's ZenBusiness Mail)
The customer already has an active mailbox at **`contracts@larkenit.com`** hosted on ZenBusiness (`hostedemail.com`).
When updating DNS in ZenBusiness:
- **ONLY update the website records (`A` record and `www` CNAME/A record).**
- **DO NOT TOUCH OR DELETE ANY OF THE FOLLOWING MAIL RECORDS:**
  - `MX`: `mx.larkenit.com.cust.b.hostedemail.com` (Priority 10) $\rightarrow$ **DO NOT TOUCH**
  - `TXT` (SPF): `v=spf1 include:_spf.hostedemail.com ~all` $\rightarrow$ **DO NOT TOUCH**
  - `TXT` (DKIM): `dkim1._domainkey` $\rightarrow$ **DO NOT TOUCH**

Because `MX` records handle all incoming emails, changing only the `A` record points website traffic to the VPS while leaving the customer's mailbox on ZenBusiness 100% uninterrupted.

---

### Step-by-Step Domain Switch in ZenBusiness
1. Log in to **ZenBusiness Dashboard > Domains > `larkenit.com` > DNS Records**.
2. **Edit `A` Record**:
   - Change Record Data from `35.172.94.1` $\rightarrow$ **`147.93.107.21`** (Hostinger VPS IP).
3. **Edit `CNAME` for `www`**:
   - Change from `s.multiscreensite.com` $\rightarrow$ `larkenit.com` (or point an `A` record for `www` to `147.93.107.21`).
4. Save DNS changes.

---

### Step-by-Step Nginx & SSL Setup on VPS
On the Hostinger VPS:
```bash
# 1. Enable production virtual host for larkenit.com
sudo cp /var/www/larken/deploy/nginx/larkenit.com.conf /etc/nginx/sites-available/larkenit.com.conf
sudo ln -s /etc/nginx/sites-available/larkenit.com.conf /etc/nginx/sites-enabled/

# 2. Test syntax to protect all other VPS sites!
sudo nginx -t

# 3. Reload Nginx
sudo systemctl reload nginx

# 4. Issue Free SSL Certificate for larkenit.com & www.larkenit.com
sudo certbot --nginx -d larkenit.com -d www.larkenit.com
```

---

### Contact Form Email Dispatch Configuration
To deliver contact form submissions to `contracts@larkenit.com` without disturbing the customer's ZenBusiness setup, choose one of these options in `/var/www/larken/server/.env`:

- **Option 1: Using ZenBusiness SMTP (if customer provides their mailbox password)**
  ```env
  SMTP_HOST=mail.b.hostedemail.com
  SMTP_PORT=465
  SMTP_SECURE=true
  SMTP_USER=contracts@larkenit.com
  SMTP_PASS=customer_zenbusiness_email_password
  NOTIFICATION_RECEIVER=contracts@larkenit.com
  ```

- **Option 2: Using an Independent Mailer / Hostinger VPS SMTP (Zero password needed from customer)**
  You can use any external SMTP or Hostinger VPS mailbox to send notification emails *to* `contracts@larkenit.com`. The customer's ZenBusiness inbox receives the leads with full details and direct 1-click reply to the prospect.
  ```env
  SMTP_HOST=smtp.hostinger.com
  SMTP_PORT=465
  SMTP_SECURE=true
  SMTP_USER=your_sending_account
  SMTP_PASS=your_sending_password
  NOTIFICATION_RECEIVER=contracts@larkenit.com
  ```

---

## 5. Monitoring & Troubleshooting

| Action | Command |
|---|---|
| View live Larken logs | `pm2 logs larken` |
| Check Larken memory/CPU | `pm2 status larken` |
| Restart Larken process | `pm2 reload larken` |
| View Nginx error logs | `sudo tail -f /var/log/nginx/error.log` |
| Check API endpoint directly | `curl http://127.0.0.1:5092/api/health` |

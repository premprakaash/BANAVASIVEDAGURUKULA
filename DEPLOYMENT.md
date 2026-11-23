# Deploying to the Hostinger VPS

Every push to `main` builds the site and uploads it to the VPS over SSH (rsync).
Pull requests only build, so broken changes are caught before they go live.

Live site: **https://banavasivedagurukula.org**

You do the one-time setup below once; after that, deploys are automatic.

---

## 1. Point the domain at the VPS

In the DNS settings for `banavasivedagurukula.org` (Hostinger hPanel → Domains → DNS / Nameservers):

| Type | Name | Value |
|---|---|---|
| A | `@` | your VPS IP address |
| A | `www` | your VPS IP address |

DNS can take a few minutes to a few hours to update.

## 2. Prepare the VPS (run on the server)

SSH in from your computer: `ssh root@YOUR_VPS_IP`

```bash
# Web server, rsync (used by the deploy) and SSL tool
sudo apt update
sudo apt install -y nginx rsync certbot python3-certbot-nginx

# A deploy user that owns only the website folder
sudo adduser --disabled-password --gecos "" deploy
sudo mkdir -p /var/www/banavasivedagurukula.org
sudo chown -R deploy:deploy /var/www/banavasivedagurukula.org

# Open the firewall for web traffic (if ufw is enabled)
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
```

## 3. Install the Nginx site

Copy `deploy/nginx/banavasivedagurukula.org.conf` from this repo to the server, then:

```bash
sudo cp banavasivedagurukula.org.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/banavasivedagurukula.org.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Free HTTPS certificate (after DNS points to the VPS)
sudo certbot --nginx -d banavasivedagurukula.org -d www.banavasivedagurukula.org
```

## 4. Create an SSH key for GitHub Actions

On **your own computer** (not the server):

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f gurukula_deploy_key -N ""
```

This makes two files: `gurukula_deploy_key` (private) and `gurukula_deploy_key.pub` (public).

Add the **public** key to the deploy user on the VPS:

```bash
ssh root@YOUR_VPS_IP "mkdir -p /home/deploy/.ssh && chmod 700 /home/deploy/.ssh"
cat gurukula_deploy_key.pub | ssh root@YOUR_VPS_IP "cat >> /home/deploy/.ssh/authorized_keys && chmod 600 /home/deploy/.ssh/authorized_keys && chown -R deploy:deploy /home/deploy/.ssh"
```

Test it: `ssh -i gurukula_deploy_key deploy@YOUR_VPS_IP` should log in without a password.

## 5. Add the secrets to GitHub

Repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Value | Required |
|---|---|---|
| `VPS_HOST` | VPS IP address (e.g. `123.45.67.89`) | Yes |
| `VPS_USER` | `deploy` | Yes |
| `VPS_SSH_KEY` | entire contents of the **private** key file `gurukula_deploy_key` | Yes |
| `VPS_PORT` | SSH port, if not `22` | No |
| `VPS_DEPLOY_PATH` | web folder, if not `/var/www/banavasivedagurukula.org` | No |
| `VPS_KNOWN_HOSTS` | output of `ssh-keyscan YOUR_VPS_IP` (pins the server's identity) | Recommended |

Never commit the private key to the repo.

## 6. Deploy

Push or merge to `main` — or open **Actions → CI/CD → Run workflow**.
The run uploads the site and then checks that https://banavasivedagurukula.org returns HTTP 200.

## Troubleshooting

- **"Missing repository secrets"** — add the secrets in step 5.
- **`Permission denied (publickey)`** — the public key isn't in `/home/deploy/.ssh/authorized_keys`, or `VPS_SSH_KEY` isn't the full private key (include the `-----BEGIN` and `-----END` lines).
- **`rsync: command not found`** — run `sudo apt install -y rsync` on the VPS.
- **`Permission denied` writing files** — `sudo chown -R deploy:deploy /var/www/banavasivedagurukula.org`.
- **/about shows 404 on refresh** — the Nginx `try_files` line in step 3 isn't active; run `sudo nginx -t && sudo systemctl reload nginx`.

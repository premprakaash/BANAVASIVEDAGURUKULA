# gurukula-web on the VPS (with a server .env)

The website container runs from `/opt/gurukula/` on the server, with Docker Compose and a `.env`. This works the same way as CodeInspector.

```
/opt/gurukula/
├── docker-compose.yml       ← from this folder
├── default.conf.template    ← from this folder
└── .env                     ← your settings (edit this)
```

## One-time setup (replaces the old `docker run` container)

```bash
cd /opt/gurukula
curl -fsSLO https://raw.githubusercontent.com/premprakaash/BANAVASIVEDAGURUKULA/main/deploy/gurukula/docker-compose.yml
curl -fsSLO https://raw.githubusercontent.com/premprakaash/BANAVASIVEDAGURUKULA/main/deploy/gurukula/default.conf.template
curl -fsSL  https://raw.githubusercontent.com/premprakaash/BANAVASIVEDAGURUKULA/main/deploy/gurukula/.env.example -o .env
nano .env                                  # set MEDIA_BASE_URL

docker stop gurukula-web && docker rm gurukula-web   # remove the old container
docker compose up -d                                 # start the new one
curl -s -H "Host: banavasivedagurukula.org" http://localhost/config.js --resolve banavasivedagurukula.org:80:127.0.0.1
```

`nginx-proxy` needs no change: the new container has the same name (`gurukula-web`) and is on `proxy-net`.

## Changing a setting later

```bash
cd /opt/gurukula
nano .env
docker compose up -d      # recreates the container with the new values (a few seconds)
```

Check it: `https://banavasivedagurukula.org/config.js` should show the new value.

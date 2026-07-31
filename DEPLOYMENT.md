# 🚀 Deployment Guide - Arshit Choudhary Portfolio

Your portfolio is fully configured and ready for live deployment.

---

## ⚡ Option 1: Deploy to Vercel (Recommended - 1 Minute)

Vercel is the creator of Next.js and provides instant, free hosting with automatic HTTPS and global CDN.

1. **Commit and Push your project to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy: Production portfolio ready"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new) and log in with GitHub.
   - Click **Import** next to your `portfolio` repository.
   - Click **Deploy** (No custom configuration needed).

3. 🎉 **Done!** Your website will be live at `https://portfolio-xxx.vercel.app`.

---

## 📦 Option 2: Build Static Output (`out/` directory)

Your `next.config.mjs` is configured with `output: 'export'`.

To build the static distribution:
```bash
npm run build
```

This will create a production static folder named **`out/`**.

You can deploy the contents of the **`out/`** directory to:
- **Netlify** ([netlify.com/drop](https://app.netlify.com/drop)) - Drag & drop the `out/` folder.
- **GitHub Pages** - Push `out/` contents to `gh-pages` branch.
- **Cloudflare Pages** - Upload static build directory.

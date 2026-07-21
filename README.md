# Ys Portfolio

Static rebuild of yahyashema.wixsite.com/mysite — plain HTML/CSS/JS, ready for GitHub Pages.

## Files
- `index.html` — homepage (hero + 4 project categories)
- `project.html` — one reusable template for all project detail pages (driven by `?p=slug` in the URL + the `projects` object at the bottom of the file)
- `contact.html` — contact page with a placeholder form
- `styles.css` — all styling

## Publish it on GitHub Pages

1. **Create the repo.** On GitHub, click New repository. Name it exactly:
   `yourusername.github.io` (replace `yourusername` with your actual GitHub username).
   Keep it public.

2. **Upload these files.** Easiest way with no command line:
   - Open the new repo → "Add file" → "Upload files"
   - Drag in `index.html`, `project.html`, `contact.html`, `styles.css`, and this README
   - Commit directly to the `main` branch

   Or with git from your machine:
   ```
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   # copy these files into this folder
   git add .
   git commit -m "Initial site"
   git push
   ```

3. **Turn on Pages.** Repo → Settings → Pages → under "Build and deployment," Source should be "Deploy from a branch," Branch = `main`, folder = `/ (root)`. Save.
   (For a `username.github.io` repo this is usually already on by default.)

4. **Visit your site.** After a minute or two it's live at:
   `https://yourusername.github.io`

## Things to swap out before you call it done

- **Images**: right now the project images point directly at your old Wix CDN URLs so the site works immediately. Download your real images and put them in an `/images` folder, then update the `src` paths in `index.html` and the `projects` object in `project.html` — don't rely on hotlinking Wix's CDN long-term.
- **Contact info**: `contact.html` has placeholder email/LinkedIn/Instagram links — put in your real ones.
- **Contact form**: the form currently just shows an alert. Wire it to a free service like Formspree or Netlify Forms so submissions actually reach your inbox, or swap the button for a plain `mailto:` link.
- **Project write-ups**: `project.html` currently reuses the short blurb from the homepage for every project. Add real case-study content per project as you go — you can either expand the `projects` object or split each into its own HTML file if they get long.

## Custom domain (optional)

If you want something like `yahyashema.com` instead of the `.github.io` address: buy the domain from any registrar, then in repo Settings → Pages → Custom domain, enter it, and add the DNS records GitHub shows you at your registrar. GitHub Pages provisions HTTPS automatically once DNS is verified.

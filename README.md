# Personal Website

This is a pure static, classic academic-style personal homepage for GitHub Pages. It uses a simple two-column layout and no framework.

## Local preview

Open `index.html` directly, or run a local static server:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Updating content

- Edit `index.html` to update profile, education, experience, projects, skills, and contact details.
- The current avatar is `assets/icon.png`.
- The profile GitHub icon links to `https://github.com/GYMING0903`; project entries intentionally do not expose external links.
- Adjust typography, spacing, and colors in `styles.css`.

## Deploying to GitHub Pages

1. Create a GitHub repository. For `https://yourusername.github.io/`, name it `yourusername.github.io`.
2. Upload all files in this folder to the repository root and commit them.
3. Open **Settings → Pages**. Select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. After the deployment finishes, open the GitHub Pages URL shown by GitHub.

For a normal repository such as `personal-website`, the URL is usually `https://yourusername.github.io/personal-website/`.

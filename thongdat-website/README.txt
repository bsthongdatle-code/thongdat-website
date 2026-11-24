THONG DAT WEBSITE — LIGHT MINIMALIST

DEPLOY TO GITHUB PAGES
1. Extract this ZIP.
2. Put your own favicon.png in the project root (same level as index.html).
3. Upload the CONTENTS of this folder to the root of your GitHub repository, not the enclosing folder.
4. In GitHub: Settings > Pages > Deploy from a branch > main > /(root) > Save.
5. Wait for GitHub Pages to publish.

PAGES
- index.html: homepage
- study/index.html: demo learning library
- nahida/index.html: integration placeholder for your existing Nahida HTML
- furina/index.html: local image-preview gallery

IMPORTANT
- The Furina gallery currently previews images selected on the current device only. It does not upload them to GitHub or persist after refresh.
- To publish photos permanently, put image files in furina/images/ and add them to the page, or connect a storage/backend service.
- Replace nahida/index.html with your completed Nahida page and copy its dependent assets while preserving relative paths.
- Google Fonts are loaded from the internet; system fonts will be used if unavailable.

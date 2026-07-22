# Suncoast Ravens Website

Static five-page website for the Suncoast Ravens:

- Home (`index.html`)
- Schedule (`schedule.html`)
- Sponsor (`sponsor.html`)
- Contact (`contact.html`)
- Registration (`registration.html`)

## Publish with GitHub Pages

1. Create a new public GitHub repository, such as `suncoast-ravens`.
2. Upload every file and folder from this project. Keep the `assets` folder intact.
3. Open the repository's **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`, then save.
7. GitHub will provide a temporary address similar to `https://YOUR-USERNAME.github.io/suncoast-ravens/`.

## Connect a custom domain

1. Purchase a domain from your preferred registrar.
2. In GitHub, go to **Settings → Pages → Custom domain** and enter the domain.
3. For a `www` domain, create a CNAME DNS record:
   - Host: `www`
   - Value: `YOUR-USERNAME.github.io`
4. For the root domain, add GitHub Pages A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. Enable **Enforce HTTPS** after GitHub confirms the DNS settings.

## Contact forms

The contact and registration forms use `mailto:` and open the visitor's email app with a prefilled message to `suncoastravens@gmail.com`. For database-backed forms, connect a form service or hosting backend later.

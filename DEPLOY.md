# AgentBridge Public Deployment

This folder is prepared for GitHub Pages.

## Expected public URL
If the repository is named `agentbridge`, the default GitHub Pages URL will normally be:

`https://<github-username>.github.io/agentbridge/`

If the repository is named `<github-username>.github.io`, the default URL will normally be:

`https://<github-username>.github.io/`

## Deployment
1. Create a GitHub repository and place the contents of this folder at the repository root.
2. Use the `main` branch.
3. In GitHub: Settings -> Pages -> Build and deployment -> Source -> GitHub Actions.
4. Push to `main`, or manually run the workflow under Actions.
5. The workflow publishes the static site and reports the live URL.

## Custom domain later
A custom domain such as `agentbridge.example.com` can be added later in repository Settings -> Pages after DNS is configured.

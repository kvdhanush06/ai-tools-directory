# Security Policy

AI Tools Directory is a static Astro site. Its security model primarily concerns generated content, external resources, deployment configuration, and client-side scripts.

## Reporting a Vulnerability

Please report security vulnerabilities privately to the repository owner through GitHub or the contact information published on https://allkvd.dev/. Do not publish exploitable details in a public issue.

Include the affected component, reproduction steps, impact, and relevant evidence.

## Security Practices

- The site is statically generated and does not require a server-side application database.
- Canonical URLs are generated for the production `.dev` domain.
- Third-party scripts should be minimized and reviewed before inclusion.
- Secrets must not be embedded in source or generated static assets.
- Build output should be treated as public and inspected before deployment.

## Secret Handling

Never commit API keys, deployment tokens, private credentials, or production environment files.

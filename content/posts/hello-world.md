---
title: "Hello World"
description: "The first post of your new site. Replace this with your own content."
publishDate: "2026-09-20"
tags: ["getting-started"]
---

This is an example post. Markdown and MDX files placed in `content/posts/` become blog
posts automatically.

## Frontmatter

Each post supports the following fields:

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Max 60 characters |
| `description` | yes | Used for meta tags and previews |
| `publishDate` | yes | Any date string |
| `updatedDate` | no | Shown on the post if set |
| `tags` | no | Lowercased and de-duplicated |
| `coverImage` | no | `{ src, alt }` |
| `draft` | no | Hidden from production builds |
| `pinned` | no | Featured on the homepage |

## Writing

Regular markdown works as expected — **bold**, _italic_, [links](https://astro.build),
and lists:

- One
- Two
- Three

Delete this file when you are ready to publish your own writing.

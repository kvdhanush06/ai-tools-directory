# AI Tools Directory

Curated directory for discovering, searching, and exploring AI tools across multiple categories.

**Live:** https://aitoolsdirectory.allkvd.dev/

## Problem

The AI ecosystem grows rapidly, making it difficult for users to discover relevant tools, compare solutions, and find products that match their needs.

AI Tools Directory provides a centralized platform for exploring AI products through organized categories and search-driven discovery.

## Features

### AI Tool Discovery

* Browse AI tools across multiple categories
* Explore new products and services
* Discover tools for different use cases

### Search Experience

* Search across listed tools
* Quickly locate relevant products
* Filter through large collections efficiently

### Categorized Directory

Tools are organized into structured categories to improve navigation and discovery.

Examples include:

* Writing
* Productivity
* Coding
* Image Generation
* Video Generation
* Research
* Automation
* Marketing

### Responsive Experience

* Mobile-friendly design
* Fast page loading
* Optimized browsing experience

## Architecture

AI Tools Directory is built as a static web application optimized for performance, SEO, and discoverability.

### Core Components

* Tool Directory
* Search Interface
* Category Navigation
* SEO Layer
* Ad Integration

### Design Goals

* Fast loading
* Search-friendly architecture
* Easy navigation
* Scalable content management
* Mobile responsiveness

## Tech Stack

### Frontend

* Astro
* JavaScript
* HTML
* CSS

### Hosting

* Netlify

### Monetization

* Google AdSense

## Project Structure

```text id="1lb9vt"
ai-tools-directory/
├── src/
├── public/
├── components/
├── pages/
├── tests/
└── README.md
```

## Local Development

### Install Dependencies

```bash id="5duik5"
npm install
```

### Start Development Server

```bash id="5r8wh7"
npm run dev
```

### Build Production Assets

```bash id="3dxk0u"
npm run build
```

### Preview Production Build

```bash id="aw7g8n"
npm run preview
```

### Run Tests

```bash id="j7bup9"
npm run test
```

## Deployment

### Netlify

Build Command:

```text id="0eqlpk"
npm run build
```

Publish Directory:

```text id="eqw0b3"
dist
```

Node Version:

```text id="yk0k6q"
20
```

## AdSense Configuration

Set the following Netlify environment variables:

```text id="bux7jv"
PUBLIC_ADSENSE_CLIENT
PUBLIC_ADSENSE_SLOT_HOME_TOP
```

Update:

```text id="lmgtqs"
public/ads.txt
```

with your AdSense publisher ID.

## Key Engineering Highlights

* Built a searchable AI tool discovery platform using Astro.
* Designed a category-based navigation system for scalable content organization.
* Optimized for SEO and static-site performance.
* Implemented responsive layouts for desktop and mobile users.
* Integrated Google AdSense monetization support.

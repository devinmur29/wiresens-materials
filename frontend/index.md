---
layout: layout.njk
title: Frontend
---

# Web GUI

The WiReSens Toolkit Web GUI serves as a control panel for configuring devices, wireless data transmission, and visualization. It provides plug-and-play infrastructure for working with the WiReSens Toolkit.

It can be used from the deployed site: [https://wi-re-sens-web.vercel.app/](https://wi-re-sens-web.vercel.app/)

Or can be setup locally for use in environments without internet access: [Source Code](./assets/WiReSensWeb-main.zip). The instructions for local setup are below. 

## Introduction

Make sure you have [Node](https://nodejs.org/en/download) and [npm](https://www.npmjs.com/package/npm/v/10.9.2) installed.

You can check by running node -v and npm -v from the terminal. 


## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run next-dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This deploys WiReSensWeb locally and listens for the [WiReSensBackend](/backend) (Python) running on your machine. 


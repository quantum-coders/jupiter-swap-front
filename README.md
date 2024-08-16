# Jupiter Swap Frontend

Welcome to the **Jupiter Swap Frontend** project! This repository contains the frontend code for a modern web application built with Nuxt 3, Solana, Pinia, and custom styling using Sass/SCSS. This project is designed to provide a clean and efficient interface for interacting with the Solana blockchain.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Join Us](#join-us)
- [Contributing](#contributing)
- [License](#license)

## Tutorial

We created a tutorial to help you get started with this project. Follow the steps in the tutorial to set up the frontend and backend, and start building your decentralized application.

- **Frontend Tutorial:** [Jupiter Swap Frontend Tutorial](https://medium.com/@0xjesus/build-your-solana-swap-dapp-with-vue-js-e363f5956a69)
- **Backend Tutorial:** [Jupiter Swap Backend Tutorial](https://medium.com/@0xjesus/building-a-solana-swap-api-with-node-js-a-comprehensive-guide-55333389c0f6)

## Overview

This project is the frontend part of a decentralized application that connects with the Solana blockchain. Built with Nuxt 3, it leverages the power of Vue.js and Pinia for state management, offering a responsive and dynamic user experience.

## Features

- **Nuxt 3 Integration:** Built with Nuxt 3 for a modern and streamlined development experience.
- **Solana Blockchain:** Seamlessly interacts with Solana, leveraging its capabilities for decentralized applications.
- **Pinia State Management:** Efficient state management with Pinia, perfectly suited for Vue.js.
- **Custom Styling:** Styled using Sass/SCSS for maintainable and scalable design.
- **Clear Separation:** Separate repositories for frontend and backend to keep the codebase clean and modular.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/jupiter-swap-frontend.git
   cd jupiter-swap-frontend
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   yarn dev
   ```

4. **Build for production:**

   ```bash
   yarn build
   ```

## Getting Started

To start developing, clone the repository, install the dependencies, and run the development server. You’ll be able to see your changes live on `localhost:3000`.

## Environment Variables

The only variable you need to set is the `SOLANA_RPC_URL` in the `.env` file. 

Since we are swapping real tokens we recommend using the mainnet cluster for the RPC URL.


## Project Structure

The project is organized as follows:

```
jupiter-swap-frontend/
│
├── assets/
│   └── styles/
│       ├── globals.sass
│       ├── main.scss
│       ├── plugins.sass
│       └── variables.sass
│
├── components/
│   ├── Plattform/
│   │   ├── AppBar.vue
│   │   └── Footer.vue
│   └── Solana/
│       └── WalletConnect.vue
│
├── composables/
│   └── usePrettyToast.js
│
├── layouts/
│   └── default.vue
│
├── pages/
│   └── index.vue
│
├── stores/
│   └── solanaStore.js
│
├── nuxt.config.ts
├── app.vue
└── package.json
```

## Join Us

We are Quantum Coders, the team behind this project. We are passionate about blockchain technology and its potential to revolutionize the world. Join us on our journey to build innovative solutions and contribute to the decentralized future.

**Connect with us:**

- **Quantum Coders on X:** [@qcodersteam](https://x.com/qcodersteam)
- **LunaAI on X:** [@lunadefiai](https://x.com/lunadefiai)
- **Bonkhemist on X:** [@bonkhemist](https://x.com/bonkhemist)
- **_0xJesus on X:** [@_0xjesus](https://x.com/_0xjesus)

## Contributing

We welcome contributions! If you’d like to contribute, fork the repository, create a feature branch, and submit a pull request. We look forward to collaborating with you.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

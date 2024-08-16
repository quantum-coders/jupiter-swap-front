<template>
  <nav class="navbar navbar-expand-lg bg-light shadow">
    <div class="container">
      <a class="navbar-brand" href="#">
        SEZ - Jupiter Transactions Workshop
      </a>
			<span class="badge bg-warning text-dark me-2">Devnet</span>
			<span class="badge bg-success">0xJesus</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <SolanaWalletConnect />
      </div>
    </div>
  </nav>
</template>

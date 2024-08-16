<script setup>

const solanaStore = useSolanaStore();
const inputToken = ref('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
const outputToken = ref('So11111111111111111111111111111111111111112');
const amount = ref(0.01);
const slippage = ref(0.05);
const loading = ref(false);
const resultTx = ref(null);

const swap = async () => {
	try {
		resultTx.value = null;
		loading.value = true;
		const res = await solanaStore.swapAndSign(inputToken.value, outputToken.value, amount.value, slippage.value);
		resultTx.value = res;
	} catch (e) {
		console.error(e);
	} finally {
		loading.value = false;
	}
}

</script>

<template>
	<div class="d-flex flex-column">
		<div class="flex-grow-1">
			<div class="container mt-5">
				<div v-if="resultTx" class="alert alert-success" role="alert">
					<h4 class="alert-heading">Transaction Successful</h4>
					<p>Your transaction was successful. You can view it on the Solana Explorer by clicking the link
						below.</p>
					<hr>
					<p class="mb-0">
						<a :href="`${ resultTx }`" target="_blank">View Transaction</a>
					</p>
				</div>
				<div class="card p-3 col-md-6 mx-auto">
					<h2>Swap</h2>
					<div class="mb-3">
						<label for="inputToken" class="form-label">Input Token</label>
						<input
								type="text"
								id="inputToken"
								class="form-control"
								v-model="inputToken"
								placeholder="Enter input token"
						/>
					</div>
					<div class="mb-3">
						<label for="outputToken" class="form-label">Output Token</label>
						<input
								type="text"
								id="outputToken"
								class="form-control"
								v-model="outputToken"
								placeholder="Enter output token"
								readonly
						/>
					</div>
					<div class="mb-3">
						<label for="amount" class="form-label">Amount</label>
						<input
								type="number"
								id="amount"
								class="form-control"
								v-model="amount"
								placeholder="Enter amount"
						/>
					</div>
					<div class="mb-3">
						<label for="slippage" class="form-label">Slippage (%)</label>
						<input
								type="number"
								id="slippage"
								class="form-control"
								v-model="slippage"
								placeholder="Enter slippage percentage"
								min="0"
								max="100"
								step="0.1"
						/>
					</div>
					<button type="button" class="btn btn-primary"
					        @click="swap"
					        :disabled="!inputToken || !outputToken || !amount || !slippage || loading"
					>

						<span v-if="loading" class="spinner-border spinner-border-sm" role="status"
						      aria-hidden="true"></span>
						Swap
					</button>
				</div>
			</div>

		</div>
	</div>
</template>

<style scoped lang="sass">
</style>

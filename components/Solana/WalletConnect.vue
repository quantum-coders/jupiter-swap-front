<template>
	<wallet-multi-button />
</template>

<script setup>
	import { useWallet, initWallet } from 'solana-wallets-vue';
	import { WalletMultiButton } from 'solana-wallets-vue';

	const solanaStore = useSolanaStore();
	const config = useRuntimeConfig();
	initWallet({ autoConnect: true });

	const wallet = computed(() => {
		const { publicKey, sendTransaction } = useWallet();

		if(publicKey && publicKey.value) {
			console.log("Wallet connected: ", publicKey.value.toBase58());
			solanaStore.wallet = publicKey.value.toBase58();
			return publicKey.value.toBase58();
		}

		console.log("Wallet not connected?? ", publicKey, sendTransaction)
		solanaStore.wallet = null;
		return null;
	});

	watch(wallet, async (currentValue) => {
		if(currentValue) {

		} else {
			localStorage.removeItem('accessToken');
		}
	});
</script>

<style lang="sass" scoped>
</style>

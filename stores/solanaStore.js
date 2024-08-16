import {defineStore} from 'pinia';
import {Connection, VersionedTransaction} from '@solana/web3.js';
import {useWallet} from "solana-wallets-vue";

export const useSolanaStore = defineStore('solanaStore', () => {

	const wallet = ref('');
	const connectedWallet = computed(() => wallet.wallet.value?.adapter?.name);
	const {successToast, errorToast} = usePrettyToast();

	const handleError = (error, userMessage) => {
		console.error(userMessage, error);
		errorToast(`${userMessage}: ${error.message || error}`);
	};

	const getProvider = () => {
		const wallet = useWallet().wallet.value;
		if (!wallet) {
			throw new Error('Please connect your wallet');
		}

		const walletName = wallet.adapter.name.toLowerCase();

		switch (walletName) {
			case 'backpack':
				return window.backpack;
			case 'solana':
			case 'phantom':
				return window.solana;
			case 'solflare':
				return window.solflare;
			default:
				throw new Error('Wallet provider not supported');
		}
	};

	const signEncodedTransaction = async (encodedTransaction) => {
		try {
			const {Buffer} = await import('buffer');
			const provider = getProvider();
			const connection = new Connection(`${useRuntimeConfig().public.solanaRPC}`, 'confirmed');

			console.log("Signing transaction", encodedTransaction);
			const swapTransactionBuf = Buffer.from(encodedTransaction, 'base64');
			const transaction = VersionedTransaction.deserialize(swapTransactionBuf);
			const signedTransaction = await provider.signTransaction(transaction, connection, {
				skipPreflight: true,
				commitment: 'confirmed',
			});
			console.log("Signed transaction", signedTransaction);
			const txid = await connection.sendRawTransaction(signedTransaction.serialize(), {});
			successToast('Transaction signed successfully');
			return `https://solscan.io/tx/${txid}`;

		} catch (error) {
			handleError(error, 'Error signing transaction');
			throw error; // Rethrow only if necessary
		}
	};

	const swap = async (inputMint, outputMint, amount, slippageBps) => {
		try {
			const publicKey = wallet.value;
			const response = await fetch(`${useRuntimeConfig().public.baseURL}/solana/swap`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({publicKey, inputMint, outputMint, amount, slippageBps}),
			});

			if (!response.ok) {
				const errorText = `Failed to build swap transaction: ${response.statusText}`;
				throw new Error(errorText);
			}

			const jsonResponse = await response.json();
			return jsonResponse.data.transaction;

		} catch (error) {
			handleError(error, 'Error building swap transaction');
			throw error; // Rethrow only if necessary
		}
	};

	const swapAndSign = async (inputMint, outputMint, amount, slippageBps) => {
		try {
			const transaction = await swap(inputMint, outputMint, amount, slippageBps);
			return await signEncodedTransaction(transaction);

		} catch (error) {
			handleError(error, 'Error during swap and sign');
			throw error; // Rethrow only if necessary
		}
	};

	return {
		connectedWallet,
		wallet,
		swap,
		swapAndSign
	};
});

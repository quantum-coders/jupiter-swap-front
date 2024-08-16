import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

export const usePrettyToast = () => {

	const toast = useToast();
	const successToast = (message, position) => {

		toast.success(message, {
			duration: 3000,
			position: position || 'bottom-right',
		});
	};

	const errorToast = (message, position) => {

		toast.error(message, {
			duration: 3000,
			position: position || 'bottom-right',
		});
	};

	return {
		successToast,
		errorToast,
	};
};

const BASE_URL = 'https://fakestoreapi.com/';
export const getAllProducts = async () => {
	const response = await fetch(`${BASE_URL}/products`);
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}
	const data = await response.json();
	return data;
};

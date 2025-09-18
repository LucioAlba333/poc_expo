import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProductCard({ product, onPress }) {
	return (
		<Pressable onPress={onPress}>
			<View style={styles.card}>
				<Image source={{ uri: product.image }} style={styles.image} />
				<Text style={styles.title}>{product.title}</Text>
				<Text style={styles.price}>{formatPrice(product.price)}</Text>
			</View>
		</Pressable>
	);
}
const styles = StyleSheet.create({
	card: { margin: 10, padding: 10, backgroundColor: '#fff', borderRadius: 8 },
	image: { height: 100, resizeMode: 'contain' },
	title: { fontSize: 14, marginVertical: 5 },
	price: { fontWeight: 'bold' },
});

const formatPrice = (number) => `$ ${number.toFixed(2)}`;

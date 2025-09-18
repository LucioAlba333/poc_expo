import { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { getAllProducts } from '../api/productService';
import ProductCard from '../components/productCard';
import ProductModal from '../components/productModal';

export default function Main() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		getAllProducts().then((data) => {
			setProducts(data);
			setLoading(false);
		});
	}, []);

	const handlePress = (product) => {
		setSelectedProduct(product);
		setModalVisible(true);
	};
	return (
		<View style={styles.container}>
			<View style={styles.navbar}>
				<Text style={styles.navbarText}>STORE</Text>
			</View>

			{loading ? (
				<ActivityIndicator
					size="large"
					color="#fff"
					style={{ marginTop: 50 }}
				/>
			) : (
				<FlatList
					data={products}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<ProductCard product={item} onPress={() => handlePress(item)} />
					)}
				/>
			)}
			<ProductModal
				visible={modalVisible}
				product={selectedProduct}
				onClose={() => setModalVisible(false)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222',
	},
	navbar: {
		height: 60,
		backgroundColor: '#000',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15,
	},
	navbarText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		letterSpacing: 1,
	},
});

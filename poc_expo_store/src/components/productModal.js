import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProductModal({ visible, product, onClose }) {
	if (!product) return null;

	return (
		<Modal
			visible={visible}
			transparent={true}
			animationType="slide"
			onRequestClose={onClose}
		>
			<View style={styles.overlay}>
				<View style={styles.modal}>
					<Text style={styles.title}>{product.name}</Text>
					<Image source={{ uri: product.image }} style={styles.image} />
					<Text style={styles.description}>{product.description}</Text>
					<View style={styles.row}>
						<Text style={styles.numbers}>$ {product.price}</Text>
						<Text style={styles.numbers}>rating {product.rating.rate}/5</Text>
					</View>
					<Pressable onPress={onClose} style={styles.closeButton}>
						<Text style={styles.closeText}>Close</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
		width: '80%',
	},
	image: { height: 100, resizeMode: 'contain' },
	title: { fontSize: 14, marginVertical: 5 },
	numbers: { fontWeight: 'bold' },
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	closeButton: {
		backgroundColor: '#333',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	closeText: { color: '#fff', fontWeight: 'bold' },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Navbar() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>CatWIKI</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 10,
	},
	title: {
		color: "black",
		fontSize: 32,
		fontWeight: "bold",
		letterSpacing: 3,
	},
});

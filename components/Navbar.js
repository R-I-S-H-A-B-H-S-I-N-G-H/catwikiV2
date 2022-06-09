import { StyleSheet, Text, View, Image } from "react-native";
import logoimage from "../assets/titlelogo.png";
export default function Navbar() {
	return <Image style={styles.logo} source={logoimage} />;
}
const styles = StyleSheet.create({
	// container: {
	// 	// backgroundColor: "gray",
	// 	padding: 10,
	// 	overflow: "hidden",
	// },
	logo: {
		backgroundColor: "white",
		// marginTop: 30,
		height: "10%",
		width: "60%",
		resizeMode: "contain",
	},
});

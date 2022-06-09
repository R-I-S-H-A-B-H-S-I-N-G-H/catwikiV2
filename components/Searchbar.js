import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	CardSection,
	FlatList,
	ScrollView,
} from "react-native";
export default function Searchbar({ val, changeOptions }) {
	const [text, setText] = useState("");
	const [number, onChangeNumber] = useState(null);
	function valueChange(e) {
		setText(e);
		changeOptions(e);
	}
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={valueChange}
				value={text}
				placeholder={"Search"}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		// backgroundColor: "blue",
		marginVertical: 10,
		width: "150%",
		zIndex: 100,
		display: "flex",
		alignItems: "center",
	},
	input: {
		// marginVertical: 20,
		// marginRight: 30,
		width: "100%",
		backgroundColor: "white",
		borderRadius: 18,
		paddingVertical: 6,
		paddingLeft: 15,
		color: "gray",
		fontWeight: "bold",
	},
});

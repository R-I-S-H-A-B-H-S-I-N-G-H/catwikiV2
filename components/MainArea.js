import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	CardSection,
} from "react-native";

export default function MainArea() {
	const [text, onChangeText] = useState("Search");
	const [number, onChangeNumber] = useState(null);
	const [imgURL, setimgURL] = useState(
		"https://cdn2.thecatapi.com/images/58r4fYPa6.jpg",
	);
	const res = async () => {
		try {
			const response = await fetch(
				"https://api.thecatapi.com/v1/images/search",
			);
			const json = await response.json();
			console.log(json);
			setimgURL(json[0].url);
			return json[0].url;
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.upper}>
				<View style={styles.left}>
					<Text style={styles.title}>CatWIKI</Text>
					<Text style={styles.white}>
						Got to Know more about your cat breed
					</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChangeText}
						value={text}
					/>
				</View>

				<View style={styles.right}></View>
			</View>
			<View style={styles.lower}>
				<Text style={{ paddingLeft: 25, paddingTop: 10, fontWeight: "bold" }}>
					Most Searched Breeds
				</Text>
				<Text
					style={{
						paddingLeft: 25,
						paddingTop: 10,
						fontSize: 20,
						fontWeight: "bold",
						width: "60%",
						letterSpacing: 0.6,
					}}
				>
					66+ Breeds for you to discover
				</Text>
				<View
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: 10,
					}}
				>
					<View style={styles.catimg}>
						<Image source={{ uri: imgURL }} style={styles.img} />
						<Image source={{ uri: imgURL }} style={styles.img} />
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
		margin: 10,
		borderRadius: 30,
		overflow: "hidden",
	},
	input: {
		marginVertical: 20,
		marginRight: 30,
		backgroundColor: "white",
		borderRadius: 18,
		paddingVertical: 6,
		paddingLeft: 15,
		color: "gray",
		fontWeight: "bold",
	},
	upper: {
		padding: 20,
		// borderTopLeftRadius: 30,
		// borderTopRightRadius: 30,
		// backgroundColor: "black",
		display: "flex",
		flexDirection: "row",
	},
	left: {
		flex: 4,
		// backgroundColor: "blue",
	},
	right: {
		flex: 4,
		// backgroundColor: "orange",
		width: 100,
		height: 100,
	},

	black: {
		color: "black",
	},
	title: {
		marginVertical: 10,
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
	white: {
		color: "white",
	},
	lower: {
		paddingVertical: 20,
		backgroundColor: "#E3E1DC",
		width: "100%",
		// height: 500,
	},

	catimg: {
		// backgroundColor: "black",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		width: "100%",
	},
	img: {
		minWidth: "40%",
		aspectRatio: 5 / 5.8,
		borderRadius: 10,
		margin: 5,
	},
});

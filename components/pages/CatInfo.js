import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	StyleSheet,
	Button,
	TouchableOpacity,
	ScrollView,
	Image,
} from "react-native";
const API_KEY = "d779136e-7305-4bca-a2cf-7d8033fdb6fc";

export default function CatInfo({ route }) {
	const name = route.params.name;
	const imgid = route.params.imgid;
	const description = route.params.description;
	const [imgUrl, setimgURL] = useState("/empty");

	async function getImgbyId(id, count = 5) {
		// console.log("Try : ", count);
		if (count < 0) return;
		const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`, {
			headers: {
				"x-api-key": `${API_KEY}`,
			},
		}).then((res) => res.json());
		// console.log(name);
		// console.log(description);
		// console.log(imgid);

		if (res) {
			setimgURL(res.url);
			// console.log("success");
			return;
		}
		await getImgbyId(id, count--);
	}
	useEffect(() => {
		getImgbyId(imgid);
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			<Image source={{ uri: imgUrl }} style={styles.cover} />
			<Text style={styles.title}>{name}</Text>
			<Text style={styles.des}>{description}</Text>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		// marginVertical: 30,
	},
	title: {
		textAlign: "center",
		fontSize: 30,
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	des: {
		padding: 20,
		color: "gray",
	},
	cover: {
		width: "100%",
		aspectRatio: 18 / 15,
		resizeMode: "cover",
	},
});

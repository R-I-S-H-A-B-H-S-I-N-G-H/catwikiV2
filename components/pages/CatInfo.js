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
	Linking,
} from "react-native";
const API_KEY = "d779136e-7305-4bca-a2cf-7d8033fdb6fc";

export default function CatInfo({ route }) {
	const name = route.params.name;
	const imgid = route.params.imgid;
	const description = route.params.description;
	const alt_names = route.params.alt_names;
	const origin = route.params.origin;
	const temperament = route.params.temperament;
	const lifespan = route.params.lifespan;
	const adaptability = route.params.adaptability;
	const wiki = route.params.wiki;

	const affection = route.params.affection;

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
			<Text
				style={{
					textAlign: "center",
					padding: 5,
					fontWeight: "bold",
				}}
			>
				{alt_names}
			</Text>
			<View>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-around",
					}}
				>
					{origin && (
						<View
							style={{
								backgroundColor: "#A4FF7F",
								marginHorizontal: 30,
								marginVertical: 5,
								padding: 5,
								borderRadius: 10,
								borderColor: "green",
								borderWidth: 1,
							}}
						>
							<Text style={{ textAlign: "center" }}>{origin}</Text>
						</View>
					)}

					{lifespan && (
						<View
							style={{
								backgroundColor: "#E56E6E",
								marginHorizontal: 30,
								marginVertical: 5,
								padding: 5,
								borderRadius: 10,
								borderColor: "orange",
								borderWidth: 1,
							}}
						>
							<Text style={{ textAlign: "center" }}>{lifespan + " yrs"}</Text>
						</View>
					)}
					{adaptability && (
						<View
							style={{
								backgroundColor: "#FFCC99",
								marginHorizontal: 30,
								marginVertical: 5,
								padding: 5,
								borderRadius: 10,
								borderColor: "orange",
								borderWidth: 1,
							}}
						>
							<Text
								style={{ textAlign: "center" }}
							>{`adaptability : ${adaptability}`}</Text>
						</View>
					)}
					{affection && (
						<View
							style={{
								backgroundColor: "#FFCCDC",
								marginHorizontal: 30,
								marginVertical: 5,
								padding: 5,
								borderRadius: 10,
								borderColor: "pink",
								borderWidth: 1,
							}}
						>
							<Text
								style={{ textAlign: "center" }}
							>{`Affection : ${affection}`}</Text>
						</View>
					)}
				</View>
				{temperament && (
					<View
						style={{
							backgroundColor: "#FFCCCC",
							marginHorizontal: 30,
							marginVertical: 5,
							padding: 5,
							borderRadius: 10,
							borderColor: "red",
							borderWidth: 1,
						}}
					>
						<Text style={{ textAlign: "center" }}>{temperament}</Text>
					</View>
				)}
			</View>

			<Text style={styles.des}>{description}</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={async () => await Linking.openURL(wiki)}
			>
				<Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
					Read more at Wikipedia
				</Text>
			</TouchableOpacity>
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
		aspectRatio: 18 / 17,
		resizeMode: "cover",
	},
	button: {
		margin: 30,
		padding: 15,
		// backgroundColor: "gray",
		borderRadius: 5,
	},
});

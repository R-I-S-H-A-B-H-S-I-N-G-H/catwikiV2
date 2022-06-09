import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	StyleSheet,
	Button,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const API_KEY = "d779136e-7305-4bca-a2cf-7d8033fdb6fc";

export default function Search() {
	const navigation = useNavigation();
	const [textval, settextval] = useState("");
	const [suggestionList, setsuggesions] = useState([]);
	async function getNameList(query) {
		try {
			return fetch(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, {
				headers: {
					"x-api-key": `${API_KEY}`,
				},
			}).then((res) => res.json());
		} catch (error) {
			return null;
		}
	}
	async function textChange(text, count = 5) {
		if (count < 5) return;
		settextval(text);
		const res = await getNameList(text);
		if (res) {
			var flterres = [];
			for (var i = 0; i < res.length; i++) {
				if (
					!res[i].name ||
					!res[i].description ||
					!res[i].reference_image_id ||
					!res[i].alt_names
				)
					continue;
				flterres.push(res[i]);
			}
			setsuggesions(flterres);
			return;
		}
		setsuggesions([]);
		textChange(text, count--);
	}
	return (
		<SafeAreaView
			style={{
				width: "100%",
				height: "100%",
				marginVertical: 50,
				display: "flex",
				alignItems: "center",
			}}
		>
			<View style={styles.container}>
				<TextInput
					value={textval}
					onChangeText={(e) => textChange(e)}
					style={styles.input}
					placeholder={"Search Cat Breeds"}
				/>
				<ScrollView style={{ paddingHorizontal: 20 }}>
					{suggestionList.map((item, index) => (
						<TouchableOpacity
							key={item + index}
							onPress={() =>
								navigation.navigate("CatInfo", {
									name: item.name,
									origin: item.origin,
									description: item.description,
                                    imgid: item.reference_image_id,
                                    alt_names:
								})
							}
							style={{
								padding: 10,
								paddingVertical: 15,
								backgroundColor: "#F5F5F5",
								margin: 5,
								borderRadius: 10,
							}}
						>
							<Text
								key={index + item}
								style={{ color: "black", fontWeight: "bold" }}
							>
								{item.name}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "80%",
		width: "90%",
		backgroundColor: "white",
		paddingVertical: 20,
		borderRadius: 20,
	},
	button: {
		backgroundColor: "gray",
		width: 30,
		height: 30,
		borderRadius: 10,
		position: "absolute",
		top: 10,
		right: 10,
	},
	input: {
		backgroundColor: "white",
		padding: 10,
		paddingHorizontal: 30,
		margin: 10,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: "black",
		color: "black",
		fontWeight: "bold",
		fontSize: 16,
	},
});

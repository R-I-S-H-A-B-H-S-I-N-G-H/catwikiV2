import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	CardSection,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import catcover from "../assets/catcover.png";
const loading =
	"https://cdn.dribbble.com/users/108183/screenshots/2301400/media/6af65dd321fbdf53a04ed7464a644f53.gif";
import logo from "../assets/whiteoverblacklogo.png";
import Searchbar from "./Searchbar";
const API_KEY = "d779136e-7305-4bca-a2cf-7d8033fdb6fc";

function getnewImg() {
	return fetch(`https://api.thecatapi.com/v1/breeds?x-api-key=${API_KEY}`).then(
		(res) => res.json(),
	);
}
function getcatbyBreed(keyword) {
	return fetch(
		`https://api.thecatapi.com/v1/breeds/search?x-api-key=${API_KEY} &q=${keyword}`,
	).then((res) => res.json());
}
function getImgbyId(id) {
	return fetch(`https://api.thecatapi.com/v1/images/${id}`, {
		headers: {
			"x-api-key": `${API_KEY}`,
		},
	}).then((res) => res.json());
}

export default function MainArea() {
	const navigation = useNavigation();
	const [imgURL, setimgURL] = useState([
		"https://cdn2.thecatapi.com/images/a8nIYvs6S.jpg",
		"https://cdn2.thecatapi.com/images/O3btzLlsO.png",
		"https://cdn2.thecatapi.com/images/06dgGmEOV.jpg",
		"https://cdn2.thecatapi.com/images/II9dOZmrw.jpg",
	]);
	const [catData, setCatdata] = useState([
		{ name: "", description: "", reference_image_id: "" },
		{ name: "", description: "", reference_image_id: "" },
		{ name: "", description: "", reference_image_id: "" },
		{ name: "", description: "", reference_image_id: "" },
	]);

	const [nameList, setnameList] = useState([
		"Savannah",
		"Bengal",
		"Norwegian Forest Cat",
		"Selkirk Rex",
	]);
	const getCatImages = async () => {
		var resarr = [];
		var raw = [];
		for (var i = 0; i < 4; i++) {
			const br = await getcatbyBreed(nameList[i]);
			raw[i] = br[0];
		}
		setCatdata(raw);
	};

	useEffect(() => {
		getCatImages();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.upper}>
				<View style={styles.left}>
					<Image style={styles.logo} source={logo} />
					<Text style={styles.white}>
						Got to Know more about your cat breed
					</Text>
					<View
						onTouchStart={() => navigation.navigate("Search")}
						style={styles.input}
					>
						<Text style={{ fontWeight: "bold", color: "gray" }}>
							Search Cat Breeds
						</Text>
					</View>
				</View>

				<View style={styles.right}>
					<Image
						style={{
							height: "100%",
							width: "100%",
							resizeMode: "contain",
							// backgroundColor: "blue",
						}}
						source={catcover}
					/>
				</View>
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
						// backgroundColor: "blue",
					}}
				>
					<View style={styles.catimg}>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("CatInfo", {
									name: catData[0].name,
									description: catData[0].description,
									imgid: catData[0].reference_image_id,
									alt_names: catData[0].alt_names,
									origin: catData[0].origin,
									wiki: catData[0].wikipedia_url,
								});
							}}
						>
							<Image source={{ uri: imgURL[0] }} style={styles.img} />
							<Text style={styles.imgtxt}>{nameList[0]}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("CatInfo", {
									name: catData[1].name,
									description: catData[1].description,
									imgid: catData[1].reference_image_id,
									alt_names: catData[1].alt_names,
									origin: catData[1].origin,
									wiki: catData[1].wikipedia_url,
								});
							}}
						>
							<Image source={{ uri: imgURL[1] }} style={styles.img} />
							<Text style={styles.imgtxt}>{nameList[1]}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.catimg}>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("CatInfo", {
									name: catData[2].name,
									description: catData[2].description,
									imgid: catData[2].reference_image_id,
									alt_names: catData[2].alt_names,
									origin: catData[2].origin,
									wiki: catData[2].wikipedia_url,
								});
							}}
						>
							<Image source={{ uri: imgURL[2] }} style={styles.img} />
							<Text style={styles.imgtxt}>{nameList[2]}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("CatInfo", {
									name: catData[3].name,
									description: catData[3].description,
									imgid: catData[3].reference_image_id,
									alt_names: catData[3].alt_names,
									origin: catData[3].origin,
									wiki: catData[3].wikipedia_url,
								});
							}}
						>
							<Image source={{ uri: imgURL[3] }} style={styles.img} />
							<Text style={styles.imgtxt}>{nameList[3]}</Text>
						</TouchableOpacity>
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

	upper: {
		padding: 20,
		// borderTopLeftRadius: 30,
		// borderTopRightRadius: 30,
		backgroundColor: "black",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
	},
	input: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		height: 40,
		marginVertical: 10,
		backgroundColor: "white",
		borderRadius: 18,
		paddingVertical: 6,
		paddingLeft: 15,
		fontWeight: "bold",
	},
	logo: {
		marginHorizontal: -10,
		height: 60,
		aspectRatio: 18 / 9,
		resizeMode: "contain",
	},
	left: {
		flex: 4,
		// backgroundColor: "blue",
	},
	right: {
		flex: 4,
		// backgroundColor: "orange",
		width: 100,
		height: 170,
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
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		width: "100%",
	},
	img: {
		minWidth: "48%",
		aspectRatio: 5 / 5.8,
		borderRadius: 10,
		margin: 5,
		resizeMode: "contain",
	},
	imgtxt: {
		fontWeight: "bold",
		paddingLeft: 10,
	},
});

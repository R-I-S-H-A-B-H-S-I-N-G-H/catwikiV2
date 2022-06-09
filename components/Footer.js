import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	CardSection,
	SafeAreaView,
} from "react-native";
import logo from "../assets/footerlogo.png";
import copywrite from "../assets/copyright.png";
export default function Footer() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.footer}>
				<Image style={styles.logo} source={logo} />

				<View
					style={{
						paddingLeft: 30,
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-start",
					}}
				>
					<Text
						style={{
							color: "white",
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Ⓒ{" "}
					</Text>
					<Text style={{ color: "white" }}>
						created by username -devChallange.io 2021
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		height: 250,
		width: "100%",
		display: "flex",
		// justifyContent: "center",
		alignItems: "center",
		// backgroundColor: "black",
	},
	footer: {
		height: "100%",
		width: "90%",
		padding: 10,
		backgroundColor: "black",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		overflow: "hidden",
	},
	logo: {
		// backgroundColor: "gray",
		marginHorizontal: 20,
		height: 65,
		aspectRatio: 18 / 9,
		resizeMode: "contain",
	},
});

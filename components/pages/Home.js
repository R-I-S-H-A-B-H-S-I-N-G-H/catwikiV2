import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Footer from "../Footer";
import MainArea from "../MainArea";
import Navbar from "../Navbar";

export default function Home() {
	return (
		<SafeAreaView style={{ backgroundColor: "white" }}>
			<View style={{ height: 35 }}></View>
			<ScrollView sc>
				<Navbar />
				<MainArea />
				<Footer />
			</ScrollView>
		</SafeAreaView>
	);
}

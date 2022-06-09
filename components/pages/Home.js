import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Footer from "../Footer";
import MainArea from "../MainArea";
import MiddleSection from "../MiddleSeaction";
import Navbar from "../Navbar";

export default function Home() {
	return (
		<SafeAreaView style={{ backgroundColor: "white", paddingBottom: 30 }}>
			<View style={{ height: 30 }}></View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Navbar />
				<MainArea />
				<MiddleSection />
				<Footer />
			</ScrollView>
		</SafeAreaView>
	);
}

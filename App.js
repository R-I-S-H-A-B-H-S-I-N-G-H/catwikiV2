import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
// import {  } from "react-native-web";
import MainArea from "./components/MainArea";
import Navbar from "./components/Navbar";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Navbar />
				<MainArea></MainArea>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
	},
});

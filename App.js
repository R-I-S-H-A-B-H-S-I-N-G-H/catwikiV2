import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Searchbar from "./components/Searchbar";
import MainArea from "./components/MainArea";
import CatInfo from "./components/pages/CatInfo";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		// <Home />
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Search" component={Search} />
				<Stack.Screen name="MainArea" component={MainArea} />
				<Stack.Screen name="CatInfo" component={CatInfo} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: "10%",
	},
});

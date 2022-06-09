import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Linking,
} from "react-native";
export default function MiddleSection() {
	return (
		<View>
			<View
				style={{
					paddingHorizontal: 20,
					paddingVertical: 50,
				}}
			>
				<Text
					style={{
						textAlign: "left",
						fontWeight: "bold",
						fontSize: 40,
						paddingBottom: 40,
					}}
				>
					Why should you have a cat?
				</Text>
				<Text style={{ fontSize: 18, textAlign: "auto", color: "#443226" }}>
					Having a cat around you can actually trigger the release of calming
					chemicals in your body which lowers you stress and anxiety levels
				</Text>
				<TouchableOpacity
					onPress={() => Linking.openURL("https://en.wikipedia.org/wiki/Cat")}
				>
					<Text style={{ fontSize: 20, fontWeight: "bold", color: "#7F736A" }}>
						Read More
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

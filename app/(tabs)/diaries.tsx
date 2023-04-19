import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function TabTwoScreen() {
  return (
    // <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log("sldkfjl");
        }}
        // style={{ borderRadius: 20 }}
      >
        <View style={styles.image}>
          <ImageBackground
            source={require("../../assets/images/1.png")}
            // style={{ width: 130, aspectRatio: 9 / 20, borderRadius: 20 }}
            imageStyle={{ width: 130, height: 300, borderRadius: 20 }}
          ></ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log("sldkfjl");
        }}
      >
        <ImageBackground
          source={require("../../assets/images/splash-15.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("sldkfjl");
        }}
      >
        <ImageBackground source={require("../../assets/images/2.png")} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("sldkfjl");
        }}
      >
        <ImageBackground source={require("../../assets/images/3.png")} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("sldkfjl");
        }}
      >
        <ImageBackground source={require("../../assets/images/4.png")} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("sldkfjl");
        }}
      >
        <ImageBackground source={require("../../assets/images/5.png")} style={styles.image} />
      </TouchableOpacity>
    </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // alignItems: "flex-start",
    justifyContent: "center",
  },
  image: {
    height: 300,
    // width: 100,
    aspectRatio: 9 / 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "grey",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1.8,
  },
  shadow: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "grey",
    shadowColor: "black",
    borderRadius: 20,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1.8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

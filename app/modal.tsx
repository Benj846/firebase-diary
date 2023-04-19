import { StatusBar } from "expo-status-bar";
import { View, Platform, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Text } from "../components/Themed";
import { signOutKakao, useGetKakaoProfile, signInWithKakao } from "../components/functions/kakaoFn";
import { useStore } from "../store";

export default function ModalScreen() {
  const profileUrl = useGetKakaoProfile();
  const setLogin = useStore((state) => state.setLogin);
  const setLogout = useStore((state) => state.setLogout);
  const loged = useStore((state) => state.loged);

  return (
    <View className='flex-1 items-center mt-2'>
      {/* <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' /> */}
      {/* <TouchableOpacity onPress={() => {}}></TouchableOpacity> */}
      {loged ? (
        <Image
          source={{
            uri: profileUrl?.thumbnailImageUrl,
          }}
          // style={{ width: 70, height: 70, marginBottom: 10 }}
          className='w-16 h-16 mb-3'
        />
      ) : (
        <FontAwesome5 name='user' size={50} color='black' style={{ marginBottom: 10 }} />
      )}
      <TouchableOpacity
        onPress={async () => {
          await signInWithKakao();
          setLogin();
        }}
      >
        <Image
          source={require("../assets/images/kakao_login_large_narrow.png")}
          style={{
            height: 40,
            aspectRatio: 26 / 6,
          }}
        />
      </TouchableOpacity>
      <Pressable
        onPress={async () => {
          await signOutKakao();
          setLogout();
        }}
      >
        <Text style={{ textDecorationLine: "underline" }}>logout</Text>
      </Pressable>
      <Text>{JSON.stringify(loged)}</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

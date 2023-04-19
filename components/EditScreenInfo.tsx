import React, { useState } from "react";
import { StyleSheet, Button, Alert } from "react-native";
// import firestore from "@react-native-firebase/firestore";

import Colors from "../constants/Colors";
import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default function EditScreenInfo({ path }: { path: string }) {
  const [profileData, setProfileData] = useState<any>();
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor='rgba(0,0,0,0.8)'
          darkColor='rgba(255,255,255,0.8)'
          // className='shadow-black'
        >
          Open up the code for this screen:
        </Text>
        {/* <Button
          title='Fetch'
          onPress={async () => {
            const data = await firestore().collection("DIARY").get();
            for (const user of data.docs) {
              console.log("User", user.data().thumbnail);
            }
          }}
        /> */}
        <Button
          title='debug'
          onPress={() => {
            console.log("debuging");
          }}
        />

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor='rgba(255,255,255,0.05)'
          lightColor='rgba(0,0,0,0.05)'
        >
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor='rgba(0,0,0,0.8)'
          darkColor='rgba(255,255,255,0.8)'
        >
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href='https://jineesoo.simple.ink?utm_source=%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8&utm_medium=%EC%9D%B8%EC%8A%A4%ED%83%80+%ED%94%84%EB%A1%9C%ED%95%84'
        >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    textShadowColor: "rgba(192, 219, 255, 0.48)",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});

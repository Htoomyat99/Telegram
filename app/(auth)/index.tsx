import { View, Text, SafeAreaView, Pressable, StyleSheet } from "react-native";
import React from "react";
import { horizontalScale, moderateScale, verticalScale } from "@/helper/metric";
import ChatIcon from "@/assets/icons/ChatIcon";
import { router } from "expo-router";
import { myColor } from "@/constants/Colors";

const LandingScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColor.white }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <ChatIcon />
        </View>

        <View
          style={{
            flex: 1,
            gap: verticalScale(30),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(50),
              color: "#000",
              fontWeight: "600",
            }}
          >
            Telegram
          </Text>

          <Text
            style={{
              fontSize: moderateScale(16),
              color: "#000",
              fontWeight: "400",
              // marginTop: verticalScale(25),
            }}
          >
            Easy Chat, Easy Lifes
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Pressable
            onPress={() => router.replace("/register")}
            style={[
              styles.btnContainer,
              {
                marginTop: verticalScale(30),
                backgroundColor: myColor.primary,
              },
            ]}
          >
            <Text style={styles.btnText}>SIGN UP</Text>
          </Pressable>

          <Pressable
            onPress={() => router.replace("/login")}
            style={[
              styles.btnContainer,
              { backgroundColor: myColor.grey, marginTop: verticalScale(10) },
            ]}
          >
            <Text style={styles.btnText}>LOGIN</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "red",
    marginHorizontal: horizontalScale(35),
    paddingVertical: verticalScale(18),
    alignItems: "center",
    borderRadius: moderateScale(15),
  },

  btnText: {
    color: myColor.white,
    fontSize: moderateScale(16),
    fontWeight: "400",
  },
});

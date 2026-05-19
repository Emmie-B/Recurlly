import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
const subscription = () => {
  return (
    <SafeAreaView className = " flex-1 items-center justify-center bg-background ">
      <Text>subscription</Text>
    </SafeAreaView>
  );
};

export default subscription;

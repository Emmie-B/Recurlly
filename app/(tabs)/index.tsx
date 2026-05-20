import { Link } from "expo-router";
import {styled }  from "nativewind";
import { Text, View } from "react-native";
import "../../global.css";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView  className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind! shgg
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 text-lg text-white p-3 rounded-2xl bg-primary"
      >
        Go to Onboarding
      </Link>

      <Link
        href="/(auth)/signin"
        className="mt-4 text-lg text-white p-3 rounded-2xl bg-primary"
      >
        Go to Signin
      </Link>

      <Link
        href="/(auth)/signup"
        className="mt-4 text-lg text-white p-3 rounded-2xl bg-primary"
      >
        Go to Signup
      </Link>

      <Link className="mt-4 text-lg text-white p-3 rounded-2xl bg-primary"
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "emmie" },
        }}
      >
          Sub details
      </Link>
    </SafeAreaView>
  );
}

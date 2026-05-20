import clsx from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { tabs } from "../constants/data";
import { colors, components } from "../constants/theme";

const tabBar = components.tabBar;

type TabIconProps = {
  focused: boolean;
  icon: any;
};

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} resizeMode="contain" className="tabs-glyph" />
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          // position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          left: tabBar.horizontalInset,
          right: tabBar.horizontalInset,

          width: "90%",
          alignSelf: "center",
          height: tabBar.height,
          borderRadius: tabBar.radius,
          elevation: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.15,
          shadowRadius: 10,
        },

        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,

            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}

      {/* Hidden route */}
      <Tabs.Screen
        name="subscriptions/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

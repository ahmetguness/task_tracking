import React, { Suspense, lazy, memo } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/redux/store";
import { UserType } from "../../types/GeneralTypes";

const screens: Record<
  Exclude<UserType, null>,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {
  parent: lazy(() => import("./ParentHomeScreen/ParentHomeScreen")),
  child: lazy(() => import("./ChildHomeScreen/ChildHomeScreen")),
  guest: lazy(() => import("./GuestHomeScreen/GuestHomeScreen")),
};

const Fallback = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Loading...</Text>
  </View>
);

const HomeScreen: React.FC = () => {
  const userType = useSelector((state: RootState) => state.user.userType);

  if (!userType || !(userType in screens)) {
    return null;
  }

  const SelectedScreen = screens[userType];

  return (
    <Suspense fallback={<Fallback />}>
      <SelectedScreen />
    </Suspense>
  );
};

export default memo(HomeScreen);

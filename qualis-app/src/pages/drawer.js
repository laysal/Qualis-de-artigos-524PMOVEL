import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Qualis from "../pages/Qualis";
import QualisFiltrado from "../pages/QualisFiltrado";
import Duvidas from "../pages/Duvidas";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const filteredProps = {
    ...props,
    state: {
      ...props.state,
      routeNames: props.state.routeNames.filter(
        (routeName) => routeName !== "QualisFiltrado"
      ),
      routes: props.state.routes.filter(
        (route) => route.name !== "QualisFiltrado"
      ),
    },
  };

  return (
    <DrawerContentScrollView {...filteredProps}>
      <DrawerItemList {...filteredProps} />
    </DrawerContentScrollView>
  );
}

export default () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "#2f2f2f",
      }}
      drawerContentOptions={{
        itemStyle: { backgroundColor: "#f9a826" },
        labelStyle: { color: "#2f2f2f" },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Qualis" component={Qualis} />
      <Drawer.Screen name="QualisFiltrado" component={QualisFiltrado} />
      <Drawer.Screen name="Duvidas" component={Duvidas} />
    </Drawer.Navigator>
  );
};

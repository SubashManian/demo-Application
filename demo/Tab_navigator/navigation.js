import React from "react";
import { createBottomTabNavigator, createDrawerNavigator ,createAppContainer, createStackNavigator} from "react-navigation";

//Tab Screens
import Eventlist from '../Tab_screens/Eventlist';
import Mapviewer from '../Tab_screens/Mapviewer';
import UserHome from '../Tab_screens/userimage';
import Eventadder from '../Tab_screens/Eventstack/Eventform';

// Drawer Screens
import DrawerContent from "../Drawer_screens/Sidebar"
import Info from '../Drawer_screens/Info';
import Last from '../Drawer_screens/Last_One';

//Home Screen Contains the DrawerNavigation Stack
const drawernavigator = createDrawerNavigator({
  Home: {
    screen: UserHome,
  },
  Info: {
    screen: Info,
  },
  Last: {
    screen: Last,
  }
}, {
  contentComponent: DrawerContent,
  drawerWidth: 250,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});
export const Drawer = createAppContainer(drawernavigator);

//Eventlist Screen Contains the StackNavigation for inside Buttons
const Applicationstack = createStackNavigator({
  Main: {
    screen: Eventlist,
    navigationOptions: {
      title: 'Upcoming Events',
    }
  },
  AddEvent: {
    screen: Eventadder,
    navigationOptions: {
      title: 'Add Events'
    }
  },
}, {
    initialRouteName: 'Main',
});

export const Eventmain = createAppContainer(Applicationstack);


//Bottom TabNavigator Function
const bottomtabnavigator = createBottomTabNavigator({
  Home: {
    screen: Drawer,
  },
  Events: {
    screen: Eventmain,
  },
  Location: {
    screen: Mapviewer,
  }
}, {
  //tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e58f19',
    activeBackgroundColor: "#a9c3d2",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});

export const Tab = createAppContainer(bottomtabnavigator);
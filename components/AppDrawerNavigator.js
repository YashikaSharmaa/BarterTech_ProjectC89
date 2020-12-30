import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyBarterScreen from '../screens/MyBarterScreen';
import NotificationScreen from '../screens/NotificationScreen'
import MyRequestScreen from '../screens/MyRequestScreen';
import MyExchangedItemsScreen from'../screens/MyExchangedItemsScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
      screen : AppTabNavigator,
      navigationOptions:{
        drawerIcon: <Icon name = 'home' type = 'fontawesome5' color = '#61F2C2' />,
        drawerLabel: 'Home'
      }
    },
    MyRequest:{
      screen: MyRequestScreen,
      navigationOptions:{
        drawerIcon: <Icon name = 'list' type = 'feather' color = '#61F2C2' />,
        drawerLabel:'My Item Request'
      }
    },
    MyBarters:{
      screen:MyBarterScreen,
      navigationOptions:{
        drawerIcon: <Icon name = 'users' type = 'feather' color = '#61F2C2' />,
        drawerLabel:'My Barters'
      }
    },
    MyExchangedItems:{
      screen:MyExchangedItemsScreen,
      navigationOptions:{
        drawerIcon: <Icon name = 'exchange' type = 'font-awesome' color = '#61F2C2'/>,
        drawerLabel:'Exchanged Items'
      }
    },
    Notifications:{
        screen:NotificationScreen,
        navigationOptions:{
          drawerIcon: <Icon name = 'bell' type = 'font-awesome' color = '#61F2C2'/>,
          drawerLabel: 'Your Notifications'
        }
    },
    Setting:{
      screen:SettingScreen,
      navigationOptions:{
        drawerIcon: <Icon name = 'settings' type = 'fontawesome5' color = '#61F2C2'/>,
        drawerLabel: 'Settings'
      }
    }
},
{
contentComponent:CustomSideBarMenu
},
{
initialRouteName : 'Home'
});
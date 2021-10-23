/**
 * @format
 */
import GroupScreen from '@presentation/views/group/GroupScreen';
import HomeScreen from '@presentation/views/home/HomeScreen';
import NotificationScreen from '@presentation/views/notification/NotificationScreen';
import ProfileScreen from '@presentation/views/profile/ProfileScreen';
import VideoScreen from '@presentation/views/video/VideoScreen';
import {Navigation} from 'react-native-navigation';

export default function RegisterScreen(){

 Navigation.registerComponent('HomeScreen',()=>HomeScreen);
 Navigation.registerComponent('VideoScreen',()=>VideoScreen);
 Navigation.registerComponent('GroupScreen',()=>GroupScreen);
 Navigation.registerComponent('NotificationScreen',()=>NotificationScreen);
 Navigation.registerComponent('ProfileScreen',()=>ProfileScreen);
 
 Navigation.events().registerAppLaunchedListener(()=>{
   Navigation.setRoot({
     root:{
       bottomTabs: {
         id: 'BOTTOM_TABS_LAYOUT',
         children: [
           {
             stack: {
               id: 'HOME_TAB',
               children: [
                 {
                   component: {
                     id: 'HOME_SCREEN',
                     name: 'HomeScreen',
                     options:{
                       topBar:{
                         title:{
                           text:"Home"
                         }
                       },
                       statusBar:{
                         style:"dark",
                         backgroundColor:'red',
                       }
                     }
                   }
                 }
               ],
               options: {
                 bottomTab: {
                   text:"Home",
                   // icon:"home",
                   iconWidth:10,
                   iconHeight:10,
                   selectedTextColor:"red"
                 }
               }
             }
           },
           {
             stack: {
               id: 'VIDEO_TAB',
               children: [
                 {
                   component: {
                     id: 'VIDEO_SCREEN',
                     name: 'VideoScreen',
                     options:{
                       topBar:{
                        //  visible:false,
                       }
                     }
                   }
                 }
               ],
               options: {
                 bottomTab: {
                   text:"Profile",
                   // icon:"home",
                   iconWidth:10,
                   iconHeight:10,
                   iconColor:"red",
                   selectedTextColor:"red",
                 }
               }
             }
           },
           {
            stack: {
              id: 'GROUP_TAB',
              children: [
                {
                  component: {
                    id: 'GROUP_SCREEN',
                    name: 'GroupScreen',
                    options:{
                      topBar:{
                        // visible:false,
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  text:"Group",
                  // icon:"home",
                  iconWidth:10,
                  iconHeight:10,
                  iconColor:"red",
                  selectedTextColor:"red",
                }
              }
            },
            
          },
          {
            stack: {
              id: 'NOTIFICATION_TAB',
              children: [
                {
                  component: {
                    id: 'NOTIFICATION_TAB_SCREEN',
                    name: 'NotificationScreen',
                    options:{
                      topBar:{
                        // visible:false,
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  text:"Notification",
                  // icon:"home",
                  iconWidth:10,
                  iconHeight:10,
                  iconColor:"red",
                  selectedTextColor:"red",
                }
              }
            },
          },
          {
            stack: {
              id: 'PROFILE_TAB',
              children: [
                {
                  component: {
                    id: 'PROFILE_TAB_SCREEN',
                    name: 'ProfileScreen',
                    options:{
                      topBar:{
                        // visible:false,
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  text:"Profile",
                  // icon:"home",
                  iconWidth:10,
                  iconHeight:10,
                  iconColor:"red",
                  selectedTextColor:"red",
                }
              }
            },
          },
         ]
       }
     }
   })
 })
}
 
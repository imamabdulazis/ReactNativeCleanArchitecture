import {getPlatformTabsIcon} from '@navigation/helpers/navigationIconHelpers';
import {SFSymbols} from '@assets/symbols/SFSymbols';
import {Navigation} from 'react-native-navigation';
import {Pages} from './constants/pages';
import {MainTab} from './constants/mainTab';

export function setStorybookRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.storybook.name,
        id: Pages.storybook.id,
        options: {
          topBar: {
            visible: true,
            title: {
              text: 'StoryBook',
            },
          },
        },
      },
    },
  });
}

export function setInitialRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.splash.name,
        id: Pages.splash.id,
        options: {
          topBar: {
            visible: true,
          },
        },
      },
    },
  });
}

export function setAuthenticationRoot() {
  Navigation.setRoot({
    root: {
      component: {
        id: Pages.login.name,
        name: Pages.login.name,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}

export function setTabsRoot(callback?: () => void) {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: Pages.tabs.id,
        children: [
          {
            stack: {
              id: MainTab.main.id,
              children: [
                {
                  component: {
                    id: Pages.home.id,
                    name: Pages.home.name,
                  },
                },
              ],
            },
          },
          {
            stack: {
              id: MainTab.marketPlace.id,
              children: [
                {
                  component: {
                    id: Pages.search.id,
                    name: Pages.search.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Marketlace',
                  ...getPlatformTabsIcon(
                    SFSymbols['suitcase.cart'],
                    SFSymbols['suitcase.cart.fill'],
                    'storefront',
                  ),
                },
              },
            },
          },
          {
            stack: {
              id: MainTab.profile.id,
              children: [
                {
                  component: {
                    id: Pages.search.id,
                    name: Pages.search.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Profile',
                  ...getPlatformTabsIcon(
                    SFSymbols['person.circle'],
                    SFSymbols['person.circle.fill'],
                    'person-pin',
                  ),
                },
              },
            },
          },
          {
            stack: {
              id: MainTab.notification.id,
              children: [
                {
                  component: {
                    id: Pages.notification.id,
                    name: Pages.notification.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  badge: '10',
                  animateBadge: true,
                  text: 'Notifications',
                  ...getPlatformTabsIcon(
                    SFSymbols.bell,
                    SFSymbols['bell.fill'],
                    'notifications',
                  ),
                },
              },
            },
          },
          {
            stack: {
              id: MainTab.menu.id,
              children: [
                {
                  component: {
                    id: Pages.menu.id,
                    name: Pages.menu.name,
                  },
                },
              ],
            },
          },
        ],
      },
    },
  }).then(callback);
}

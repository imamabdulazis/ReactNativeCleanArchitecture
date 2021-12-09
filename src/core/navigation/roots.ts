import {getPlatformTabsIcon} from '@core/navigation/helpers/navigationIconHelpers';
import {SFSymbols} from '@core/symbols/SFSymbols';
import {Navigation} from 'react-native-navigation';
import {Pages} from './pages';
import {Tabs} from './tabs';

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

export function setOnBoarding() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.onboarding.name,
        id: Pages.onboarding.id,
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
              id: Tabs.main.id,
              children: [
                {
                  component: {
                    id: Pages.main.id,
                    name: Pages.main.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'home',
                  ...getPlatformTabsIcon(
                    SFSymbols['house'],
                    SFSymbols['house.fill'],
                    'home',
                  ),
                },
              },
            },
          },

          {
            stack: {
              id: Tabs.search.id,
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
                  text: 'Search',
                  ...getPlatformTabsIcon(
                    SFSymbols['magnifyingglass.circle'],
                    SFSymbols['magnifyingglass.circle.fill'],
                    'search',
                  ),
                },
              },
            },
          },

          {
            stack: {
              id: Tabs.settings.id,
              children: [
                {
                  component: {
                    id: Pages.setting.id,
                    name: Pages.setting.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Setting',
                  ...getPlatformTabsIcon(
                    SFSymbols['gearshape'],
                    SFSymbols['gearshape.fill'],
                    'settings',
                  ),
                },
              },
            },
          },
        ],
      },
    },
  }).then(callback);
}

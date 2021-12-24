import {Navigation} from 'react-native-navigation';
import {Pages} from '../pages';

export function showStorybook() {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: Pages.storybook.name,
            id: Pages.storybook.id,
            options: {
              topBar: {
                title: {
                  text: 'Test',
                },
              },
            },
          },
        },
      ],
    },
  });
}

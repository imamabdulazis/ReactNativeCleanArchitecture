import {STORIES_CONFIGURED, STORY_MISSING} from '@storybook/core-events';
import addonAPI from '@storybook/addons';

addonAPI.register('my-organisation/first-page', storybookAPI => {
  storybookAPI.on(STORIES_CONFIGURED, (kind, story) => {
    if (storybookAPI.getUrlState().path === '/story/*') {
      storybookAPI.selectStory('Kind', 'Story');
    }
  });
  storybookAPI.on(STORY_MISSING, (kind, story) => {
    storybookAPI.selectStory('Kind', 'Story');
  });
});

import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';

import {CenterView} from '@components/general/CenterView';
import StoryCard from '@components/general/Card/StoryCard';

const CardStories = storiesOf('Card', module);

CardStories.addDecorator(getStory => (
  <CenterView>{getStory()}</CenterView>
)).addDecorator(withKnobs);

CardStories.add('Contain Button', () => <StoryCard />);

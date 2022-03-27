import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ContainButton from '@components/general/Button/ContainButton';
import SemiContainButton from '@components/general/Button/SemiContainButton';
import {CenterView} from '@components/general/CenterView';
import {withKnobs} from '@storybook/addon-knobs';
import SearchButton from '../../src/components/general/Button/SearchButton';
import ChatButton from '../../src/components/general/Button/ChatButton';

const ButtonStories = storiesOf('Button', module);

ButtonStories.addDecorator(getStory => (
  <CenterView>{getStory()}</CenterView>
)).addDecorator(withKnobs);

ButtonStories.add('Contain Button', () => (
  <ContainButton>Log in</ContainButton>
));
ButtonStories.add('Semi Contain Button', () => (
  <SemiContainButton>Log in</SemiContainButton>
));
ButtonStories.add('Search Button', () => <SearchButton />);
ButtonStories.add('Chat Button', () => <ChatButton />);

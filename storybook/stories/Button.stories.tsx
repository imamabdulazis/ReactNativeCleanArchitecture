import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ContainButton from '../components/Button/ContainButton';
import SemiContainButton from '../components/Button/SemiContainButton';
import {CenterView} from '../components/CenterView';
import {withKnobs} from '@storybook/addon-knobs';

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

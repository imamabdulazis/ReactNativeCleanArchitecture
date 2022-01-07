import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Button from '../components/Button/Button';
import {CenterView} from '../components/CenterView';
import {withKnobs} from '@storybook/addon-knobs';

const ButtonStories = storiesOf('Button', module);

ButtonStories.addDecorator(getStory => (
  <CenterView>{getStory()}</CenterView>
)).addDecorator(withKnobs);

ButtonStories.add('Sample Button', () => <Button>Sample Button</Button>);

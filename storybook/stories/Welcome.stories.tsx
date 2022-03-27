import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
import Welcome from '@components/general/Welcome';
import {linkTo} from '@storybook/addon-links';

const WelcomeStories = storiesOf('Welcome', module);

WelcomeStories.addDecorator(withKnobs);

WelcomeStories.add('Welcome', () => <Welcome showApp={linkTo('Welcome')} />);

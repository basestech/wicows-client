import React from 'react';
import '../index.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import AnimalHeader from '../components/AnimalHeader/AnimalHeader';
import AnnotationHeader from '../components/AnnotationHeader/AnnotationHeader';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Animal', module)
  .add('AnimalHeader', () => <AnimalHeader name = 'Sarıkız' number = '54'/>)
  .add('AnnotationHeader', () => <AnnotationHeader
      actionName = 'Not Ekle'
      animalName = 'Hayvan'
      animalNumber = '2000'
                                 />);

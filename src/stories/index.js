import React from 'react';
import '../index.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import AnimalHeader from '../components/AnimalHeader/AnimalHeader';
import AnnotationHeader from '../components/AnnotationHeader/AnnotationHeader';
import Annotation from '../components/Annotation/Annotation';
import Selector from '../components/AnnotationSourceSelector/Selector/Selector';
import AnnotationSourceSelector from '../components/AnnotationSourceSelector/AnnotationSourceSelector';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Animal', module)
  .add('AnimalHeader', () => <AnimalHeader name = 'Sarıkız' number = '54'/>)
  .add('AnnotationHeader', () => <AnnotationHeader
      actionType = 'insemination'
      animalName = 'Hayvan'
      animalNumber = '2000'
                                 />)
  .add('Annotation', ()=> <Annotation label="Test annotation"/>)
  .add('Select', ()=> <Selector options = {[{'value':'val', 'text': 'abc', 'changed':'onChanged'}]}/>)
  .add('AnnotationSourceSelector', ()=> <AnnotationSourceSelector options = {[{'value':'val', 'text': 'abc', 'changed':'onChanged'}]}/>);

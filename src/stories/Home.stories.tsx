import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Home from '../components/pages/Home';


export default {
  title: 'Home',
  component: Home,
} as ComponentMeta<typeof Home>;

export const Primary: ComponentStory<typeof Home> = () => <Home />;

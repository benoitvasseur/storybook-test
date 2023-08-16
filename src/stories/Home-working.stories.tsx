import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeWorking from '../components/pages/Home-working';


export default {
  title: 'HomeWorking',
  component: HomeWorking,
} as ComponentMeta<typeof HomeWorking>;

export const Primary: ComponentStory<typeof HomeWorking> = () => <HomeWorking />;

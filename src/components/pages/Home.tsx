import React from 'react';
import useMessages from '../../i18n/hooks/messagesHook';
import TestTransformer from '../TestTransformer';
import SampleService from '../../services/sample/SampleService';

export default function Home() {
  console.log('TestTransformer', TestTransformer.getTypeName(SampleService));
  const { messages } = useMessages();

  return <div id="home-layout">
    <h1>{messages['home.title']}</h1>
  </div>;
}

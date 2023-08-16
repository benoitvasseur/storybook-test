import React, { useState } from 'react';
import { getGlobalInstance } from 'plume-ts-di';
import useMessages from '../../i18n/hooks/messagesHook';
import SampleService from '../../services/sample/SampleService';
import useLoader from '../../lib/plume-http-react-hook-loader/promiseLoaderHook';
import { Sample } from '../../api/session/SampleApi';

export default function Home() {
  const { messages } = useMessages();

  return <div id="home-layout">
    <h1>{messages['home.title']}</h1>
  </div>;
}

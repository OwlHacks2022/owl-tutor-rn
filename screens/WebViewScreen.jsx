import React from 'react';
import { WebView } from 'react-native-webview';
import LoadingIndicator from '../components/common/LoadingIndicator';

const WebViewScreen = () => {
  const FAQUri =
    'https://www.notion.so/Retrieving-your-canvas-access-token-4e2816689c354d7fba50e57fb88b8a82';
  return (
    <WebView
      source={{
        uri: FAQUri,
      }}
      startInLoadingState={true}
      renderLoading={() => <LoadingIndicator />}
    />
  );
};

export default WebViewScreen;

import React from 'react';
import {TranslationProvider} from '@contexts/translationContext/TranslationContext';

/**
 * HOC
 * register all provider here
 */

export function WrappedComponent(Component: any) {
  return function inject(props: any) {
    const EnhancedComponent = () => (
      <TranslationProvider>
        <Component {...props} />
      </TranslationProvider>
    );
    EnhancedComponent.options = Component.options;
    return <EnhancedComponent />;
  };
}

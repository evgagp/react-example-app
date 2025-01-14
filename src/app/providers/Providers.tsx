import { ReactNode } from 'react';
import { ThemeProvider } from '@/entities/theme';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';
import { Fallback } from '@/shared/ui';

interface IProviders {
  readonly children?: ReactNode;
}

export const Providers: React.FC<IProviders> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <ReduxProvider store={store}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
};

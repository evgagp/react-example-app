import { ReactNode } from 'react';
import { ThemeProvider } from '@/entities/theme';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider as ReduxProvider } from 'react-redux';
import { Fallback } from '@/shared/ui';
import store from '../store';

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

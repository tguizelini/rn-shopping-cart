import Routes from './src/core/routes';
import AppProviders from './src/core/context/AppProviders';

export default function App() {
  return (
    <AppProviders>
      <Routes />
    </AppProviders>
  );
}
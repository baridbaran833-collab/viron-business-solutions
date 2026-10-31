import VironHome from './pages/VironHome';
import Storefront from './pages/Storefront';
import Dashboard from './pages/Dashboard';

export default function App() {
  const redirected = new URLSearchParams(window.location.search).get('route');
  const path = (redirected || window.location.pathname).replace(/\/$/, '');
  if (redirected) window.history.replaceState(null, '', path);
  if (path.endsWith('/projects/paper-and-co/admin-demo')) return <Dashboard />;
  if (path.endsWith('/projects/paper-and-co')) return <Storefront />;
  return <VironHome />;
}

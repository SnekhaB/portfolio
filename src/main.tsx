import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { getRouter } from './router';
import './styles.css';

const router = getRouter();

function App() {
  useEffect(() => {
    // Handle GitHub Pages 404 redirect after component mounts
    const redirectPath = sessionStorage.getItem('redirect_to');
    if (redirectPath) {
      sessionStorage.removeItem('redirect_to');
      router.navigate({ to: redirectPath as any });
    }
  }, []);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

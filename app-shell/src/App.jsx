import React from 'react';

const LoginScreen = React.lazy(() => import('login_mfe/LoginScreen'));

const App = () => {
  return (
    <div>
      <main>
        <React.Suspense fallback={<p>Carregando login...</p>}>
          <LoginScreen />
        </React.Suspense>
      </main>
    </div>
  );
};

export default App;

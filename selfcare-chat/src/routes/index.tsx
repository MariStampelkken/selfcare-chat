import { Routes, Route } from 'react-router-dom';
import Home from './home/Home.tsx';
import Chat from './chat/Chat.tsx';

const RouterConfig = () => (
  <div data-testid="auth-wrapper">
    <div style={{ minHeight: '100vh' }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route
          path="*"
          element={<h1 style={{ textAlign: 'center' }}>404 Page Not Found</h1>}
        />
      </Routes>
    </div>
  </div>
);

export default RouterConfig;

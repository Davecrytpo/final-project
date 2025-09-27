import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { ComposeProvider } from './contexts/ComposeContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import AuthPage from './pages/Auth/AuthPage';
import PageSkeleton from './components/PageSkeleton';

const Home = lazy(() => import('./pages/Home'));
const Explore = lazy(() => import('./pages/Explore'));
const Notifications = lazy(() => import('./pages/Notifications'));
const Messages = lazy(() => import('./pages/Messages'));
const Bookmarks = lazy(() => import('./pages/Bookmarks'));
const Communities = lazy(() => import('./pages/Communities'));
const Grok = lazy(() => import('./pages/Grok'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <ComposeProvider>
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Home />} />
                <Route path="explore" element={<Explore />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="messages" element={<Messages />} />
                <Route path="bookmarks" element={<Bookmarks />} />
                <Route path="communities" element={<Communities />} />
                <Route path="grok" element={<Grok />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </ComposeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

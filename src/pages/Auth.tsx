import React, { useState } from 'react';
import { Twitter } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/shared/Button';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, signup, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      await signup(name, email, password);
    } else {
      await login(email, password);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-black p-8 rounded-2xl border border-gray-800">
        <div className="flex flex-col items-center">
          <Twitter className="h-12 w-12 text-white mb-4" />
          <h2 className="text-2xl font-bold text-white">
            {isSignUp ? 'Create your account' : 'Sign in to Twitter'}
          </h2>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignUp && (
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                required={isSignUp}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-800 placeholder-gray-500 text-white rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Name"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none relative block w-full px-3 py-3 border border-gray-800 placeholder-gray-500 text-white rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Email address"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none relative block w-full px-3 py-3 border border-gray-800 placeholder-gray-500 text-white rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Password"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : isSignUp ? 'Sign up' : 'Sign in'}
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 hover:underline"
          >
            {isSignUp
              ? 'Already have an account? Sign in'
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}
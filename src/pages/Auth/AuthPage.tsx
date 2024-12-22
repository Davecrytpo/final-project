import React, { useState } from 'react';
import { Twitter } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side - Hero */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-500 items-center justify-center">
        <Twitter className="h-96 w-96 text-white" />
      </div>

      {/* Right Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8">
        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="flex justify-center lg:justify-start">
            <Twitter className="h-12 w-12 text-white" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              {isSignUp ? 'Join Twitter today' : 'Sign in to Twitter'}
            </h1>
            <p className="text-gray-500">
              {isSignUp 
                ? 'Create your account to start sharing your thoughts'
                : 'Welcome back! Please enter your details'}
            </p>
          </div>

          {isSignUp ? <SignupForm /> : <LoginForm />}

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
    </div>
  );
}
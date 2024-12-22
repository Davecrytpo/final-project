import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface SettingsSection {
  id: string;
  title: string;
  description: string;
  items: {
    id: string;
    label: string;
    description?: string;
    action: () => void;
  }[];
}

export default function Settings() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const sections: SettingsSection[] = [
    {
      id: 'account',
      title: 'Your Account',
      description: 'See information about your account, download an archive of your data, or learn about your account deactivation options',
      items: [
        {
          id: 'info',
          label: 'Account information',
          description: 'See your account information like your phone number and email address',
          action: () => navigate('/settings/account/info')
        },
        {
          id: 'password',
          label: 'Change your password',
          action: () => navigate('/settings/account/password')
        },
        {
          id: 'download',
          label: 'Download an archive of your data',
          action: () => navigate('/settings/account/download')
        }
      ]
    },
    {
      id: 'security',
      title: 'Security and Account Access',
      description: "Manage your account security and keep track of your account usage including apps that you have connected to your account",
      items: [
        {
          id: '2fa',
          label: 'Two-factor authentication',
          action: () => navigate('/settings/security/2fa')
        },
        {
          id: 'connected-apps',
          label: 'Connected apps',
          action: () => navigate('/settings/security/apps')
        }
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy and Safety',
      description: 'Manage what information you see and share on Twitter',
      items: [
        {
          id: 'audience',
          label: 'Audience and tagging',
          action: () => navigate('/settings/privacy/audience')
        },
        {
          id: 'content',
          label: 'Your posts',
          action: () => navigate('/settings/privacy/content')
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10 px-4 py-2 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-900 rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4">
        {/* User Info */}
        <div className="mb-8 p-4 border border-gray-800 rounded-lg">
          <div className="flex items-center space-x-4">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="font-bold">{user?.name}</h2>
              <p className="text-gray-500">@{user?.username}</p>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="border border-gray-800 rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-gray-500 text-sm">{section.description}</p>
              </div>
              <div className="divide-y divide-gray-800">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full p-4 text-left hover:bg-gray-900 transition-colors flex justify-between items-center"
                  >
                    <div>
                      <div className="font-medium">{item.label}</div>
                      {item.description && (
                        <div className="text-sm text-gray-500">{item.description}</div>
                      )}
                    </div>
                    <ArrowLeft className="h-4 w-4 rotate-180 text-gray-500" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="w-full mt-8 p-4 text-red-500 border border-gray-800 rounded-lg hover:bg-red-500/10 transition-colors"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
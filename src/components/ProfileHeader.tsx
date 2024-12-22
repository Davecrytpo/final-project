
import { ArrowLeft, Calendar, MapPin, Link as LinkIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProfileHeaderProps {
  profile: {
    name: string;
    username: string;
    avatar: string;
    banner: string;
    bio: string;
    location: string;
    website: string;
    joinDate: string;
    following: number;
    followers: number;
    verified: boolean;
    postsCount: number;
  };
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10 px-4 py-2 flex items-center space-x-4">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 hover:bg-gray-900 rounded-full"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="font-bold text-xl">{profile.name}</h1>
          <div className="text-gray-500 text-sm">{profile.postsCount.toLocaleString()} posts</div>
        </div>
      </div>

      <div className="relative">
        <div className="h-48 bg-gray-800">
          <img
            src={profile.banner}
            alt="Profile banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-32 h-32 rounded-full border-4 border-black -mt-16"
            />
            <button className="px-4 py-2 border border-gray-800 rounded-full font-bold hover:bg-gray-900">
              Edit profile
            </button>
          </div>

          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">{profile.name}</h2>
              {profile.verified && (
                <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                  />
                </svg>
              )}
            </div>
            <div className="text-gray-500">@{profile.username}</div>
            <p className="mt-4">{profile.bio}</p>
            
            <div className="mt-4 space-y-2 text-gray-500">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <LinkIcon className="h-5 w-5" />
                <a href={profile.website} className="text-blue-500 hover:underline">
                  {profile.website}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{profile.joinDate}</span>
              </div>
            </div>

            <div className="mt-4 flex space-x-4">
              <button className="hover:underline">
                <span className="font-bold">{profile.following.toLocaleString()}</span>{' '}
                <span className="text-gray-500">Following</span>
              </button>
              <button className="hover:underline">
                <span className="font-bold">{profile.followers.toLocaleString()}</span>{' '}
                <span className="text-gray-500">Followers</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
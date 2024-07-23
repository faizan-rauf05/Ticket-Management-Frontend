import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const GoogleRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleGoogleRedirect = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await axios.post('/api/auth/google/callback', { code });
          const { token, user } = response.data;

          // Store token and user data in local storage or context
          localStorage.setItem('token', token);

          // Redirect based on user role
          switch (user.role) {
            case 'admin':
              navigate('/admin');
              break;
            case 'user':
              navigate('/user');
              break;
            case 'company':
              navigate('/company');
              break;
            default:
              navigate('/');
              break;
          }

          toast.success('Successfully signed in');
        } catch (error) {
          toast.error('Error during Google sign-in');
          console.error(error);
        }
      } else {
        toast.error('No authorization code found');
      }
    };

    handleGoogleRedirect();
  }, [navigate]);

  return <div>Processing...</div>;
};

export default GoogleRedirectHandler;

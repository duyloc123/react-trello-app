import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function AuthRoute({ children }) {
  const [me, setMe] = React.useState(null);
  const access_token = window.sessionStorage.getItem('access_token');
  const navigate = useNavigate();

  React.useEffect(() => {
    if(!access_token) return;

    async function getMe() {
      try {
        const response = await fetch('https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/auth', {
          method: 'POST',
          headers: {
            'x-auth-token': access_token
          }
        })
        const data = await response.json();
        if(data.isSuccess) {
          setMe(data.user)
          return;
        }
        window.sessionStorage.removeItem('access_token');
        navigate('/login');
      } catch(err) {
        console.log('eerro: ', err)
      }
    }
    getMe();
  }, [access_token])

  if(!access_token) {
    return <Navigate to="/login" />
  }

  if(!me) {
    return <div>Please system verify...</div>
  }
  
  return (
    <>{children}</>
  )
}

export default AuthRoute
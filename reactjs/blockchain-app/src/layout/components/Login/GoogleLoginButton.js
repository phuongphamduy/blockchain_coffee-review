import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle response từ Google login thành công ở đây
  };

  return (
    <GoogleLogin
      clientId="602406268696-a76t9qt2ad8hbt0dnci89enht3k9mjum.apps.googleusercontent.com"
      buttonText="Đăng nhập bằng Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;

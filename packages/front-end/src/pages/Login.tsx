import React, { FC } from 'react';

interface LoginProps {
  username: string;
  password: string;
}

const Login: FC<LoginProps> = ({username, password}) => {
  return (
      <form>
        <label htmlFor ="email">Email Address</label>
        <input type="email" placeholder="Email" />
        <label htmlFor="password"> Password</label>
        <input type="password" placeholder="Password"/>
      </form>
  );
};

export default Login;
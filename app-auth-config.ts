const config: any = {
  signUp: {
    signUpVerifyAccount: false,
  },
  signIn: {
    signInTokenReturnMethod: {
      token: false,
      cookie: true,
    },
    signInOtp: {
      enabled: false,
      signInotpMethod: {
        email: true,
        sms: false,
      },
    },
  },
};

export default config;

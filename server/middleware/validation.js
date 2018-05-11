const validations = () => ({
    userValidation: {
      email: 'required|email',
      password: 'required|min:6|confirmed',
      password_confirmation: 'required',
      fullname: 'required|min:3|string',
      username: 'required|min:3|string'
    },
    signinRules: {
      username: 'required|email',
      password: 'required'
    }
  });
  
  export default validations;

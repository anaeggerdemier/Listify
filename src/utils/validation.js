const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };
  
  const validatePassword = (password) => {
    
    return password.length >= 6;
  };
  
  export { validateEmail, validatePassword };
  
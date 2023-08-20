const jobSignupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users', {

        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  const jobSignupForm = document.querySelector('#signup-form');
  if (jobSignupForm) {
    jobSignupForm.addEventListener('submit', jobSignupFormHandler);
  } 

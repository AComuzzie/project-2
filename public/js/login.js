const jobLoginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-input-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.'); // displays the alert when unsuccessful.
      }
    }
  };
  
  
  const jobLoginForm = document.querySelector('.job-login-form');
  if (jobLoginForm) {
    jobLoginForm.addEventListener('submit', jobLoginFormHandler);
  }
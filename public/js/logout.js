const jobLogout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.'); // validation message
  }
};

// Code Snippets for adding av event listener to the logout button
const jobLogoutButton = document.querySelector('#job-logout');
if (jobLogoutButton) {
  jobLogoutButton.addEventListener('click', jobLogout);
}


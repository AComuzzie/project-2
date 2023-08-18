const newJobPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-new-job-post').value.trim();
    const content = document.querySelector('#content-new-job-post').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); 
      } else {
        alert('Failed to create a new post.'); // Validation message
      }
    }
  };
  
  // Event listeners
  const newJobPostForm = document.querySelector('.new-job-post-form');
  if (newJobPostForm) {
    newJobPostForm.addEventListener('submit', newJobPostFormHandler);
  }
// Codes to get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  
  // Codes to Update the post
  const updateJobPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-update-job-post").value.trim();
    const content = document
      .querySelector("#content-update-job-post")
      .value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard"); 
      } else {
        alert("Failed to update a post."); // Displays the alert when unsuccessful.
      }
    }
  };
  
  // Codes to delete the post
  const deleteJobPostFormHandler = async (event) => {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/dashboard"); 
    } else {
      alert("Failed to delete a post."); // Displays the alert when unsuccessful.
    }
  };
  
  // Event listeners
  const updateJobPostButton = document.querySelector("#update-job-post");
  
  if (updateJobPostButton) {
    updateJobPostButton.addEventListener("click", updateJobPostFormHandler);
  }
  
  const deleteJobPostButton = document.querySelector("#delete-job-post");
  
  if (deleteJobPostButton) {
    deleteJobPostButton.addEventListener("click", deleteJobPostFormHandler);
  }
const deleteJobPost = async (post_id) => {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.reload(); // When successful, reload the page
    } else {
      alert("Failed to delete the post."); // When unsuccessful, show alert
    }
  };
  
  const deleteJobPostHandler = (event) => {
    if (event.target.matches(".delete-job-post")) {
      const post_id = event.target.getAttribute("data-job-post-id");
      deleteJobPost(post_id);
    }
  };
  
  document.addEventListener("click", deleteJobPostHandler);
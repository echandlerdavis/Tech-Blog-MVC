const blogHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const blog_post = document.querySelector('#blog-body').value.trim();
    const blogId = document.querySelector('#submit').getAttribute('data-id');
  
    if (blogId && title && blog_post) {
      const response = await fetch(`/api/posts/${blogId}`, {
        method: 'PUT',
        body: JSON.stringify({ 
          title, blog_post}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Your blog post has been updated.')
        document.location.replace('/profile');
      } else {
        alert('Failed to update blog post');
      }
    }
  };
    
  document
    .querySelector('#submit')
    .addEventListener('click', blogHandler);


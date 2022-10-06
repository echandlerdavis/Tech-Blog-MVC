const recipeHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const blog_post = document.querySelector('#blog-post').value.trim();
  
    if (title && blog_post) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, blog_post }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create new post');
      }
    }
  };
  
  document
    .querySelector('.box')
    .addEventListener('submit', recipeHandler);
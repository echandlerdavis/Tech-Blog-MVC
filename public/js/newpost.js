const recipeHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-title').value.trim();
    const post = document.querySelector('#blog-post').value.trim();
  
    if (name && post) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ name, post }),
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
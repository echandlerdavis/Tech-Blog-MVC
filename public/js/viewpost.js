const blogHandler = async (event) => {
    event.preventDefault();

  const comment = document.querySelector('#').value.trim();
  const blogId = document.querySelector('input[name="blog-id"]').value;

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment, blogId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create new blog post');
    }
  }
};


  
    
  document
    .querySelector('#submit')
    .addEventListener('click', blogHandler);

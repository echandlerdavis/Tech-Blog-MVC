const blogHandler = async (event) => {
    event.preventDefault();

  // const comment = document.querySelector('#').value.trim();
  // const blogId = event.target.getAttribute('data-id');

  // if (comment) {
  //   const response = await fetch(`/api/comments`, {
  //     method: 'POST',
  //     body: JSON.stringify({ comment, blogId }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (response.ok) {
  //     document.location.replace('/profile');
  //   } else {
  //     alert('Failed to create new blog post');
  //   }
  // }
};


  
    
  document
    .querySelector('#submit')
    .addEventListener('click', blogHandler);

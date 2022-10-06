const cardHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    const blogEditId = event.target.getAttribute('data-edit-id');
    const cardBlogId = event.target.getAttribute('data-card-id');

    if (id) {

        const response = await fetch(`api/posts/${id}`, {
            method: 'DELETE',
        });
    
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete post');
        }
    } else if (blogEditId) {

        document.location.replace(`/update-post/${blogEditId}`);
    } else {

        document.location.replace(`/view-post/${cardBlogId}`);
    }

};

document
  .querySelector('.blog-list')
  .addEventListener('click', cardHandler);
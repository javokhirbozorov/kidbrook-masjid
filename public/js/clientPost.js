const newPostBtn = document.querySelector('#newPostBtn');
const postFormContainer = document.querySelector('#postFormContainer');

const postForm = `
<form action="/posts" method="post" id="postForm">
<input class="form-control" type="text" placeholder="Title" name="title" id="postTitle" />
<input class="form-control" type="text" placeholder="Img url" name="imgUrl" id="postImgUrl" />
<textarea class="form-control" type="text" placeholder="text here" name="description" id="postText" ></textarea>

<button type="submit" class="btn btn-lg btn-success">Post</button>
</form>
`;

newPostBtn.addEventListener('click', (event) => {
  event.preventDefault();
  postFormContainer.innerHTML = postForm;
});

// dom selecting the post card
const postCards = document.querySelectorAll('.post-card');
// const postCard = document.querySelector('.post-card');
// DOM delete btn on post cards
// const postDeleteBtn = document.querySelector('.delete-btn');

[...postCards].map((postCard) => (
  postCard.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log(postCard);
    // Deletes the card
    if (event.target.innerHTML === 'Delete') {
      const { id } = event.target;

      const response = await fetch('/posts', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      const postCardById = document.getElementById(`${id}`);
      if (response.status === 200) {
        postCardById.remove();
      } else {
        console.log(postCardById);
      }
    }

    if (event.target.innerHTML === 'Edit') {
      const postCardImg = postCard.childNodes[0];
      const postCardTitle = postCard.childNodes[1].childNodes[0];
      const postCardText = postCard.childNodes[1].childNodes[1];
      console.log(postCardImg, postCardTitle, postCardText);

      const postCardBody = postCard.childNodes[1];

      const postEditForm = `
      <form action="/posts" method="PUT" id="${postCard.id}">
      <input class="form-control" type="text" placeholder="Img url" name="imgUrl" value="${postCardImg.getAttribute('src')}" id="postImgUrl-${postCard.id}" />
      <input class="form-control" type="text" placeholder="Title" name="title" value="${postCardTitle.innerText}" id="postTitle-${postCard.id}" />
      <textarea class="form-control" type="text" placeholder="text-here" name="description" value="${postCardText.innerText}" id="postText-${postCard.id}">${postCardText.innerText}</textarea>
      
      <button type="submit" class="btn btn-lg btn-success">Save</button>
      </form>
      `;

      postCardBody.innerHTML = postEditForm;
    }

    // save changes

    const imgUrlEdited = document.querySelector(`#postImgUrl-${postCard.id}`);
    const titleEdited = document.querySelector(`#postTitle-${postCard.id}`);
    const textEdited = document.querySelector(`#postText-${postCard.id}`);

    if (event.target.innerHTML === 'Save') {
      const postUpdate = await fetch('/posts', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id: postCard.getAttribute('id'), imgUrl: imgUrlEdited.value, title: titleEdited.value, description: textEdited.value,
        }),
      });

      const data = await postUpdate.json();

      console.log(data);

      const updatedCard = `
      <img src=${data.imgUrl} className="card-img-top" alt="..." />
      <div className="card-body post-card-body">
        <h5 className="card-title">${data.title}</h5>
        <p className="card-text">${data.description}</p>
        <button type="button" id=${data.id} className="btn btn-primary read-btn">Read More</button>
        <button type="button" id=${data.id} className="btn btn-warning edit-btn">Edit</button>
        <button type="button" id=${data.id} className="btn btn-danger delete-btn">Delete</button>
      </div>`;

      postCard.innerHTML = updatedCard;
      // if (postUpdate.status === 200) {
      //   const updatedInfo = await fetch('/posts/edited', {
      //     method: 'POST',
      //     headers: {
      //       'Content-type': 'application/json',
      //     },
      //     body: JSON.stringify({ id: postCard.id }),
      //   });

      //   console.log(await updatedInfo.json());
      // }
    }
  })

));

const React = require('react');
const Layout = require('./Layout');

function Posts({ allPosts }) {
  return (
    <Layout title="Posts">
      <h1>Posts</h1>

      <div className="container">
        <button className="btn btn-primary" type="button" id="newPostBtn">New Post</button>

        <div className="container" id="postFormContainer" />
      </div>
      <div className="row container postCard">
        {
      allPosts.map((post) => (
        <div key={post.id} id={post.id} className="card post-card col col-4">
          <img src={post.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>
            <button type="button" id={post.id} className="btn btn-primary read-btn">Read More</button>
            <button type="button" id={post.id} className="btn btn-warning edit-btn">Edit</button>
            <button type="button" id={post.id} className="btn btn-danger delete-btn">Delete</button>
          </div>
        </div>
      ))
    }
      </div>

    </Layout>
  );
}

module.exports = Posts;

import React from "react";


const SingleRoutine = ({routines, setRoutines, routines}) => {
    const handleDelete = (id) => {deleteRoutines(id, {setRoutines, routines})}
    return (
      <div className="single-routine">
        <h2 className="title">{post.title}</h2>
        <p>{post.description}</p>
        <b>Price: {post.price}</b>
        <h3>Seller: {post.author.username}</h3>
        <b>Location: {post.location ? post.location : "[On Request]"}</b>
        {post.isAuthor ? (
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        ) : checkUserLoggedIn() ? (
        <Link to="/message-form" state={{ id: post._id }}>
        <button type="button">Send Message</button>
        </Link>) :
        <div></div>
        }
      </div>
    );
  };
  export default SinglePost;
  
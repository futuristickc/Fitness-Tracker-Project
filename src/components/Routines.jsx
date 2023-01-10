// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import { getPosts } from "../api/auth";
// // import "./Posts.css";

// const Routines = ({ routines }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const filteredRoutines = routines.filter((routine) => routine.title.includes(searchTerm));
//   const routinesToDisplay = searchTerm.length ? filteredRoutines : routines;
//   let routinesToMap = routinesToDisplay.map((routines, index) => {
//     return (
//       <div className="routines" key={index}>
//         <h2>{routines.title}</h2>
//         <h3>Username : {routines.username}</h3>
//         <p>Description : {routines.description}</p>
//         <p>Duration : {post.price}</p>
//         <p>Count : {routines.count}</p>
//         <button
//           onClick={() => { handleDelete(routines._id)
//           }}
//         >
//           See Routines!
//         </button>
//       </div>
//     );
//   });
//   return (
//     <>
//       <h3>Search Posts</h3>
//       <div className="posts">
//         <input
//           type="text"
//           placeholder="search"
//           value={searchTerm}
//           onChange={(event) => {
//             setSearchTerm(event.target.value);
//             console.log(searchTerm);
//           }}
//         />
//       </div>
//       <h1>Posts</h1>
//       <div>{postsToMap}</div>
//     </>
//   );
// };
// export default Posts;



// As any user on the Routines tab, I want to:

// see a list of all public routines showing:
// The routine name, goal, and creator's username
// A list of activities for the routine, including their name, description, and duration and/or count
// be able to click on a username (shown as a Routine creator), and see a list of all of their public routines
// be able to click on an activity name (shown in a list of activities on a routine), and see a list of all public routines which feature it

// As a registered user on the My Routines tab, I want to:

// be shown a form to create a new routine

// the form should have text fields for name and goal
// for each routine which is owned by me I should

// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine

// expect the dropdown to add an activity to one of my routines not to include any activity which is already a part of the routine

// const AllPosts = (props) => {
//     const { posts, setPosts } = props;
//     const [searchTerm, setSearchTerm] = useState('');
//     const postMatches = (post, text) => {
//       // return true if any of the fields you want to check against include the text
//       // strings have an .includes() method
//       return Object.values(post).some(value => typeof value === 'string' && value.includes(text));
//     }
//     const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
//     const postsToDisplay = searchTerm.length ? filteredPosts : posts;
//     return (
//       <>
//         <input className="searchBar" type="text" placeholder="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
//         {postsToDisplay.map((post) => {
//           return <SinglePost post={post} posts={posts} setPosts={setPosts} isAuthor={post.isAuthor} key={post._id}/>;
//         })}
//       </>
//     );
//   };
//   export default AllPosts;
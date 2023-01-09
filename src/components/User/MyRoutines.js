import React, { useEffect, useState } from "react";
import { fetchRoutines } from "../api/index.js";



const MyRoutines = () => {
    const [routines, setPosts] = useState([]);
    useEffect(() => {
        const getRoutines = async () => {
            const response = await fetchRoutines();
            const { data: { routines }, } = await response;
            setPosts(routines);
            console.log(response)
            console.log("routines", routines)
        }
        getRoutines();
    }, []);
    let hasRoutine = false;
    routine.forEach((routine) => {
        if (routines.creatorId) {
            hasRoutine = true;
        }
    })
    return (
        <>
            {hasRoutine ? (
                routine.map((routine) => {
                    if (routines.creatorId) {
                        return <SinglePost post={post} posts={posts} setPosts={setPosts} isAuthor={post.isAuthor} key={post._id} />;
                    }
                })
            ) : (
                <p>You haven't posted anything.</p>
            )}

        </>
    );
};
export default MyPosts; 
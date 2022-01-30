import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import SingleProject from "../SingleProject";
import { useContext } from "react";
import { userContext } from "../../App";




const ProjectContainer = () => {

  const {  setData, posts,  setPosts } = useContext(userContext);
  const [isFetching, setIsFetching] = useState(false);
  let limit = 6;
  const [page, setPage] = useState(1);

  const fetchData = async () => {

    setIsFetching(true);
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page }`
    );
    const newPost = res.data;
    setData((prev) => [...prev, ...newPost]);
    
    setIsFetching(false);
    setPosts((prev) => [...prev, ...newPost]);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Item" >
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchData}
        hasMore={true}
       
      >
        <div >
          {
            posts.length > 0 ? (
              posts?.map((post, i) => (
                <div key={i}>
                  <SingleProject post={post} />
                </div>
              ))
            ) : !isFetching && (page!=1 && (<h1>No Result Found</h1>))
          }

          {isFetching && <h1>Loading........</h1>}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ProjectContainer;

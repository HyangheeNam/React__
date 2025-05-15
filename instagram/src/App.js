import React, { useState } from "react";
import InstagramForm from "./components/instagram.jsx";
import "./App.css";

function App() {

  const [like, setLike] = useState(0); 
  
  const [comments, setComments] = useState([]);
  
  const addComment = (comment) => {
    setComments(prevComments => [comment, ...prevComments]); // 댓글을 맨 앞에 추가
};

  return (
    <>
      <div>
        <InstagramForm 
          like={like} 
          setLike={setLike}
          comments={comments} // 댓글 배열 전달
          addComment={addComment} // 댓글 추가 함수 전달
          commentCount={comments.length} // 댓글 수 전달
        >
        </InstagramForm>
      </div>
    </>
  );
}

export default App;

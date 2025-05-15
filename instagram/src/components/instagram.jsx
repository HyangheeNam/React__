import React, { useState } from "react";

function InstagramForm({ like, setLike, comments, addComment, commentCount }){
    
    const [isHovered, setIsHovered] = useState(false); // hover 상태 관리

    const [showComments, setShowComments] = useState(false); // 댓글창 표시 상태
    
    const [newComment, setNewComment] = useState(""); // 새 댓글 상태

    const toggleComments = () => {
        setShowComments(prev => !prev); // 댓글창 토글
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            addComment(newComment); // 댓글 추가
            setNewComment(""); // 입력 필드 초기화
        }
    };

    const images = ["/flower.jpg", "/flower1.jpg", "/flower2.jpg"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => { // 조건 ? 출력값  true : false
        setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };



    return (
        <div className='background-form'>
            <div className='instagram-form'>
                <div className="main-font">
                    <p className="allura-regular">Vlog</p>
                </div>

                <div className="main-container">
                    
                
    
                <div className="image-container">
                    <div className='image-show' style={{ 
                        display: 'flex', 
                        transition: 'transform 0.5s ease', 
                        transform: `translateX(-${currentImageIndex * 100}%)` 
                    }}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Slide ${index}`} className='main-img' />
                        ))}
                    </div>
                    
                    <div className="image-navigation">
                        <button onClick={prevImage}>❮</button>
                        <button onClick={nextImage}>❯</button>
                    </div>
                </div>
    
                {/* 여기서부터 아래 요소들 위치 조정 */}
                <div className="vlog">
                    <span>「10/09」🌸🌺🌷</span>
                </div>
    
                <div className='icon-container'>
                    <div className='like-icon'>
                        <span 
                            className='like-count' 
                            onClick={() => { setLike(like + 1); }} 
                            onMouseEnter={() => setIsHovered(true)} 
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img 
                                src={isHovered ? "/heart_red.png" : "/heart.png"} 
                                alt="Heart"
                                className='heart-img'
                            />
                        </span> 
                        {like}
                    </div>
    
                    <div className='comments-icon'>
                        <span className='comments-count' onClick={toggleComments} >
                            <img src="/comment.png" alt="comment" className='comment-img'/>
                            {commentCount}
                        </span>
                    </div>
                </div>
    
                <div className="show-comment-window">
                    {showComments && (
                        <div className='comments-section bubble'>
                            <h3>답글</h3>
                            <input 
                                className="comment-input"
                                type="text" 
                                placeholder="댓글 달기..." 
                                value={newComment} 
                                onChange={(e) => setNewComment(e.target.value)} 
                            />
                            <button onClick={handleAddComment}>게시</button>
                            <ul className="comment-list">
                                {comments.map((comment, index) => (
                                    <li className="comment-save" key={index}>
                                        {comment}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
    
}

export default InstagramForm;
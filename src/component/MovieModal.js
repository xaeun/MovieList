const MovieModal = ({id, photo, title, release, age, time, grade, director, actor, synopsis, closeModal}) => {
    const handleClose = () => {
        closeModal(id);
    }
    return(
        <div className="movieModal">           
            <div className="modalphoto"><img src={photo} /></div>
            <div>
                <p>🎬<span>제목</span> : {title}</p>
                <p>📅<span>개봉연도</span> : {release}</p>
                <p>👓<span>관람등급</span> : {age}</p>
                <p>⏰<span>상영시간</span> : {time}</p>
                <p>⭐<span>평점</span> : {grade}</p>
                <p>🗣<span>감독</span> : {director}</p>
                <p>👩🏻‍🤝‍🧑🏻<span>배우</span> : {actor}</p>
                <p>📝<span>줄거리</span> : {synopsis}</p>
                <p>
                    <button onClick={handleClose}>✖</button>
                </p>
            </div>
        </div>
    );
}
export default MovieModal;
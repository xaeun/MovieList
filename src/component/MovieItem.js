import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieItem = ({ id, photo, title, release, age, time, grade, director, actor, synopsis }) => {
    
    const [isModal, setIsModal] = useState(false);

    const showModal = () => {
        setIsModal(true);
    }

    const closeModal = (t) =>{
        setIsModal(false);
    }
    
    return(
        <li className="movieItem">
            <div><img src={photo} /></div>
            <div>
                <p>제목: {title}</p>
                <p>관람등급: {age}</p>
                <p>상영시간: {time} │ 평점: {grade}</p>
               
            </div>
            <div className="over">
                <button onClick={showModal}>SHOW MORE</button>
            </div>
            <div className={isModal ? 'modal show' : 'modal'}>
                <MovieModal id={id} photo={photo} title={title} release={release} age={age} time={time} grade={grade} director={director} actor={actor} synopsis={synopsis} closeModal={closeModal} />
            </div>
        </li>
    );
}

export default MovieItem;
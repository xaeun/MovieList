import { useState } from "react";
import MovieItem from "./MovieItem";

const MovieList = ({dummy, year}) => {

    
    const [search, setSearch] = useState('');
    const changeSearch = (e) => {
        setSearch(e.target.value)
    }

    const filterSearch = () => {
        const filterDummy = year === 'all' ? dummy : dummy.filter((it) => (it.release === year))
        return search === '' 
        ? filterDummy
        : filterDummy.filter((it) => 
        it.title.toLowerCase().includes(search.toLowerCase())
        ) 
    }

    // const filterResult = () => {
    //     return search === '' 
    //     ? dummy
    //     : dummy.filter((it) => 
    //     it.title.toLowerCase().includes(search.toLowerCase())
    //     ) 
    // }

    // const filterDummy = year === 'all' ? dummy : dummy.filter((it) => (it.release === year))
    
    return(
        <div className="movieList">
        <div className="search"> 
        <p>제목 검색</p>
        <input 
            type='text'
            placeholder='영화제목을 입력하세요'
            value={search}
            onChange={changeSearch}
        />
        <button>검색하기</button>
        </div>
            {/* <p className="all">총 {filterSearch.length}개의 영화리스트가 있습니다</p> */}
            <ul className="list">
            {filterSearch().map((it)=>(
                <MovieItem key={it.id} {...it}/>
            ))}
            </ul>
         
        </div> 
    );
}

export default MovieList;
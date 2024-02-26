import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

const MovieHeader = ({ setYear }) => {

  const [selectedYear, setSelectedYear] = useState('all');

  const clickBtn = (years) => {
    setSelectedYear(years);
    setYear(years);
  }


  return (
    <div className="movieHeader">
      <h2>MOVIE LIST</h2>
      <div className='check'>
        <p className="title">개봉연도 선택</p>
        <p>
          <button
            onClick={() => clickBtn('all')}
            className={setSelectedYear == 'all' ? 'active' : ''}
          >
            전체
          </button>
        </p>
        <p>
          <button
            onClick={() => clickBtn(2023)}
            className={setSelectedYear == 2023 ? 'active' : ''}
          >
            2023
          </button>
        </p>
        <p>
          <button
            onClick={() => clickBtn(2022)}
            className={setSelectedYear == 2022 ? 'active' : ''}
          >
            2022
          </button>
        </p>
        <p>
          <button
            onClick={() => clickBtn(2021)}
            className={setSelectedYear == 2021 ? 'active' : ''}
          >
            2021
          </button>
        </p>
        <p>
          <button
            onClick={() => clickBtn(2020)}
            className={setSelectedYear == 2020 ? 'active' : ''}
          >
            2020
          </button>
        </p>
      </div>
    </div>
  )
}

export default MovieHeader;
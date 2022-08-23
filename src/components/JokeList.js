import { useSelector } from 'react-redux';
import Spinner from './Spinner';

function JokeList() {
  const jokes = useSelector((state) => state.jokes);
  const loading = useSelector((state) => state.loading);

  return (
    <>
      {loading ? <Spinner /> : ''}

      <div className="card w-80">
        <ul className="list-group list-group-flush">
          {jokes.length > 0 &&
            jokes.map((joke, index) => (
              <li
                key={joke.id}
                className={index % 2 === 0 ? 'list-group-item' : 'list-group-item list-group-item-secondary'}
              >
                {index + 1 + '. ' + joke.joke}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default JokeList;

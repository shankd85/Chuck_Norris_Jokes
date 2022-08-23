import UserInput from './components/UserInput';
import JokeList from './components/JokeList';
//import ReactHooks from './components/ReactHooks';

const App = () => {
  return (
    <>
      <h2 className="text-center mt-3">Chuck Norris Jokes Displayer</h2>
      <div className="container">
        <UserInput />
        <JokeList />
        {/* <ReactHooks /> */}
      </div>
    </>
  );
};

export default App;

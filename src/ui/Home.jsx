import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser.jsx";
import Button from "./Button.jsx";

function Home() {
  const {userName} = useSelector(state => state.user)
  return (
    <div className="flex flex-col items-center contents-center">
      <h1 className=" font-bold text-2xl text-stone-400/70 text-center my-6
        md:text-4xl">
        <span className='mb-5 inline-block'>The best pizza.</span>
        <br />
        <span className="text-yellow-600 inline-block mt-5 mb-6">Straight out of the oven, straight to you.</span>
      </h1>
      {userName === ''
        ?  <CreateUser/>
        : <Button to='/menu' type='secondary'>Go to Menu({userName})</Button>}

    </div>
  );
}

export default Home;

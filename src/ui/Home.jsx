import {useSelector} from "react-redux";

function Home() {
  console.log(useSelector(state => state.user))
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
    </div>
  );
}

export default Home;

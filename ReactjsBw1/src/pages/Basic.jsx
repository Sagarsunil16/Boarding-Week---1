import Counter from "../components/counter";
import Inputting from "../components/Inputting";
import Users from "../components/Users";
import { Link } from "react-router-dom";
const Basic = () => {
  return (
    <div>
      <div>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <div>
        <Counter />
        <Inputting />
        <Users />
      </div>
    </div>
  );
};

export default Basic;

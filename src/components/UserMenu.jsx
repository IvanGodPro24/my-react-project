import { HiUser } from "react-icons/hi";
import { BsAirplaneFill } from "react-icons/bs";

const UserMenu = ({ name }) => {
  return (
    <div>
      <p>
        <HiUser /> {name}
        <BsAirplaneFill size="230" color="green"/>
      </p>
    </div>
  );
};

export default UserMenu
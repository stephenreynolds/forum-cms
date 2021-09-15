import Card from "../../layout/card";
import Input from "../../layout/input";
import { Link } from "react-router-dom";

const NewPostFormPreview = () => {
  return (
    <Card>
      <Link to="/new"><Input type="text" placeholder="Create post" /></Link>
    </Card>
  );
};

export default NewPostFormPreview;
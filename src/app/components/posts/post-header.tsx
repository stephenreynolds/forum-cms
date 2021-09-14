import { Link } from "react-router-dom";
import moment from "moment";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

const CreatedTooltip = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

type PostHeaderProps = {
  author: string;
  created: Date;
  title: string;
};

const PostHeader = ({ author, created, title }: PostHeaderProps) => {
  return (
    <div>
      <div>
        Posted by <Link to={"/user/" + author}>{author}</Link> <CreatedTooltip
        data-tip={moment(created).format("llll")} data-effect="solid"
        data-delay-show="1000">{moment(created).fromNow()}</CreatedTooltip>
        <ReactTooltip />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default PostHeader;
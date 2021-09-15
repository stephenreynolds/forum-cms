import { Link } from "react-router-dom";
import moment from "moment";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

const UserLink = styled(Link)`
  color: initial;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CreatedTooltip = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

type PostHeaderProps = {
  author: string;
  created: Date;
};

const PostHeader = ({ author, created }: PostHeaderProps) => {
  return (
    <div>
      <div>
        Posted by <UserLink to={"/user/" + author}>{author}</UserLink> <CreatedTooltip
        data-tip={moment(created).format("llll")} data-effect="solid"
        data-delay-show="1000">{moment(created).fromNow()}</CreatedTooltip>
        <ReactTooltip />
      </div>
    </div>
  );
};

export default PostHeader;
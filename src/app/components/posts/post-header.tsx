import { Link } from "react-router-dom";
import moment from "moment";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

const UserLink = styled(Link)`
  text-decoration: none;
  color: #b0b0b0;
  
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

const HeaderDiv = styled.div`
  font-size: 0.75em;
`;

type PostHeaderProps = {
  author: string;
  created: Date;
};

const PostHeader = ({ author, created }: PostHeaderProps) => {
  return (
    <HeaderDiv>
      <div>
        Posted by <UserLink to={"/user/" + author}>{author}</UserLink> <CreatedTooltip
        data-tip={moment(created).format("llll")} data-effect="solid"
        data-delay-show="1000">{moment(created).fromNow()}</CreatedTooltip>
        <ReactTooltip />
      </div>
    </HeaderDiv>
  );
};

export default PostHeader;
import Card from "../../layout/card";
import Container from "../../layout/container";
import Input from "../../layout/input";
import TextArea from "../../layout/textarea";
import styled from "styled-components";
import { RoundedButton } from "../../layout/button";
import { useState } from "react";
import { useHistory } from "react-router";
import { PostCreateModel } from "../../../common/post";
import { bindActionCreators } from "redux";
import { createPost } from "../../../redux/actions/postActions";
import { connect } from "react-redux";

const StyledForm = styled.form`
  ${Input}, ${TextArea} {
    margin: 0.5em auto;
  }
`;

const SubmitSection = styled.div`
  border-top: 1px solid #444;
  padding-top: 0.5em;
  display: flex;
  flex-direction: row-reverse;

  ${RoundedButton} {
    margin-left: 0.5em;
  }
`;

interface Props {
  actions: {
    createPost: (post: PostCreateModel) => any;
  };
}

const NewPostForm = ({ actions }: Props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const history = useHistory();

  const submit = () => {
    const post: PostCreateModel = {
      author: "testuser",
      authorId: "e0ad975f-71ec-44d7-ab6c-81452c293189",
      content: text,
      title: title
    };

    actions.createPost(post);
    history.push("/");
  };

  const cancel = () => {
    history.push("/");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const formValid = () => {
    return title.length > 0 && text.length > 0;
  };

  return (
    <Container maxWidth="640px">
      <Card>
        <StyledForm>
          <Input type="text" name="title" placeholder="Title" value={title} onChange={handleTitleChange} />
          <TextArea name="text" placeholder="Text (optional)" value={text} onChange={handleTextChange} />

          <SubmitSection>
            <RoundedButton type="button" onClick={submit} disabled={!formValid()}
                           backgroundColor="#ccc" textColor="#333" hoverBackgroundColor="#bbb">
              Submit post
            </RoundedButton>
            <RoundedButton type="button" onClick={cancel}>Cancel</RoundedButton>
          </SubmitSection>
        </StyledForm>
      </Card>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      createPost: bindActionCreators(createPost, dispatch)
    }
  };
};

export default connect(null, mapDispatchToProps)(NewPostForm);

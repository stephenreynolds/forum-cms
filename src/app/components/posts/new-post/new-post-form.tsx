import Card from "../../layout/card";
import Container from "../../layout/container";
import Input from "../../layout/input";
import TextArea from "../../layout/textarea";
import styled from "styled-components";
import { RoundedButton } from "../../layout/button";
import { useState } from "react";
import { useHistory } from "react-router";
import { createPost } from "../../../common/postManager";
import { PostCreateModel } from "../../../common/post";

const StyledForm = styled.form`
  ${Input}, ${TextArea} {
    margin: 0.5em auto;
  }
`;

const SubmitSection = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 0.5em;
  display: flex;
  flex-direction: row-reverse;

  ${RoundedButton} {
    margin-left: 0.5em;
  }
`;

const NewPostForm = () => {
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

    createPost(post);
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
            <RoundedButton type="submit" onClick={submit} disabled={!formValid()}>Submit post</RoundedButton>
            <RoundedButton onClick={cancel}>Cancel</RoundedButton>
          </SubmitSection>
        </StyledForm>
      </Card>
    </Container>
  );
};

export default NewPostForm;

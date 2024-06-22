import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { add } from "../redux/todoSlice";

const Containter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;

const Title = styled.div`
  margin-bottom: 48px;
  color: #254336;
  font-size: 36px;
  font-weight: bold;
`;

const InputWrapper = styled.form``;

const InputText = styled.input`
  margin-right: 12px;
  padding: 6px 18px;
  border: 1px #dad3be solid;
  border-radius: 24px;
  font-size: 18px;
  color: #254336;
`;

const SubmitBtn = styled.input`
  padding: 4px 12px;
  border: 1px #dad3be solid;
  border-radius: 24px;
  font-size: 18px;
  background-color: #b7b597;
  color: #254336;
`;

export default function InputTodo() {
  const dispatch = useDispatch();

  const [todoList, setTodoList] = useState({
    id: 0,
    text: "",
  });

  function handleText(e) {
    setTodoList({ text: e.target.value });
  }

  function onReset() {
    setTodoList({ text: "" });
  }

  return (
    <Containter>
      <Title>To Do List</Title>
      <InputWrapper
        onSubmit={(e) => {
          e.preventDefault();
          if (todoList.text !== "") {
            dispatch(add(todoList.text));
          } else alert("할 일을 입력해주세요.");
          onReset();
        }}
      >
        <InputText
          type="text"
          value={todoList.text}
          onChange={handleText}
        ></InputText>
        <SubmitBtn type="submit" value="+"></SubmitBtn>
      </InputWrapper>
    </Containter>
  );
}

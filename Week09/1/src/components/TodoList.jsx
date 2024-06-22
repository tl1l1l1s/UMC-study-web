import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";

const List = styled.ul`
  width: 100%;
  font-size: 20px;
  color: #254336;
  background-color: #dad3be;
`;

const Container = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DoneCheckbox = styled.input`
  border-radius: 12px;
`;

const ToDo = styled.div`
  margin: 0 12px 0 12px;
`;

const DeleteBtn = styled.input`
  border: 1px #dad3be solid;
  border-radius: 24px;
  font-weight: bold;
`;

export default function TodoList() {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(todoList[0]);
  const todoListView = todoList.map((todo, idx) => (
    <Container key={todoList[idx].id}>
      <DoneCheckbox
        type="checkbox"
        onChange={() => {
          dispatch(complete(todoList[idx].id));
        }}
      />
      <ToDo>
        {todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}
      </ToDo>
      <DeleteBtn
        type="button"
        onClick={() => dispatch(remove(todoList[idx].id))}
        value="X"
      ></DeleteBtn>
    </Container>
  ));

  return (
    <>
      <List>{todoListView}</List>
    </>
  );
}

import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 67%;
  text-align: center;
  padding: 90px 0px;
  background-color: #21234b;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;

  :last-child {
    margin-top: 30px;
  }
`;

const Input = styled.input`
  width: 50%;
  padding: 12px 20px;
  border-radius: 24px;
  margin: 10px 0;
  font-size: 14px;
`;

const ErrorMessage = styled.div`
  width: 33%;
  text-align: left;
  color: red;
  font-size: 12px;
`;

const LoginPage = () => {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [idMsg, setIdMsg] = useState();
  const [pwMsg, setPwMsg] = useState();

  const Submit = styled(Input)`
    border: none;
    background-color: ${id && pw ? "#fecd28" : "white"};
    cursor: ${id && pw ? "pointer" : "not-allowed"};
  `;

  const handleChange = (event) => {
    switch (event.target.name) {
      case "id":
        setId(null);
        if (event.target.value.length == 0) {
          setIdMsg("아이디를 입력해주세요!");
        } else {
          setId(event.target.value);
        }

        break;

      case "password":
        setPw(null);
        if (event.target.value.length < 4) {
          setPwMsg("비밀번호는 최소 4자리 이상이어야 합니다.");
        } else if (event.target.value.length > 13) {
          setPwMsg("비밀번호는 최대 12자리까지 가능합니다.");
        } else if (
          !event.target.value.match(
            "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{4,12}$"
          )
        ) {
          setPwMsg(
            "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다."
          );
        } else {
          setPw(event.target.value);
        }

        break;
    }
  };

  const handleSubmit = () => {
    console.log("Id : " + id);
    console.log("Pw : " + pw);
  };

  return (
    <Container>
      <Title>로그인 페이지</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          name="id"
          type="text"
          placeholder="아이디"
          onChange={handleChange}
        />
        {!id && <ErrorMessage>{idMsg}</ErrorMessage>}
        <Input
          name="password"
          type="text"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        {!pw && <ErrorMessage>{pwMsg}</ErrorMessage>}
        <Submit
          name="submit"
          type="submit"
          onSubmit={handleSubmit}
          value="로그인"
        />
      </Form>
    </Container>
  );
};

export default LoginPage;

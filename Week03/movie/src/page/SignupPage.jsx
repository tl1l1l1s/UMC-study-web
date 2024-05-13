import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const Container = styled.div`
    height: 62vh;
    text-align: center;
    padding: 100px 40px;
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
    width: 30%;
    padding: 10px 18px;
    border-radius: 24px;
    margin: 8px 0;
  `;

  const Help = styled.div`
    margin-top: 50px;
    text-align: center;
    color: white;

    a {
      margin-left: 5%;
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
  `;

  return (
    <>
      <Container>
        <Title>회원가입 페이지</Title>
        <Form>
          <Input type="text" placeholder="이름을 입력해주세요" />
          <Input type="text" placeholder="이메일을 입력해주세요" />
          <Input type="text" placeholder="나이를 입력해주세요" />
          <Input type="text" placeholder="비밀번호를 입력해주세요" />
          <Input type="text" placeholder="비밀번호 확인" />
          <Input type="submit" value="제출하기" />
        </Form>
        <Help>
          이미 아이디가 있으신가요?
          <Link to="/">로그인 페이지로 이동하기</Link>
        </Help>
      </Container>
    </>
  );
};

export default SignupPage;

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: #ffcb05;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h1>나만의 포켓몬 도감</h1>
      <Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Button>
    </Wrapper>
  );
}
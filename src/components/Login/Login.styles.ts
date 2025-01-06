import { Form } from "antd";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 20px;
  width: 400px;
`;

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomPasswordInput = styled.div`
  position: relative;
  width: 100%;

  .form-control {
    padding-right: 40px;
    border-radius: 5px;
    font-size: 14px;
  }

  .password-toggle {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 18px;
    cursor: pointer;
    user-select: none;
  }
`;

export { LoginContainer, StyledForm, CustomPasswordInput };

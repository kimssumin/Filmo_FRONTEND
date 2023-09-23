import { ReactComponent as BackArrow } from '../assets/image/icon/backArrow.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAccountDispatch, useAccountState } from '../context/AccountContext.tsx';
import axios from '../api/apiController.tsx';
import Input from '../components/account/Input.tsx';

function LoginPasswordInputPage() {
  const { email, password } = useAccountState();
  const dispatch = useAccountDispatch();
  const navigate = useNavigate();

  const onInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    dispatch({ type: 'SET_PASSWORD', password: newPassword });
  };

  const onClickNext = async () => {
    const { status } = await axios.post('/users/login', { userId: email, password });

    if (status === 200) {
      navigate('/home');
    }
  };

  const onClickChangePassword = () => {
    fetch('http://localhost:8080/users/email-send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/password/check');
      });
  };

  const onClickGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header>
        <BackButton onClick={onClickGoBack}>
          <BackArrow />
        </BackButton>
      </Header>
      <Head1>비밀번호를 입력해주세요.</Head1>
      <Input type="password" value={password} onChange={onInputPassword} />
      <Body2>영문, 숫자, 특수문자를 포함해 8자 이상</Body2>
      <SettingButton onClick={onClickChangePassword}>
        <Body3>비밀번호 재설정하기</Body3>
      </SettingButton>
      <NextButton onClick={onClickNext} disabled={!!!password}>
        다음
      </NextButton>
    </>
  );
}

const Head1 = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.24px;
  color: #ffffff;
  font-family: 'Pretendard';
  margin-bottom: 17px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11.5px 0;
  height: 44px;
  margin-bottom: 24px;
`;

const BackButton = styled.button`
  position: absolute;
  left: 16px;
`;

const Body2 = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;
  color: var(--disabled);
  font-family: 'Pretendard';
  margin-bottom: 16px;
`;

interface ButtonProps {
  disabled: boolean;
}

const NextButton = styled.button<ButtonProps>`
  position: fixed;
  left: 0px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  color: ${({ disabled }: ButtonProps) => (disabled ? 'var(--disabled)' : '#ffffff')};
  height: 52px;
  width: 100%;
  background-color: ${({ disabled }: ButtonProps) =>
    disabled ? 'var(--background-bright)' : 'var(--main)'};
  margin-top: auto;
`;

const SettingButton = styled.button`
  border-radius: 8px;
  background-color: var(--background-bright);
  height: 32px;
  width: 121px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body3 = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
  font-family: 'Pretendard';
  color: var(--text-default);
`;

export default LoginPasswordInputPage;

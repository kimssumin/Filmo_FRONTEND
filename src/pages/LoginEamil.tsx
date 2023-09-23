import { ReactComponent as BackArrow } from '../assets/image/icon/backArrow.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { isValidateEmail } from '../utils/vaildation.ts';
import axios from '../api/apiController.tsx';
import { useAccountDispatch, useAccountState } from '../context/AccountContext.tsx';
import Head1 from '../components/common/texts/Head1.ts';

type AccountStatus = 'WAITED' | 'INACTIVE' | 'ACTIVE' | 'WITHDRAWL';

type AccountResponse = {
  meesage: string;
  data: {
    check: AccountStatus;
  };
};

function LoginEamilInputPage() {
  const { email, isEmailValid } = useAccountState();
  const dispatch = useAccountDispatch();

  const navigate = useNavigate();

  const onClickNext = async () => {
    const {
      data: {
        data: { check },
      },
    } = await axios.post<AccountResponse>('/users/check-user', {
      userId: email,
    });

    switch (check) {
      case 'WAITED':
        navigate('/register/password');
        break;
      case 'INACTIVE':
        break;
      case 'ACTIVE':
        navigate('/login/password');
        break;
      case 'WITHDRAWL':
        break;
    }
  };

  const onInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    dispatch({ type: 'SET_EMAIL', email: newEmail, isEmailValid: isValidateEmail(newEmail) });
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
      <Head1 color="var(--dark-grey-800)" marginBottom="17px">
        이메일을 입력해주세요
      </Head1>
      <Input placeholder="abc@naver.com" value={email} onChange={onInputEmail} />
      <NextButton onClick={onClickNext} disabled={!isEmailValid}>
        다음
      </NextButton>
    </>
  );
}

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

const Input = styled.input`
  display: flex;
  border: none;
  width: 100%;
  border-radius: 8px;
  padding: 12px 16px;
  background-color: var(--background-bright);
  height: 56px;
  color: var(--text-default);

  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.014px;
    color: var(--disabled);
  }
  &:focus {
    outline: none;
  }
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

export default LoginEamilInputPage;

import { ReactComponent as BackArrow } from '../assets/image/icon/backArrow.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { isValidateEmail } from '../utils/vaildation.ts';
import axios from '../api/apiController.tsx';
import { useAccountDispatch, useAccountState } from '../context/AccountContext.tsx';
import Input from '../components/account/Input.tsx';
import Head1 from '../components/common/texts/Head1.ts';
import NextButton from '../components/account/NextButton.tsx';

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

export default LoginEamilInputPage;

import { styled } from 'styled-components';
import { ReactComponent as DownArrowSvg } from '../../assets/image/icon/downArrow.svg';
import ReviewItem from './ReviewItem.tsx';

function ReviewList() {
  return (
    <ReviewListWrapper>
      <ListHeader>
        <ListTitle>영화 리뷰 💬</ListTitle>
        <SortByWrapper>
          <SortBy>인기순</SortBy>
          <DownArrowSvg width={'16px'} height={'16px'} />
        </SortByWrapper>
      </ListHeader>
      <List>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </List>
    </ReviewListWrapper>
  );
}

const ReviewListWrapper = styled.div`
  display: flex;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  padding: 16px 20px;

  border-radius: 32px 32px 0px 0px;
  background: var(--dark-grey-50, #202027);
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  align-items: center;
`;

const ListTitle = styled.div`
  color: var(--dark-grey-800, #e4e4e5);

  /* Head3 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.09px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const SortByWrapper = styled.div`
  display: flex;
`;

const SortBy = styled.div`
  color: var(--dark-grey-500, #7e7e87);
  /* Body3 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
`;

export default ReviewList;

import WriterInfo from './WriterInfo';
import CategoryChips from './CategoryChips';
import { styled } from 'styled-components';
import RateInfo from './RateInfo';
import MovieInfo from './MovieInfo';

interface MovieInfoType {
  poster: string;
  title: string;
  content: string;
}
interface Props {
  category: string[];
  rate: number;
  title: string;
  content: string;
  movieInfo: MovieInfoType;
}

const dummyData: Props = {
  category: ['멜로/로맨스', 'SF', ' 드라마'],
  rate: 4,
  title: '블랙위도우의 첫등장!: 영화 - 아이언맨 2',
  content: `천재적인 두뇌와 재능으로 세계 최강의 무기업체를 이끄는 CEO이자, 타고난 매력으로 셀러브리티 못지않은 화려한 삶을 살아가던 억만장자 토니 스타크. 
아프가니스탄에서 자신이 개발한 신무기 발표를 성공리에 마치고 돌아가던 그는 게릴라군의 갑작스런 공격에 의해 가슴에 치명적인 부상을 입고 게릴라군에게 납치된다. 가까스로 목숨을 건진 그에게 게릴라군은 자신들을 위한 강력한 무기를 개발하라며 그를 위협한다. 그러나 그는 게릴라군을 위한 무기 대신, 탈출을 위한 무기가 장착된 철갑수트를 몰래 만드는 데 성공하고, 그의 첫 수트인 ‘Mark1’를 입고 탈출에 성공한다. 미국으로 돌아온 토니 스타크는 자신이 만든 무기가 많은 사람들의 생명을 위협하고, 세상을 엄청난 위험에 몰아넣고 있다는 사실을 깨닫고 무기사업에서 손 뗄 것을 선언한다. 그리고, Mark1을 토대로 최강의 하이테크 수트를 개발하는 데 자신의 천재적인 재능과 노력을 쏟아 붓기 시작한다. 탈출하는 당시 부서져버린 Mark1를 바탕으로 보다 업그레이드 된 수트 Mark2를 만들어낸 토니 스타크. 거기에 만족하지 않고, 숱한 시행착오와 실패 끝에 자신의 모든 능력과 현실에서 가능한 최강의 최첨단 과학 기술이 집적된 하이테크 수트 Mark3를 마침내 완성, 최강의 슈퍼히어로 ‘아이언맨’으로 거듭난다. 토니 스타크가 탈출하는 과정을 통해 Mark1의 가공할 위력을 확인한 게릴라 군은 토니 스타크가 미처 회수하지 못한 Mark1의 잔해와 설계도를 찾아낸다. Mark1을 재조립하여 그들의 목적을 이루기 위한 거대하고 강력한 철갑수트를 제작하려는 음모를 꾸미는 게릴라군. 토니 스타크가 갖고 있던 에너지원을 훔쳐 ‘아이언맨’을 능가하는 거대하고 강력한 ‘아이언 몽거’를 완성한 그들은 세계 평화를 위협하고, 토니 스타크는 그들의 음모과 배후세력이 누구인지를 알게 되는데...!`,
  movieInfo: {
    title: '아이언맨',
    content: `세계 최강의 무기업체를 이끄는 CEO이자, 타고난 매력으로 셀러브리티 못지않은 화려한 삶을 살아가던 토니 스타크. 기자회견을 통해 자신이 아이언맨이라고 정체를 밝힌 이후, ...더보기`,
    poster: 'src/assets/image/poster/poster_md.svg',
  },
};

const ReviewContents = () => {
  return (
    <ContentsWrapper>
      <WriterInfo />
      <CategoryChips categoryList={dummyData.category} />
      <RateInfo rate={dummyData.rate} />
      <div className="title">{dummyData.title}</div>
      <MovieInfo info={dummyData.movieInfo} />
      <div className="contents">{dummyData.content}</div>
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: clip;

  .title {
    color: var(--text-emphasize);
    font-size: 24px;
    font-weight: 600;
    line-height: 130%; /* 31.2px */
    letter-spacing: -0.24px;
  }

  .contents {
    color: var(--text-emphasize);
    font-size: 16px;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    letter-spacing: -0.016px;
  }
`;
export default ReviewContents;

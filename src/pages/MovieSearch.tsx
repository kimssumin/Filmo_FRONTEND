import { styled } from 'styled-components';
import MovieInfo from '../components/movieSearch/MovieInfo.tsx';
import RatingBar from '../components/movieSearch/RatingBar.tsx';
import ReviewButton from '../components/movieSearch/ReviewButton.tsx';
import ReviewList from '../components/movieSearch/ReviewList.tsx';
import TopBar from '../components/movieSearch/TopBar.tsx';
import { Movie } from '../components/types/movie.ts';

const movie: Movie = {
  docId: '',
  title: '아이언맨 2',
  titleEng: '',
  titleOrg: '',
  nation: '미국',
  company: '',
  prodYear: '2010',
  plot: `세계 최강의 무기업체를 이끄는 CEO이자, 타고난 매력으로 셀러브리티 못지않은 화려한 삶을
        살아가던 토니 스타크. 기자회견을 통해 자신이 아이언맨이라고 정체를 밝힌 이후세계 최강의
        무기업체를 이끄는 CEO이자, 타고난 매력으로 셀러브리티 못지않은 화려한 삶을 살아가던 토니
        스타크. 기자회견을 통해 자신이 아이언맨이라고 정체를 밝힌 이후, 정부로부터 아이언맨
        수트를 국가에 귀속시키라는 압박을 받지만 이를 거부한 채 더욱 화려하고 주목 받는 나날을
        보낸다. 스타크 인더스트리의 운영권까지 수석 비서였던 ‘페퍼포츠’에게 일임하고
        슈퍼히어로로서의 인기를 만끽하며 지내던 토니 스타크. 하지만 그 시각, 아이언맨의 수트
        기술을 ‘스타크’ 가문에 빼앗긴 후 쓸쓸히 돌아가신 아버지의 복수를 다짐해 온 ‘위플래시’는
        수트의 원천 기술 개발에 성공, 치명적인 무기를 들고 직접 토니 스타크를 찾아 나선다. F-1
        모나코 그랑프리에서 직접 경주용 차에 올라선 토니 스타크 앞에 나타난 위플래시!
        무차별적으로 전기 채찍을 휘두르는 그의 공격에 무방비 상태였던 토니 스타크는 생명의
        위협을 느끼지만, 새롭게 개발한 휴대용 수트 Mark5를 이용하여 간신히 위험에서 벗어난다.
        그리고 자신과 자신의 아버지에 대해 강한 적대감을 드러내는 그에게서 심상치 않은 위기를
        직감한다. 한편, 이 과정을 모두 지켜본 토니 스타크의 라이벌이자 무기업자인 ‘저스틴
        해머’는 아이언맨에 필적할 만한 위플래시의 위력을 간파하고 그를 몰래 감옥에서 탈출시켜
        자신과 손 잡을 것을 제안한다. 위플래시를 만난 이후 좀처럼 충격에서 헤어나오지 못하던
        토니 스타크는 감옥에 갇혀 있는 줄 알았던 위플래시가 저스틴 해머와 함께 있음을 알게 되고,
        역대 수트들을 뛰어넘는 최강의 위력을 지닌 Mark6 개발에 박차를 가한다. 그 사이, 저스틴
        해머는 새로운 군무기 발표 쇼케이스를 개최하고, 그 곳에서 위플래시는 모두를 놀라게 할
        작전 실행에 나서는데...! 줄거리 2. 자신이 아이언맨이라고 정체를 밝힌 뒤 할리우드 스타
        못지 않은 인기를 누리던 토니 스타크. 스타크 인더스트리의 운영권을 수석 비서였던
        페퍼포츠에게 일임하고 즐거운 나날을 보내던 그에게 생애 최고의 위기가 찾아온다. ‘스타크’
        가문에 대한 적대감으로 가득 찬 ‘위플래시’가 아이언맨 수트의 원천 기술인 아크 원자로
        개발에 성공한 것. F-1 그랑프리에 출전하여 무방비 상태에 있던 토니 스타크에게 위협적인
        공격을 가하는 위플래쉬. 이에 토니 스타크는 새로 개발한 업그레이드 수트를 이용, 겨우
        위기를 모면한다. 하지만 이 사건을 계기로 위플래시는 토니 스타크의 라이벌 ‘저스틴 해머’와
        손을 잡고 아이언맨을 공격하기 시작하고, 이에 토니 스타크는 오랜 동료 제임스 로드를 위한
        새로운 하이테크 수트를 제작, ‘워 머신’으로 거듭난 그와 함께 강력해진 적들과의 본격적
        대결에 나서는데…!`,
  runtime: '',
  rating: '12세이상',
  genre: '액션',
  repRlsDate: '',
  keywords: '',
  poster: 'https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg',
};

function MovieSearch() {
  return (
    <MovieSearchWrapper>
      <TopBar />
      <MovieInfo movie={movie} />
      <Poster url={movie.poster}>
        <Gradient />
      </Poster>
      <RatingBar />
      <ReviewList />
      <ReviewButton />
    </MovieSearchWrapper>
  );
}

const MovieSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 375px;
  max-width: 390px;
  min-height: 100vh;
  height: fit-content;
  margin: 0 -20px;

  font-family: Pretendard;
`;

const Poster = styled.div<{ url: string }>`
  position: absolute;
  width: 100%;
  height: 203px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
    url(${(props) => props.url}), lightgray 50% / cover no-repeat;
  background-size: cover;
`;

const Gradient = styled.div`
  z-index: 0;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 119px;
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 0%, #111213 72.4%);
`;

export default MovieSearch;

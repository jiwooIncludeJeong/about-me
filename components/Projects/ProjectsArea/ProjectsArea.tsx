import React from 'react';
import Presenter from '@components/Projects/ProjectsArea/Presenter';
import type { ProjectType } from '@interfaces/Projects';
import { ProjectDetailTypeEnum } from '@enums/Projects/Modal';

interface Props {
  isFocused: boolean;
  openModal: (data: ProjectType) => void;
}

const ProjectsArea: React.FC<Props> = props => {
  const {} = props;

  const data: Array<ProjectType> = [
    {
      id: 0,
      title: { kr: '마이쉽단 모바일 앱', en: 'MyShipdan Mobile App' },
      subTitle: 'AI 기반 개인 맞춤 식단 구성 및 커머스 서비스 웹뷰 앱 프로젝트',
      shortDetail:
        '개인의 신체정보(인바디, 신장, 체중 등)과 활동정보(수면시간, 직업 등)을 통해 필요 영양성분을 진단하고\n' +
        '진단정보를 통하여 개인에 알맞은 식단을 구성, 구매, 배송까지 해주는 서비스입니다.\n\n' +
        'React-Native-WebView를 통해 React-Native에 기존 웹 프로덕트를 앱으로 구현하였습니다.\n' +
        '앱 내에서만 보이는 페이지는 Typescript로 작성하였고, 상태관리는 Recoil을 사용하였습니다.\n' +
        '웹뷰로 구현하였기 때문에 iOS, Android 심사 기간을 포함하여 각 2주, 1주만에 출시하였습니다.\n' +
        '이를 통해 앱 개발 리소스를 줄여 다른 기능 개선 및 개발에 투자할 수 있었습니다.\n' +
        'Sentry를 추가하여 에러를 관리하고, Amplitude를 추가하여 기획팀에서 사용자 데이터를 추적할 수 있도록 하였습니다.\n' +
        'Adjust와 Facebook SDK를 추가하여 광고 마케팅 성과 지표를 얻을 수 있도록 하였습니다.\n' +
        '또한 1달만에 각 OS 1만 다운로드를 달성하였고 App Store 기준 식음료 카테고리에서 인기 순위 최고 16위를 기록하였습니다.',
      detail: [
        {
          id: 0,
          content:
            'React-Native-WebView를 통해 기존의 웹 프로덕트를 웹뷰 앱으로 구현하였습니다.\n' +
            '웹과 앱 사이의 이벤트 기반 시스템을 구현하였습니다.\n',
          link: 'https://velog.io/@jt_include_rw/series/React-Native-WebView',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 1,
          content:
            'FCM시스템 구현을 통해 다른 팀에서 앱푸시를 Flexible하게 사용할 수 있게 하였습니다.\n ' +
            '이로 인해 기존 카카오 플러스친구를 통해 보내던 CRM을 앱푸시로 바꾸어 고정비를 줄이고, 업무의 생산성을 높였습니다.\n',
          type: ProjectDetailTypeEnum.EFFORT,
        },
      ],
      duration: '2022.06 ~ NOW',
      iconImage: '',
      iosLink:
        'https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4%EC%89%BD%EB%8B%A8/id1619915278',
      androidLink:
        'https://play.google.com/store/apps/details?id=com.shipdanapp',
      tech: [
        { id: 0, name: 'React-Native' },
        { id: 1, name: 'WebView' },
        { id: 2, name: 'Typescript' },
        { id: 3, name: 'FCM' },
        { id: 4, name: 'Recoil' },
      ],
    },
    {
      id: 1,
      title: { kr: '마이쉽단 웹 프로덕트', en: 'MyShipdan Web Product' },
      subTitle: 'AI 기반 개인 맞춤 식단 구성 및 커머스 서비스 웹 프로젝트',
      shortDetail:
        '개인의 신체정보(인바디, 신장, 체중 등)과 활동정보(수면시간, 직업 등)을 통해 필요 영양성분을 진단하고\n' +
        '진단정보를 통하여 개인에 알맞은 식단을 구성, 구매, 배송까지 해주는 서비스입니다.\n\n' +
        'Next.js와 Typescript로 개발을 진행하였습니다. 상태관리는 Recoil을 사용하였습니다. 배포는 nginx와 Next.js를 dockerize하여 AWS의 Elastic Beanstalk로 진행하였습니다.\n' +
        '개발 초반에 SSR에 대한 이해가 부족하여 CSR에서 통신하였으나 2022.09에 User fetch에 대해 SSR을 도입하였습니다.\n' +
        '또한 webp가 아닌 png로 사용하던 img를 최적화를 진행하였습니다.\n' +
        '이를 통해 Lighthouse에서의 LCP를 기존 4.7초에서 2.6초로 줄일 수 있었습니다.\n',
      detail: [],
      duration: '2021.11 ~ NOW',
      iconImage: '',
      link: 'https://shipdan.me/',
      tech: [
        { id: 0, name: 'React' },
        { id: 1, name: 'NextJS' },
        { id: 2, name: 'Typescript' },
        { id: 3, name: 'Recoil' },
        { id: 4, name: 'Axios' },
      ],
    },
    {
      id: 2,
      title: {
        kr: '마이쉽단 어드민',
        en: 'MyShipdan Admin',
      },
      subTitle: '입점 업체 물류 발주/입고/정산을 위한 어드민 프로젝트',
      shortDetail:
        '마이쉽단 서비스의 물류 특성 상 입점 업체와 발주/입고/정산이 필요합니다.\n' +
        '기존의 이메일, 스프레드 시트로 관리하던 프로세스를 어드민 시스템을 자체 개발 및 도입하여 리소스를 축소하기 위해 개발하였습니다.\n\n' +
        'Core UI의 무료 템플릿을 통해 개발을 진행하였고, 상태관리는 Recoil을 사용하였습니다.\n' +
        '배포는 AWS S3에 upload ➡️ AWS CloudFront ➡️ AWS Route53으로 도메인 지정을 통해 진행하였습니다.',
      detail: [],
      duration: '2022.05 ~ NOW',
      iconImage: '',
      link: 'https://admin.shipdan.me/#/login',
      tech: [
        { id: 0, name: 'React' },
        { id: 1, name: 'Core UI' },
        { id: 2, name: 'Javascript' },
        { id: 4, name: 'Axios' },
      ],
    },
    {
      id: 22,
      title: {
        kr: '하이라이트',
        en: 'Highlight',
      },
      subTitle:
        'Unithon 9th 해커톤에서 진행한 현재 위치 기반 음악과 메모 기록 웹 프로젝트',
      shortDetail:
        '2022.09.02 ~ 2022.09.04 에 진행한 Unithon 9th 해커톤에서 13팀으로 참여하여 프론트엔드를 개발하였습니다.\n' +
        '현재 위치에 음악에 기억을 담는다는 기획으로, 현재 위치에 음악과 함께 메모를 작성할 수 있는 웹 서비스입니다.\n\n' +
        'NextJS와 Typescript로 개발을 진행하였으며 React Query로 Axios의 비동기처리를 간단하게 상태화 할 수 있었습니다.\n' +
        '카카오 맵 API를 사용하여 지도를 그렸고 browser의 geolocation API를 이용하여 현재 위치를 watching하였습니다.\n' +
        '음악 검색은 last.FM API의 track 검색 API를 사용하여 진행하였습니다.\n' +
        '절대적인 시간이 부족하여 모든 기획을 개발로 진행하지 못한 점이 아쉽습니다.',
      detail: [],
      duration: '2022.09 ~ 2022.09',
      iconImage: '',
      github: 'https://github.com/CU-Team/front-end',
      link: 'https://www.notion.so/unit-center/CU-bf75a6ad0e064679a111075614ce1e63',
      tech: [
        { id: 0, name: 'React' },
        { id: 1, name: 'NextJS' },
        { id: 5, name: 'Typescript' },
        { id: 2, name: 'Recoil' },
        { id: 3, name: 'React Query' },
        { id: 4, name: 'Axios' },
        { id: 6, name: 'Kakao Map API' },
      ],
    },
    {
      id: 3,
      title: {
        kr: '피트니스 다이빙 모바일 앱',
        en: 'FitnessDiving Mobile App',
      },
      subTitle:
        '실시간 양방향 카메라를 통한 라이브 동영상 스트리밍 서비스 앱 프로젝트(서비스 종료)',
      shortDetail:
        'WebRTC를 이용하여 송출용 기기에서 영상을 여러 기기로 운동 영상 라이브 스트리밍 서비스입니다.\n' +
        'VOD도 동영상 플레이어 형식으로 제공하고, 사용자들의 전체 랭킹도 제공하였습니다.\n' +
        '라이브를 제외한 대부분의 기능을 개발했으며, 동영상 플레이어 기능을 전담하여 개발하였습니다.\n' +
        '특히 이 부분에서 React의 state의 변화로 인한 re-rendering 개념이 부족하여 동영상의 실행시간을 state로 선언하여 성능 이슈를 발생 시켜 어려움을 겪었습니다.\n' +
        'useRef의 용도를 깨닫고 변경한 후 팀원들에게 훨씬 나은 사용성과 좋은 UI를 개발하였다는 칭찬을 받았던 기억이 남는 프로젝트입니다.',
      detail: [],
      duration: '2021.02 ~ 2022.01',
      iconImage: '',
      link: '',
      tech: [
        { id: 0, name: 'React-Native' },
        { id: 1, name: 'Recoil' },
        { id: 5, name: 'Typescript' },
        { id: 2, name: 'WebRTC' },
        { id: 3, name: 'FCM' },
        { id: 4, name: 'Axios' },
      ],
    },
    {
      id: 4,
      title: {
        kr: '시각장애인을 위한 지하철 도우미',
        en: 'Subway Guide for Visually Impaired',
      },
      subTitle:
        '시각장애인을 위해 음성 인식/안내를 통해 지하철을 안내해주는 프로젝트',
      shortDetail:
        '시각장애인을 위해 음성으로 어플리케이션과 상호작용하며 출발지역과 목적지역을 입력하면 최소환승 경로를 안내합니다.\n' +
        '실시간으로 사용자가 탑승한 지하철의 위치를 파악하여 목적지역 도착 3개전에 내릴 수 있도록 음성과 진동으로 안내합니다.\n' +
        '가장 가까운 출구의 위치를 사용자가 탑승한 지하철의 칸 번호와 비교하여 사용자가 좌우 중 어느 방향으로 가야하는지 음성으로 안내합니다.\n' +
        '아두이노의 비콘 모드를 활용하여 각 지하철 스크린도어 상단에 비콘을 설치했다는 가정하에 실시한 프로젝트입니다.\n' +
        '지하철의 인식, 최소환승 경로, 실시간 위치, 음성인식 등 비콘과 관련되지 않은 프론트엔드를 개발 담당하였습니다.\n' +
        '백엔드 없이 서울 열린 데이터 광장의 실시간 지하철 위치정보 API, 최소환승 경로 API, 지하철 정보 API 세가지 공개 API를 활용하여 개발하였습니다.\n' +
        '음성인식은 React-Native-Voice를 활용하였고, 음성출력은 React-Native-TTS를 활용하였습니다.\n\n' +
        '해당 프로젝트로 숭실대학교에서 주최한 제 11회 숭실 캡스톤 디자인 경진대회 은상을 수상하였습니다.',
      detail: [],
      github:
        'https://github.com/jiwooIncludeJeong/Subway_Service_for_VisuallyImpaired/tree/master',
      duration: '2021.06 ~ 2021.08',
      iconImage: '',
      tech: [
        { id: 0, name: 'React-Native' },
        { id: 1, name: 'OPEN API' },
        { id: 2, name: 'Arduino' },
        { id: 3, name: 'Beacon' },
      ],
    },
    {
      id: 5,
      title: {
        kr: '벙커키즈 제비뽑기 토이 프로젝트',
        en: 'Bunkerkids Draw TOY Project',
      },
      subTitle: 'Svelte를 이용한 간단한 제비뽑기 토이 프로젝트',
      shortDetail:
        'Svelte의 이해보다는 사용에 초점을 두고 개발한 간단한 프로젝트입니다.\n' +
        '당시 개발 팀원이 홀수였고, 점심 값 1000원 더 내기, 1000원 덜 내기 등 사다리 타기를 많이 하던 것에서 아이디어를 떠올려 개발하였습니다.\n' +
        '이후에도 사다리 타기를 할 일이 있으면 자주 사용합니다.\n' +
        'Svelte를 통해서 개발하였고 Netlify를 통해 배포하였습니다.',
      detail: [],
      github: 'https://github.com/jiwooIncludeJeong/ladder-game-svelte',
      duration: '2021.12 ~ 2021.12',
      iconImage: '',
      link: 'https://bunkerkidsdraw.netlify.app/',
      tech: [
        { id: 0, name: 'Svelte' },
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'Netlify' },
      ],
    },
    {
      id: 6,
      title: {
        kr: 'Just Lift 운동 세트 카운터 웹',
        en: 'Just Lift Work Out Set Counter Web',
      },
      subTitle:
        '운동 세트 수 카운팅과 설정한 쉬는 시간을 위한 타이머 기능의 프로젝트',
      shortDetail:
        '개인적으로 헬스할 때 세트수를 자주 잊어버려 개발하였습니다.\n' +
        '그리고 다른 운동하시는 분들이 휴대폰으로 쉬는 시간을 측정하는 것을 보고 "쉬는 것까지 한 세트이다"라는 생각으로 쉬는 시간이 끝나면 한 세트가 추가되는 비즈니스 로직을 구현하였습니다.\n' +
        'React와 Javascript로 개발하였습니다. AWS S3에 올려 배포하였으나 AWS에서 Cloudfront 비용을 청구하여 사용자 대비 비용이 많이 나와 배포는 철회하였습니다.',
      detail: [],
      github: 'https://github.com/jiwooIncludeJeong/JustLiftWeb',
      duration: '2021.01 ~ 2021.01',
      iconImage: '',
      tech: [
        { id: 0, name: 'React' },
        { id: 1, name: 'Javascript' },
      ],
    },
  ];

  return <Presenter data={data} {...props} />;
};

export default ProjectsArea;

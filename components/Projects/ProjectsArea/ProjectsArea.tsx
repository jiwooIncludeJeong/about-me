import React from 'react';
import Presenter from '@components/Projects/ProjectsArea/Presenter';
import type { ProjectType } from '@interfaces/Projects';

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
        '또한 1달만에 각 OS 1만 다운로드를 달성하였고 App Store 기준 식음료 카테고리에서 인기 순위 최고 16위를 기록하였습니다.',
      detail: [
        {
          id: 0,
          content:
            'React-Native-WebView를 통해 기존의 웹 프로덕트를 웹뷰 앱으로 구현하였습니다.\n' +
            '웹과 앱 사이의 이벤트 기반 시스템을 구현하였습니다.\n',
          link: 'https://velog.io/@jt_include_rw/series/React-Native-WebView',
        },
        {
          id: 1,
          content:
            'FCM시스템 구현을 통해 다른 팀에서 앱푸시를 Flexible하게 사용할 수 있게 하였습니다.\n ' +
            '이로 인해 기존 카카오 플러스친구를 통해 보내던 CRM을 앱푸시로 바꾸어 고정비를 줄이고, 업무의 생산성을 높였습니다.\n',
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
        '이를 통해 Lighthouse에서의 LCP를 기존 XXX초에서 2.6초로 줄일 수 있었습니다.\n',
      detail: [
        {
          id: 0,
          content: 'content입니다',
        },
      ],
      duration: '2021.11 ~ NOW',
      iconImage: '',
      link: 'https://shipdan.me/',
      tech: [
        { id: 0, name: 'React' },
        { id: 1, name: 'NextJS' },
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
      detail: [
        {
          id: 0,
          content: 'content입니다',
        },
      ],
      duration: '2022.05 ~ NOW',
      iconImage: '',
      link: 'https://admin.shipdan.me/#/login',
      tech: [{ id: 0, name: 'React-Native' }],
    },
    {
      id: 3,
      title: {
        kr: '피트니스 다이빙 모바일 앱',
        en: 'FitnessDiving Mobile App',
      },
      subTitle:
        '실시간 양방향 카메라를 통한 라이브 동영상 스트리밍 서비스 앱 프로젝트',
      shortDetail: '',
      detail: [
        {
          id: 0,
          content: 'content입니다',
        },
      ],
      duration: '2021.02 ~ 2022.01',
      iconImage: '',
      link: '',
      tech: [{ id: 0, name: 'React-Native' }],
    },
    {
      id: 4,
      title: {
        kr: '시각장애인을 위한 지하철 도우미',
        en: 'Subway Guide for Visually Impaired',
      },
      subTitle:
        '시각장애인을 위해 음성 인식/안내를 통해 지하철을 안내해주는 프로젝트',
      shortDetail: '',
      detail: [
        {
          id: 0,
          content: 'content입니다',
        },
      ],
      github:
        'https://github.com/jiwooIncludeJeong/Subway_Service_for_VisuallyImpaired/tree/master',
      duration: '2021.06 ~ 2021.08',
      iconImage: '',
      tech: [{ id: 0, name: 'React-Native' }],
    },
    {
      id: 5,
      title: {
        kr: '벙커키즈 제비뽑기 토이 프로젝트',
        en: 'Bunkerkids Draw TOY Project',
      },
      subTitle: 'Svelte를 이용한 간단한 제비뽑기 토이 프로젝트',
      shortDetail: '',
      detail: [
        {
          id: 0,
          content: 'content입니다',
        },
      ],
      github: 'https://github.com/jiwooIncludeJeong/ladder-game-svelte',
      duration: '2021.12 ~ 2021.12',
      iconImage: '',
      link: 'https://bunkerkidsdraw.netlify.app/',
      tech: [{ id: 0, name: 'React-Native' }],
    },
    {
      id: 6,
      title: {
        kr: 'Just Lift 운동 세트 카운터 웹',
        en: 'Just Lift Work Out Set Counter Web',
      },
      subTitle:
        '운동 세트 수 카운팅과 설정한 쉬는 시간을 위한 타이머 기능의 프로젝트',
      shortDetail: '',
      detail: [
        {
          id: 0,
          content: 'content입니다',
        },
      ],
      github: 'https://github.com/jiwooIncludeJeong/JustLiftWeb',
      duration: '2021.01 ~ 2021.01',
      iconImage: '',
      tech: [{ id: 0, name: 'React' }],
    },
  ];

  return <Presenter data={data} {...props} />;
};

export default ProjectsArea;

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
      detail: {
        id: 0,
        content:
          'React-Native-WebView를 통해 기존의 웹 프로덕트를 웹뷰 앱으로 구현하였습니다.\n' +
          '웹과 앱 사이의 이벤트 기반 시스템을 구현하였습니다.\n' +
          '또한 FCM, Link 시스템 구현을 통해 다른 팀에서 앱푸시, CRM 메시지 등을 Flexible하게 사용할 수 있게 하여 업무의 생산성을 높였습니다.\n',
        link: 'https://velog.io/@jt_include_rw/series/React-Native-WebView',
      },
      duration: '2022.06 ~ NOW',
      iconImage: '',
      link: 'https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4%EC%89%BD%EB%8B%A8/id1619915278',
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
      detail: {
        id: 0,
        content: 'content입니다',
      },
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
      detail: {
        id: 0,
        content: 'content입니다',
      },
      duration: '2022.05 ~ NOW',
      iconImage: '',
      link: '',
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
      detail: {
        id: 0,
        content: 'content입니다',
      },
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
      detail: {
        id: 0,
        content: 'content입니다',
      },
      github:
        'https://github.com/jiwooIncludeJeong/Subway_Service_for_VisuallyImpaired/tree/master',
      duration: '2021.06 ~ 2021.08',
      iconImage: '',
      link: '',
      tech: [{ id: 0, name: 'React-Native' }],
    },
    {
      id: 5,
      title: {
        kr: '벙커키즈 제비뽑기 토이 프로젝트',
        en: 'Bunkerkids Draw TOY Project',
      },
      subTitle: 'Svelte를 이용한 간단한 제비뽑기 토이 프로젝트',
      detail: {
        id: 0,
        content: 'content입니다',
      },
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
      detail: {
        id: 0,
        content: 'content입니다',
      },
      github: 'https://github.com/jiwooIncludeJeong/JustLiftWeb',
      duration: '2021.01 ~ 2021.01',
      iconImage: '',
      link: '',
      tech: [{ id: 0, name: 'React' }],
    },
  ];

  return <Presenter data={data} {...props} />;
};

export default ProjectsArea;

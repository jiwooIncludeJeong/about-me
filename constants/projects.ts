import type { ProjectType } from '@interfaces/Projects';
import { ProjectDetailTypeEnum } from '@enums/Projects/Modal';

export const PROJECTS: Array<ProjectType> = [
  {
    id: 12,
    title: {
      kr: '챌린저스 앱',
      en: 'Challengers App',
    },
    subTitle:
      '몸과 마음이 건강해지는 습관 만들기.' +
      '대한민국 1등 건강습관 앱, 챌린저스 \n 앱 개발',
    shortDetail: '',
    detail: [
      {
        id: 0,
        title:
          'polling update 최적화를 위한 rxjs를 통해 이벤트 기반 data fetching 구현',
        content: '',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty: '',
        effort: '',
        result: '',
      },
      {
        id: 1,
        title: '디자인 시스템 npm package 자동 배포 추가',
        content: '',
        link: 'https://velog.io/@jt_include_rw/NPM-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94-wGithub-Action',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty: '',
        effort: '',
        result: '',
      },
      {
        id: 2,
        title: 'core module npm package로 분리를 통한 UI와 로직 분리',
        content: '',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty: '',
        effort: '',
        result: '',
      },
      {
        id: 3,
        title:
          'Native 모듈을 활용한 랜선 대회를 통해 순이익 약 4,000만원의 기능 개발',
        content: '',
        link: 'https://digitalchosun.dizzo.com/site/data/html_dir/2022/12/20/2022122080065.html',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty: '',
        effort: '',
        result: '',
      },
    ],
    iosLink: 'https://apps.apple.com/kr/app/id1438855824',
    androidLink:
      'https://play.google.com/store/apps/details?id=kr.co.whitecube.chlngers',
    duration: '2022.11 ~ NOW',
    iconImage: '',
    tech: [
      { id: 0, name: 'React Native' },
      { id: 1, name: 'React-Query' },
      { id: 2, name: 'Redux' },
      { id: 3, name: 'Typescript' },
    ],
  },
  {
    id: 13,
    title: {
      kr: 'awran5/react-simple-star-rating 기여',
      en: 'contribute awran5/react-simple-star-rating',
    },
    subTitle:
      'github repository awran5/react-simple-star-rating issue를 찾아 기여',
    shortDetail:
      '기존에 사용하던 react의 별점 관련 라이브러리를 Next.js에서 사용하는 중 이슈를 발견.\n' +
      '이슈를 해결하여 Pull Request를 올려 Merge되어 Contributor로써 기여함.',
    detail: [
      {
        id: 0,
        title: '해당 라이브러리에서 처리하지 않은 SSR 이슈를 해결하여 기여',
        content:
          'ServerSide에서 window와 navigator 객체가 init 되지 않아 객체가 undefined일 때에 대해 처리하여 이슈를 해결함.',
        type: ProjectDetailTypeEnum.EFFORT,
        link: 'https://github.com/awran5/react-simple-star-rating/pull/27',
        difficulty:
          'Next.js에서 ServerSide에서 window와 navigator 객체가 init 되기 이전에 해당 객체의 하위 state를 참조하여 js 에러 발생.',
        effort:
          '해당 repository를 fork하여 로컬 환경에서 isTouchDevice boolean flag를 위해 window와 navigator 객체를 undefined를 확인하여 이슈를 해결. ㄴPull Request 생성.',
        result:
          'Pull Request가 Merge 되어 첫 오픈 라이브러리 Contributor가 됨. patch-package를 통해 로컬에서 수정하여 사용하던 버전을 업데이트된 버전으로 수정.',
      },
    ],
    github: 'https://github.com/awran5/react-simple-star-rating/pull/27',
    duration: '2022.09',
    iconImage: '',
    tech: [
      { id: 0, name: 'React' },
      { id: 1, name: 'Next.js' },
      { id: 3, name: 'Open Source' },
    ],
  },
  {
    id: 0,
    title: { kr: '마이쉽단 모바일 앱', en: 'MyShipdan Mobile App' },
    subTitle: 'AI 기반 개인 맞춤 식단 구성 및 커머스 서비스 웹뷰 앱 프로젝트',
    shortDetail:
      '개인의 신체정보(인바디, 신장, 체중 등)과 활동정보(수면시간, 직업 등)을 통해 필요 영양성분을 진단하고 ' +
      '진단정보를 통하여 개인에 알맞은 식단을 구성, 구매, 배송까지 해주는 서비스.\n ' +
      'React-Native-WebView를 통해 React-Native에 기존 웹 프로덕트를 웹뷰 앱으로 구현.\n' +
      'React Native와 Typescript로 개발, 상태관리 라이브러리 Recoil 사용.\n' +
      'iOS, Android 심사 기간을 포함하여 각 2주, 1주만에 출시.\n' +
      'Sentry로 에러 관리, Amplitude를 추가하여 기획팀에서 사용자 데이터를 추적할 수 있도록 함.\n' +
      'Adjust와 Facebook SDK를 추가하여 광고 마케팅 성과 지표를 얻을 수 있도록 함.',
    detail: [
      {
        id: 0,
        title: '이벤트명 기반의 WebView 시스템 구축',
        content: '웹뷰와 React Native 앱 사이의 이벤트 기반 시스템을 구현.',
        link: 'https://velog.io/@jt_include_rw/series/React-Native-WebView',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '이벤트명에 따른 핸들링 함수의 undefined 타입 체크 코드가 React Native에 없어서 앱 정식 배포 이후 앱 크래시 경험.',
        effort:
          '앱에 추가하지 않은 WebView 이벤트를 웹에서 주석처리. 이후 사용자들에게 fix 버전 업데이트를 강제한 이후 주석을 풀었음.',
        result:
          '테스트 케이스의 중요성과 타입 체크의 중요성을 깨닫고 보다 신중히 코드 작성하기 위해 노력함.',
      },
      {
        id: 1,
        title: 'FCM 시스템 구축',
        content: 'FCM 시스템 구현.',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          'FCM 앱푸시 데이터의 형태를 정하여 필요 시, 모든 상황에 동작하는 FCM 시스템을 구축하고자 함.',
        effort:
          '앱 내 스크린명, 웹뷰 내 페이지명, 로그인 필요 여부, 기타 데이터 등을 받을 수 있는 데이터 형태를 정적으로 지정하여 다른 팀의 요청에 대응할 수 있도록 구현함.',
        result:
          '기존 카카오 플러스친구 채널을 통해 보내던 리타겟 메시지를 일부 앱푸시로 바꾸어 고정비를 줄일 수 있었음.',
      },
      {
        id: 2,
        title: 'Link 시스템 구축',
        content: 'Link 시스템 구현.',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          'query string의 형태를 정하여 필요 시, 모든 상황에 동장하는 Link 시스템을 구축하고자 함.',
        effort:
          '앱 내 스크린명, 웹뷰 내 페이지명, 로그인 필요 여부, 기타 데이터 등을 받을 수 있는 데이터 형태를 정적으로 지정하여 다른 팀의 요청에 대응할 수 있도록 구현함. 또한 다른 팀에 Link URL 생성 실행 파일을 제공하여 다른 팀에서도 URL을 생성할 수 있도록 함.',
        result:
          '카카오 플러스친구 채널 메시지와 페이스북 광고 CTA URL을 Link 시스템의 URL로 기입하여 마케팅 팀에서 원하는 앱의 화면으로 광고를 집행할 수 있도록 함. 또한 URL 생성 파일을 통해 개발팀에 매번 요청하는 리소스를 줄임.',
      },
      {
        id: 3,
        title: 'React-Native 테스트 환경 구축',
        content:
          'hook과 util 함수를 테스트 하기 위해 Jest를 이용한 단위 테스트 환경 구축. Enzyme를 이용한 컴포넌트 테스트 환경을 구축. 비즈니스 로직이 변경되었을 때 사이드 이펙트를 확인하기 위해 테스트 도입.',
        link: '/pdfs/rn-test.pdf',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          'useState, useEffect와 같은 React 함수를 import 하였을 때 테스트 에러 발생.',
        effort: 'React 함수를 Mocking하는 함수를 만들어 테스트를 용이하게 함.',
        result:
          '테스트는 가능하나 비즈니스 로직 구현에 우선순위가 있어 꾸준한 테스트 코드 작성에는 실패함. 테스트를 작성하는 것에 대한 연습을 필요하다고 생각함.',
      },
      {
        id: 6,
        title: 'iOS, Android 앱 심사 및 배포',
        content:
          'React-Native-WebView로 구현한 앱을 Android, iOS 심사 준비 및 배포.',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '이전 프로젝트에서 iOS 배포 시, 다양한 reject 사유가 있어 웹뷰 앱에 대해 많은 사례를 찾아봄.',
        effort:
          'iOS에 대비하여 이메일 로그인 기능과 Notification(FCM) 기능을 추가하여 애플의 심사 규정을 통과하기 위해 노력함.',
        result:
          'iOS, Android 모두 첫 심사만에 accept 되어 각 2주, 1주만에 판매 개시. 이후 마케팅팀의 노력으로 각 운영체제 모두 한 달만에 1만 다운로드 달성.',
      },
    ],
    duration: '2022.06 ~ 2022.10',
    iconImage: '',
    iosLink:
      'https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4%EC%89%BD%EB%8B%A8/id1619915278',
    androidLink: 'https://play.google.com/store/apps/details?id=com.shipdanapp',
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
      '개인의 신체정보(인바디, 신장, 체중 등)과 활동정보(수면시간, 직업 등)을 통해 필요 영양성분을 진단하고 ' +
      '진단정보를 통하여 개인에 알맞은 식단을 구성, 구매, 배송까지 해주는 서비스.\n' +
      'Next.js와 Typescript로 개발, 상태관리 라이브러리 Recoil 사용.\n' +
      'Nginx와 Next.js를 Dockerize하여 AWS의 Elastic Beanstalk로 배포.\n' +
      '개발 초반에 SSR에 대한 이해가 부족하여 CSR만 진행. 2022.09에 User 데이터에 대해 SSR을 도입.\n' +
      'png로 사용하던 img를 webp로 최적화. ' +
      '이를 통해 Lighthouse에서의 LCP를 기존 4.7초에서 2.6초로 줄임.',
    detail: [
      {
        id: 0,
        title: '웹 성능 최적화: Reflow, Repaint 애니메이션 코드 리팩토링',
        content:
          '브라우저의 Reflow와 Repaint를 발생 시키는 애니메이션 코드를 transform, opacity로 변경.',
        link: 'https://velog.io/@jt_include_rw/%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-1.-animation',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '브라우저의 동작원리를 모르던 때 작성한 애니메이션 코드들이 Reflow와 Repaint를 발생 시켜 나쁜 성능의 원인이 됨.',
        effort:
          '위치나 크기를 변경 시켜 Reflow를 일으키거나 color를 변경 시켜 Repaint를 일으키는 애니메이션을 최소화하고 transform, opacity 애니메이션으로 변경함.',
        result:
          '브라우저가 아닌 GPU를 애니메이션에 관여하게 함으로써 웹 성능을 최적화함',
      },
      {
        id: 1,
        title: '웹 성능 최적화: PNG,JPG 이미지 WEBP로 바꾸기',
        content:
          'PNG, JPG 이미지를 Python을 통해 WEBP로 변환하고 picture 컴포넌트를 만들어 WEBP 사용을 통해 웹 성능 최적화.',
        link: '/pdfs/optimization-image.pdf',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '최초 화면에 많은 이미지를 보여주는 서비스인데 식품 이미지를 모두 PNG, JPG를 사용하여 사용자들의 이미지 관련 CS 문의가 많았음. 또한 개발팀도 인지하여 개선의 필요성을 느낌.',
        effort:
          '첫번째는 AWS Lambda 함수를 통해 S3에서 이미지를 불러올 때 Sharp 패키지를 이용해 WEBP 변환과 리사이징을 시도하였으나, Remote 저장소의 이미지를 다운로드하고 처리하는 과정이 오래 걸려 UX가 더 나빠짐. ' +
          '두번째는 next/image를 이용하였으나 같은 이유로 UX가 더 나빠짐. ' +
          '따라서 Python으로 이미지를 WEBP로 변환하여 S3에 업로드하고 picture 태그를 이용한 컴포넌트를 만들어 프론트엔드에서 처리함. 해당 컴포넌트에서 intersectionObserver를 이용해 이미지 lazy loading도 구현함.' +
          ' 또한, Cloudfront를 추가하여 이미지 캐싱함.',
        result:
          '이 영향으로 LCP가 4.7초에서 2.6초로 떨어졌고, 사용자들에게 최초화면에서 2초의 절약을 제공함.',
      },
      {
        id: 2,
        title: 'Storybook 도입 및 배포를 통한 협업 능률 향상',
        content:
          '디자이너와의 소통, 프론트엔드 개발자 내 소통을 위하여 자주 사용하는 컴포넌트를 약속한 Storybook을 작성.',
        link: 'https://storybook.shipdan.me/?path=/story/welcome--page',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '디자인팀과 개발팀(프론트엔드)와의 소통 시, 자주 사용하는 컴포넌트에 대한 명칭이 정해져있지 않아 소통에 불편함이 있었음.',
        effort:
          '디자인팀과 함께 자주 사용하는 컴포넌트를 정하고 명명함. 그리고 디자이너도 컴포넌트의 UI를 상호작용할 수 있도록 S3 upload ➡️ AWS CloudFront ➡️ AWS Route53로 배포.',
        result:
          '개발적으로는 컴포넌트 기반 코드를 작성하는데 도움이 됨. 협업 능률 측면에서는 세 번은 소통해야했던 것을 한 번에 소통할 수 있게 되었음.',
      },
      {
        id: 3,
        title: '스크래퍼를 통한 식단 이미지 다운로드 자동화',
        content:
          '사용자에게 일주일 치 구매식단을 지류로 뽑아주는 실험을 위해 불필요하게 반복되어 사용되었던 팀원들의 리소스를 단축함.',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '구매식단 이미지를 얻기 위한 페이지가 필요했음. 또한, 해당 페이지를 두 분의 디자이너가 일일이 스크린샷을 찍어야했고 매주 금요일 4시간씩의 리소스를 쏟아부었음.',
        effort:
          '처음에는 구매식단 이미지를 위한 페이지를 만들었음. 4시간의 리소스가 아까워 html2canvas로 다운로드 버튼을 추가. 개발팀장님의 도움으로 super user가 자동으로 다운로드 버튼을 누르는 셀레니움 스크래퍼를 개발함.',
        result:
          '단계적 자동화를 통해 두 사람이 각 "4시간씩" 걸리던 작업을 단 "15분"으로 단축함.',
      },
      {
        id: 40,
        title: 'Github Action을 통한 Build Check',
        content:
          '해당 프로젝트 build 시 error가 없는지 확인하기 위해 Github Action 도입.',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          'Elastic Beanstalk에 배포 시, build error가 뜨면 오랜 시간을 기다렸다가 resolve된 commit을 다시 배포해야함. 이것을 사전에 줄이고 싶었음.',
        effort:
          'Github Action을 prod, staging branch에 등록하여 배포 이전에 build error check 할 수 있게 등록함.',
        result:
          'Github에서 build error가 없으면 배포를 진행하기 때문에 build error가 있는 commit을 배포할 일이 사라졌음.',
      },
      {
        id: 4,
        title: 'Typescript의 Union TypeGuard에 대한 고민',
        content:
          'Typescript의 Union Type에 대해 eslint error를 Type Checking 함수를 통해 해결함.',
        link: '/pdfs/typeguard.pdf',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '백엔드에서 프론트엔드로 DTO를 모델 그대로 주는데 object, number Union Type이 존재하였음. eslint가 항상 이에 대해 error를 보여줌.',
        effort:
          '해당 타입을 처리하기 위해 is[OBJECT_NAME]Type이라는 Type Checking 함수를 추가하여 해결함.',
        result:
          'build error를 띄우지는 않았으나 코드 아래 빨간 줄이 보기 싫었고 이를 통해 빨간 줄을 없앰.',
      },
      {
        id: 5,
        title: '동적 페이지의 key 값의 중요성',
        content:
          'URL은 바뀌었으나 재렌더링이 되지 않는 동적 페이지에 key 값을 추가하여 해결.',
        link: '/pdfs/dynamic-page-key.pdf',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          'id를 받는 동적 페이지가 있었는데 id 값에 따라 URL은 변경되었으나 화면이 재렌더링이 되지 않음.',
        effort:
          'React의 Diffing Algorithm의 key 값의 중요성에 대해 찾아보고, 페이지에 key 값을 추가하여 해결함.',
        result: 'React에서 key 값의 중요성을 깨닫게 됨.',
      },
      {
        id: 6,
        title: 'SignIn Page TDD',
        content:
          'hook과 util 함수를 테스트 하기 위해 Jest를 이용한 단위 테스트 환경 구축. Enzyme를 이용한 컴포넌트 테스트 환경을 구축. 비즈니스 로직이 변경되었을 때 사이드 이펙트를 확인하기 위해 테스트 도입.',
        link: '/pdfs/tdd.pdf',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '프론트엔드에서 TDD를 진행하고 싶었는데 어떠한 관점에서 테스트를 할 것인지 컨셉 필요. 또한 테스트 환경에서 import 할 수 없는 undefined 객체에 대한 처리도 필요.',
        effort:
          'SignIn Page를 예시로 한 페이지를 Container - Presenter로 나누어 Conatiner는 렌더링이 잘 되는가, Presenter는 사용자의 행동에 따라 어떻게 보여줄 것인가에 대해 초점을 맞추어 테스트하는 컨셉을 정함. ' +
          '또한 undfined 객체를 사용하는 함수에 대해서 mocking하여 처리함.',
        result:
          'SignIn Page에 대해 TDD를 진행할 수 있었으나 어느 정도까지 테스트하여야하는가에 대한 의문은 여전히 존재. 지속적인 TDD를 하지 못한 아쉬움.',
      },
    ],
    duration: '2021.11 ~ NOW',
    iconImage: '',
    link: 'https://shipdan.me/',
    tech: [
      { id: 0, name: 'React' },
      { id: 1, name: 'Next.js' },
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
      '마이쉽단 서비스의 입점 업체와 발주/입고/정산을 위한 서비스.\n' +
      '첫 버전은 Core UI의 무료 템플릿을 통해 Javascript로 개발. 상태관리 라이브러리 Recoil 사용.' +
      'AWS S3 ➡️ AWS CloudFront ➡️ AWS Route53로 배포 진행.\n' +
      '두번째 버전은 Next.js, Typescript로 개발, Nginx와 Next.js를 Dockerize하여 Elastic Beanstalk로 배포(진행 중).',
    detail: [
      {
        id: 0,
        title: '아이콘 CDN 사용을 통한 JS bundle 크기 절감',
        content:
          'Core UI의 모든 아이콘을 import하여 커진 JS bunlde 크기를 아이콘 CDN으로 변경하여 bundle 크기 절감',
        type: ProjectDetailTypeEnum.DIFFICULTY,
        difficulty:
          '백엔드에서 Core UI의 아이콘명을 문자열로 전달. 프론트엔드는 알맞은 아이콘을 매칭하여 사용하기 위해 모든 아이콘을 import 하였더니 JS bundle 크기가 커져서 다운로드 시간이 오래 걸림.',
        effort:
          'Core UI의 CDN을 찾지 못하여 Awesome Font 아이콘 사용 및 CDN 적용.',
        result:
          '기존에 10MB에 육박했던 JS bundle 크기가 CDN으로 변경 후 1MB 이하로 떨어져 사용자들에게 빠르게 화면을 보여줄 수 있었음.',
      },
      {
        id: 1,
        title: 'Webpack Bundle Analyzer',
        content: 'JS 번들을 분석하기 위해 설치.',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          'Core UI 내 아이콘을 모두 import하여 커진 JS bundle을 분석하기 위해 Webpack Bundle Analyzer 패키지 설치.',
        effort:
          '어떤 bunlde의 크기가 크고, 왜 커지게 되었는지 분석함. 검색을 통해 tree shaking이라는 것을 알게 됨.',
        result:
          'Core UI 내 사용하지 않는 아이콘 때문에 bundle이 커졌음을 알 수 있었음. tree shaking을 통해 React Native bundler는 tree shaking을 지원하지 않아 Typescript의 enum 사용에 유의해야함을 알 수 있었음.',
      },
    ],
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
      '2022.09.02 ~ 2022.09.04 에 진행한 Unithon 9th 해커톤에서 13팀으로 참여하여 프론트엔드 개발.\n' +
      '현재 위치에 음악에 기억을 담는다는 기획으로, 현재 위치에 음악과 함께 메모를 작성할 수 있는 서비스.\n' +
      'Next.js와 Typescript로 개발. React Query로 Axios의 비동기처리를 상태화하여 사용. 상태관리 라이브러리 Recoil 사용\n' +
      '카카오 맵 API를 사용하여 지도 기능 개발, Geolocation Web API로 현재 위치 기능 개발.\n' +
      'last.FM API로 음악 검색 기능 개발.',
    detail: [
      {
        id: 0,
        title: '프로젝트 세팅 시간 절약을 위한 보일러플레이트',
        content:
          '부족한 해커톤 시간을 위해 미리 세팅해둔 Next.js, Typescript, eslint, prettier, babel 프로젝트를 사용하여 시간을 절약.',
        link: 'https://github.com/jiwooIncludeJeong/init_nextjs',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '경험 상, 첫 프로젝트 세팅에 많은 시간이 걸림. 시간이 부족한 해커톤에서 이 시간을 절약하고 싶었음. ',
        effort:
          '기존에 사용하던 프로젝트 보일러 플레이트를 사용하여 함께 협업하는 개발자분과 조금의 수정만 하여 작업 진행.',
        result:
          '프로젝트 세팅이 아닌 기능 개발, 협업 룰 정하기 등에 시간을 더 사용할 수 있었음.',
      },
      {
        id: 1,
        title: '협업을 위한 컨벤션 정하기',
        content:
          '함께하는 프론트엔드 개발자님과의 코드 컨벤션 정하기 위해 토의하여 개발자님의 의견을 많이 듣고 배우기 위해 노력함.',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '오랜 기간 혼자 프론트엔드 개발을 해왔기 때문에 다른 개발자분들은 어떠한 방식으로 코딩하는지 알고 배우고 싶었음.',
        effort:
          '함께하는 개발자님의 컨벤션을 최대한 많이 적용하여 배운다는 생각으로 개발. Styled-Component를 최상단에 감싸고 선택자로 CSS를 적용하는 컨벤션을 사용하여 선택자에 대한 부족한 공부를 할 수 있었음.',
        result:
          '해당 컨벤션의 컴포넌트 재활용 측면에서 개발자님과 토의하며 함께하는 개발자분은 재활용이 필요할 때 컴포넌트로 만드는 편이라고 하였음. 협업과 토의 과정이 즐겁게 느껴짐.',
      },
      {
        id: 3,
        title: '카카오 맵 Open API',
        content:
          '카카오 맵 API를 사용하는데 있어 마커, 오버레이 커스텀하는 것에 대한 어려움',
        type: ProjectDetailTypeEnum.DIFFICULTY,
        difficulty:
          '카카오 맵 API의 마커와 오버레이를 커스텀하는데 어려움이 있었음. 특히 오버레이는 HTML형식의 문자열로 커스텀해야했는데 onclick 함수가 state에 따라 다르게 실행되어야하는데 js로만 커스텀해야 해서 어려웠음.',
        effort:
          '오버레이의 커스텀은 CSS 파일을 만들어 최상위 App에서 import하여 적용. onclick 함수는 hook 내에서 임시 상태를 만들어 처리함.',
        result:
          '디자이너님이 원하는 커스텀 파일을 만들 수 있었고, 카카오 맵 API를 사용해봄으로써 기본 API는 익힐 수 있었음.',
      },
      {
        id: 5,
        title: 'Geolocation Web API',
        content: 'Geolocation API 사용에 따른 상태관리의 어려움.',
        type: ProjectDetailTypeEnum.DIFFICULTY,
        difficulty:
          '현재 위치를 알기 위해 Geolocation Web API의 watchPosition 함수를 사용하는 hook을 작성하였는데 해당 hook에서 사용하는 state의 변경이 많이 일어나 상태관리가 어려웠음.',
        effort:
          'watchPosition을 처음 사용해보았고 해커톤에 주어진 개발 시간이 부족하여 hook을 다시 짤 시간이 부족하였음. 따라서 state를 ref object로 변경하여 처리하였음.',
        result:
          '너무 많은 state들이 엉켜있었고, hook 간의 의존성이 높아 각 hook 간의 의존성을 낮춰 상태관리를 더 잘할 수 있는 여지가 남은 것 같아 아쉬움.',
      },
    ],
    duration: '2022.09 ~ 2022.09',
    iconImage: '',
    github: 'https://github.com/CU-Team/front-end',
    link: 'https://www.notion.so/unit-center/CU-bf75a6ad0e064679a111075614ce1e63',
    tech: [
      { id: 0, name: 'React' },
      { id: 1, name: 'Next.js' },
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
      'WebRTC를 이용하여 송출용 기기의 영상을 여러 기기로 운동 영상 라이브 스트리밍을 제공하는 서비스.\n' +
      'WebRTC를 제외한 대부분의 기능, 특히 VOD 동영상 플레이어 기능을 전담하여 개발.',
    detail: [
      {
        id: 0,
        title: '동영상 플레이어 상태관리',
        content:
          '동영상 현재 재생 시간을 state로 관리하여 발생한 성능 이슈를 해결함.',
        type: ProjectDetailTypeEnum.DIFFICULTY,
        difficulty:
          'VOD 동영상 플레이어 부분 개발 당시 React의 state 개념이 부족함. 현재 재생 시간을 state로 관리하여 해당 state를 dependency로 가지고 있던 모든 컴포넌트들이 성능 이슈를 발생 시켜 롤백함.',
        effort:
          'React 공식 문서를 통해 useState와 useRef를 알고 state를 ref object로 변경함. 또한 재렌더링이 필요한 부분에 대해서만 컴포넌트를 따로 생성하여 상태 관리함.',
        result:
          '자주 변경되는 값에 대해서는 state보다는 ref object로 관리하는 것이 좋다는 것을 배움. 또한 useCallback에 대해 알고 필요한 부분에만 dependency에 추가하여 사용하게 됨.',
      },
      {
        id: 2,
        title: 'Container - Presenter 패턴으로 리팩터링',
        content:
          '하나의 파일로 관리하던 컴포넌트를 Container - Presenter 패턴을 적용하여 리팩토링함.',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '하나의 파일에서 로직과 UI를 모두 작성하여서 비즈니스 로직이 변경될 때 수정해야하는 부분을 찾기가 어려웠음.',
        effort: 'Container - Presenter 패턴을 알고 적용하여 리팩토링함.',
        result:
          '데이터의 사용 및 조작, 비즈니스 로직 등을 Container에서 구현, UI 및 사용자의 상호작용을 Presenter에서 나누어 구현함으로써 관심사의 분리를 만들어 코드의 변경이 필요할 때 보다 쉽게 수정할 부분을 찾을 수 있었음.',
      },
      {
        id: 3,
        title:
          '움직이는 이미지를 보여주는 기획을 통해 배운 동영상 vs GIF 이미지',
        content:
          '움직이는 이미지를 GIF 이미지에서 MP4 동영상으로 변경을 통한 UX 개선',
        link: '/pdfs/dash-and-buffer.pdf',
        type: ProjectDetailTypeEnum.DIFFICULTY,
        difficulty:
          'GIF로 움직이는 이미지를 보여줄 때 파일의 크기가 커서 화면에 보여지는데 오래 걸려 UX가 좋지 못하다고 생각함.',
        effort:
          '처음에는 WEBP 확장자로 변환하여 올려봤으나 여전히 이미지가 모두 다운로드되기 전까지는 빈 화면을 보여줌. 그래서 팀장님께 조언을 구했고 동영상으로 변경하면 최소 버퍼가 다운로드 되면 동영상이 실행되기 때문에 비교적 빠르게 사용자에게 화면을 보여줄 수 있음을 배움.',
        result:
          'GIF 이미지를 동영상으로 변경하여 UX를 개선함. 또한 버퍼에 대해 공부하여 최소 버퍼를 설정하여 더욱 빠르게 미디어를 제공하기 위해 노력함.',
      },
    ],
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
      '시각장애인을 위해 음성으로 어플리케이션과 상호작용하며 출발지역과 목적지역을 입력하면 최소환승 경로를 안내.\n' +
      '실시간으로 사용자가 탑승한 지하철의 위치를 파악하여 목적지역 도착 3개전에 내릴 수 있도록 음성과 진동으로 안내.\n' +
      '가장 가까운 출구의 위치를 사용자가 탑승한 지하철의 칸 번호와 비교하여 사용자가 좌우 중 어느 방향으로 가야하는지 음성으로 안내.\n' +
      '아두이노의 비콘 모드를 활용하여 각 지하철 스크린도어 상단에 비콘을 설치했다는 가정하에 실시한 프로젝트.\n' +
      '지하철의 인식, 최소환승 경로, 실시간 위치, 음성인식 등 비콘과 관련되지 않은 프론트엔드 개발 담당.\n' +
      '백엔드 없이 서울 열린 데이터 광장의 실시간 지하철 위치정보 API, 최소환승 경로 API, 지하철 정보 API 세가지 공개 API를 활용하여 개발.\n' +
      '음성인식은 React-Native-Voice로 개발, 음성출력은 React-Native-TTS로 개발.\n' +
      '숭실대학교에서 주최한 제 11회 숭실 캡스톤 디자인 경진대회 은상 수상.',
    detail: [
      {
        id: 0,
        title: 'React-Native-Beacon 패키지와의 Dependency 문제',
        content:
          'React-Native-Beacon과 React Native 0.63 버전의 android depedency가 맞지 않아 패키지를 수정해야하는 문제를 해결함.',
        type: ProjectDetailTypeEnum.DIFFICULTY,
        difficulty:
          'React-Natvie-Beacon 패키지의 android dependency가 이전 버전이라 npm install마다 패키지를 수정해야하는 문제가 있었음.',
        effort:
          '최초에는 패키지를 직접 수정하여 build 오류를 해결하였으나 patch-package를 활용하여 해결함.',
        result:
          '매 npm install마다 패키지를 수정해야하는 번거로움을 없애고 개발에 몰두 할 수 있었음.',
      },
      {
        id: 1,
        title: '서울 열린 데이터 광장 공개 API 활용',
        content:
          '지하철 실시간 위치, 지하철 역 별 정보, 지하철 역 간의 최소환승 경로를 알기 위한 공공 서울 열린 데이터 공개 API 활용.',
        type: ProjectDetailTypeEnum.EFFORT,
        difficulty:
          '백엔드 없이 공개 API로만 진행하는 프로젝트. 공개 API들 간에 지하철 정보를 위한 key 값들이 모두 달라서 각 key값을 통해 프론트엔드에서 필요한 데이터를 join하는데 어려움을 겪음.',
        effort:
          '각 API 제공 문서를 읽으며 필요한 데이터를 얻기 위해 js 함수를 사용하여 데이터를 가공함.',
        result:
          '해당 공개 API가 공공의 정보를 제공함에 있어서 장점도 있지만 내가 필요한 데이터를 얻기 위해서는 비교적 많은 함수를 사용하여 가공해야함을 느낌.',
      },
    ],
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
      'Svelte의 이해보다는 사용에 초점을 두고 개발한 간단한 프로젝트.\n' +
      '사내 제비뽑기를 통한 점심 값 내기에서 아이디어가 떠올라 개발.\n' +
      'Svelte, Javascript로 개발. Netlify로 배포.',
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
      '스스로 헬스할 때 세트수를 자주 잊어버려 개발.\n' +
      '다른 운동하시는 분들이 휴대폰으로 쉬는 시간을 측정하는 것을 보고 "쉬는 것까지 한 세트이다"라는 생각으로 쉬는 시간이 끝나면 한 세트가 추가되는 비즈니스 로직 구현.\n' +
      'React와 Javascript로 개발. AWS S3에 올려 배포하였으나 AWS에서 Cloudfront 비용을 청구하여 사용자 대비 비용이 많이 나와 배포 철회.',
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

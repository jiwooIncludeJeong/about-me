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
          title: 'WebView 시스템 구축',
          content:
            'React-Native-WebView를 통해 기존의 웹 프로덕트를 웹뷰 앱으로 구현하였습니다. ' +
            '웹과 앱 사이의 이벤트 기반 시스템을 구현하였습니다. ' +
            '자세한 구현은 아래 링크에서 볼 수 있습니다.',
          link: 'https://velog.io/@jt_include_rw/series/React-Native-WebView',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 1,
          title: 'FCM 시스템 구축',
          content:
            'FCM 시스템 구현을 통해 다른 팀에서 앱푸시를 Flexible하게 사용할 수 있게 하였습니다. ' +
            '이로 인해 기존 카카오 플러스친구를 통해 보내던 CRM을 앱푸시로 바꾸어 고정비를 줄이고, 업무의 생산성을 높였습니다.',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 2,
          title: 'Link 시스템 구축',
          content:
            'Link 시스템 구현을 통해 카카오 플러스친구를 통해 CRM을 보내거나 광고를 통해 앱 내 링크를 전달할 경우에 ' +
            '원하는 페이지와 데이터를 앱 링크 URL에 함께 전달 할 수 있게 하였습니다. ' +
            '이로 인해 광고 시, 사용자에게 보여주고 싶은 페이지와 데이터를 앱 내로 전달 할 수 있었습니다.',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 3,
          title: 'React-Native 테스트 환경 구축',
          content:
            'React-Native에서 Jest를 이용한 단위 테스트와 Enzyme를 이용한 컴포넌트 테스트를 진행할 수 있도록 환경을 구축하였습니다. ' +
            'useState의 Mock함수도 만들어 hooks 테스트도 용이하게 구축하였습니다. 이를 통해 hooks나 유틸 함수 위주로 테스트하고자 하였습니다. ' +
            '또한 비즈니스 로직이 바뀌었을 경우에 대해 사이드이펙트를 알기 좋을 것이라 생각하여 테스트를 도입하고자 하였습니다.',
          link: '/pdfs/rn-test.pdf',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 4,
          title: 'WebView 시스템 구축',
          content:
            '이벤트명 기반의 WebView 시스템을 구축하였습니다. 하지만 웹에서는 추가한 이벤트명을 앱에서 추가하지 않아 앱 크래시를 경험하였습니다. ' +
            '원인은 이벤트명에 따른 핸들링 함수의 undefined 타입 체크하는 코드를 빠뜨렸기 때문입니다. ' +
            '다행히 Link와 FCM 시스템과 관련한 이벤트 핸들링 함수 처리를 하지 않은 것이라 두 이벤트의 사용을 미루고 웹에서 두가지 이벤트를 보내지 않는 것으로 처리하였습니다. ' +
            '이후 앱 사용자들 중 60%가 타입 체크 코드를 추가한 앱을 다운로드 받은 후 다시 웹 이벤트를 보냈습니다. ' +
            '이를 통해 테스트 케이스의 중요성과 타입 체크의 중요성을 깨닫게 되었습니다.',
          link: 'https://velog.io/@jt_include_rw/series/React-Native-WebView',
          type: ProjectDetailTypeEnum.DIFFICULTY,
        },
        {
          id: 5,
          title: 'React-Native 테스트 환경 구축',
          content:
            '테스트 환경을 구축했으나 실제 돌아가는 서비스는 웹뷰가 대부분이어서 테스트할 수 있는 유틸이나 hooks가 많이 없었습니다. ' +
            '또한 비즈니스 로직을 구현하는 리소스를 많이 소비하였기 때문에 테스트를 많이 하지는 못하였습니다. ' +
            '이러한 상황 때문에 테스트를 작성하는 것에 대한 연습은 많이 필요하다고 생각합니다.',
          link: '/pdfs/rn-test.pdf',
          type: ProjectDetailTypeEnum.DIFFICULTY,
        },
        {
          id: 6,
          title: '앱 심사 및 배포',
          content:
            'React-Native-WebView로 구현한 앱을 Android, iOS 모두 심사 준비 및 배포를 진행하였습니다. ' +
            '특히 iOS는 Notification(FCM) 기능과 이메일 로그인 기능을 추가하여 iOS의 심사규정을 통과하여 첫 심사만에 판매가능하게 되었습니다.' +
            ' 또한 마케팅팀과 협업하여 각 운영체제 모두 1만 다운로드를 1달만에 달성하였습니다.',
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
        '개인의 신체정보(인바디, 신장, 체중 등)과 활동정보(수면시간, 직업 등)을 통해 필요 영양성분을 진단하고 ' +
        '진단정보를 통하여 개인에 알맞은 식단을 구성, 구매, 배송까지 해주는 서비스.\n' +
        'Next.js와 Typescript로 개발, 상태관리 라이브러리 Recoil 사용.\n' +
        'Nginx와 Next.js를 Dockerize하여 AWS의 Elastic Beanstalk로 배포\n' +
        '개발 초반에 SSR에 대한 이해가 부족하여 CSR만 진행. 2022.09에 User 데이터에 대해 SSR을 도입\n' +
        'png로 사용하던 img를 webp로 최적화. ' +
        '이를 통해 Lighthouse에서의 LCP를 기존 4.7초에서 2.6초로 줄임',
      detail: [
        {
          id: 0,
          title: '웹 성능 최적화 - 애니메이션',
          content:
            '브라우저의 동작원리를 모르던 때에 작성한 애니메이션 코드들이 Reflow와 Repaint를 발생시켜 성능에 나쁜 영향을 미치고 있었습니다. ' +
            '그래서 위치나 크기를 변경 시키는 CSS 요소의 변화를 최소화하고 transform, opacity 사용으로 변경하여 브라우저가 아닌 GPU가 애니메이션에 관여하게 함으로써 웹 성능 최적화를 하기 위해 노력하였습니다. ',
          link: 'https://velog.io/@jt_include_rw/%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-1.-animation',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 1,
          title: '웹 성능 최적화 - 이미지',
          content:
            '이미지를 많이 보여주는 서비스의 특성 상 로그인 되어있는 상황에 서비스 첫 화면에서 식품 이미지를 최대 72개 다운받습니다. 이를 해결하기 위해 S3 저장소의 PNG, JPG 확장자를 가진 식품의 이미지를 비교적 용량이 작고 퀄리티는 높은 WEBP로 변환하였습니다.' +
            'Python으로 이미지를 변환하였습니다. S3 저장소에 이미지를 재업로드 하였습니다. 식품을 사용하는 img 태그를 picture 태그를 사용하는' +
            ' 컴포넌트를 만들어 사용하였습니다. pciture 태그를 사용한 이유는 WEBP 확장자를 지원하지 않는 브라우저가 존재하기 때문입니다.' +
            ' 또한 S3 저장소에 CloudFront를 추가하여 이미지 캐싱을 가능하도록 하였습니다. next/image를 사용할 수 있었지만 Remote 저장소에 있는 이미지를 다운로드 받아 ' +
            'next/image가 Sharp 패키지를 이용하여 WEBP로 변환하는 시간이 더 오래 걸렸기 때문에 위와 같이 작업하였습니다. next/image는 static 이미지에 적합하다고 생각하였습니다. ' +
            '또한 picture 컴포넌트에 intersectionObserver를 이용하여 이미지 lazy loading을 구현하였습니다. ' +
            '이것의 영향으로 LCP가 4.7초에서 2.6초로 떨어지는 성능향상을 경험할 수 있었습니다.',
          link: '/pdfs/optimization-image.pdf',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 7,
          title: '웹 성능 최적화 - 이미지',
          content:
            '이미지를 많이 보여주는 서비스의 특성 상 로그인 되어있는 상황에 서비스 첫 화면에서 식품 이미지를 최대 72개 다운받습니다. ' +
            '최초에는 AWS lambda 함수를 통해 S3에서 서비스 내에서 이미지를 불러올 때 Sharp 패키지를 이용하여 이미지 WEBP 변환과 리사이징을 시도하였습니다. ' +
            '하지만 이는 Remote 저장소에 있는 이미지를 가지고 와서 변환하는 시간이 더 오래 걸렸기 때문에 UX에 좋지 않다고 판단하여 기존 이미지를 사용하였습니다. ' +
            '이후 next/image를 사용하였으나 이 또한 같은 이유로 이미지가 느리게 로딩 되었고 UX에 좋지 않아 기존 이미지를 사용하였습니다. ' +
            '결론적으로 S3에 변환한 WEBP 이미지를 업로드 후 캐싱하여 사용하는 것으로 해결할 수 있었습니다.',
          link: '/pdfs/optimization-image.pdf',
          type: ProjectDetailTypeEnum.DIFFICULTY,
        },
        {
          id: 2,
          title: 'Storybook 도입',
          content:
            '디자이너와의 소통, 프론트엔드 개발자 내 소통을 위하여 자주 사용하는 컴포넌트를 약속한 Storybook을 작성하였습니다. ' +
            '또한 디자이너도 개발된 컴포넌트를 보고 컴포넌트를 interaction 할 수 있도록 S3에 upload ➡️ AWS CloudFront ➡️ AWS Route53로 배포하였습니다. ' +
            '또한 컴포넌트 기반으로 코드를 작성하는데에도 도움이 되었습니다.',
          link: 'https://storybook.shipdan.me/?path=/story/welcome--page',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 3,
          title: '스크래퍼를 통한 식단 이미지 다운로드 자동화',
          content:
            '사용자에게 일주일치 식단을 뽑아주는 실험이 있었습니다. 실험을 위해 스크린샷을 위해 필요한 페이지를 만들었습니다. 디자이너 두 분께서 구매자들의 식단을 ' +
            '일일이 스크린샷하는데 매주 금요일 4시간의 리소스를 사용하였습니다. 그들의 리소스가 아까웠던 저는 html2canvas를 이용하여 다운로드 버튼을 추가하였습니다. 이를 통해 2시간으로 리소스를 단축할 수 있었습니다. ' +
            '하지만 구매자가 늘어날 수록 리소스는 다시 3~4시간이 들었고 저는 스크래퍼를 통해 해당 작업을 자동화하면 어떨까라는 생각을 하여 팀장님께 건의하였습니다. ' +
            '팀장님과 함께 셀레니움을 이용하여 스크래퍼를 만들었고 스크래핑을 위한 super user를 생성하여 모든 구매자의 식단을 15분만에 다운로드 받을 수 있게 되었습니다. ' +
            '단계적 자동화를 통해 두 사람이서 "4시간"이 필요한 리소스를 단 "15분"으로 단축할 수 있었습니다. 또한 이 때부터 팀원들의 불필요한 리소스를 개발을 통해 ' +
            '단축할 방법을 찾기 위해 노력했습니다.',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 4,
          title: 'Typescript의 Union TypeGuard에 대한 고민',
          content:
            '백엔드에서 데이터 타입을 model 그대로 준 때가 있습니다. 그 때 object 혹은 number인 Union Type이 있었습니다. ' +
            '해당 타입을 처리하기 위해 고민하였고 is[OBJECT_NAME]Type이라는 Type Checking 함수를 추가하여 처리하였습니다.',
          link: '/pdfs/typeguard.pdf',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 5,
          title: '동적 페이지의 key 값의 중요성',
          content:
            '서비스의 PMF를 찾기 위해 시도한 실험 중에 id에 따라 변해야하는 동적 페이지가 있었습니다. 이 때 URL은 변경 되었지만 ' +
            '페이지를 재렌더링이 되지 않는 문제가 발생하였고 동적 페이지에 key 값을 추가하여 해결하였습니다.',
          link: '/pdfs/dynamic-page-key.pdf',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 6,
          title: 'TDD',
          content:
            '유틸 함수 혹은 hooks의 경우에 내 예상과 같이 동작하는지 화면에 찍거나 콘솔을 찍지 않고 알고 싶었습니다. ' +
            '그래서 SignIn 페이지를 예시로 한 페이지를 어떻게 테스트할 것인가, 테스트 주도 개발을 할 것인가에 대한 컨셉을 정리하였습니다. ' +
            'Container - Presenter 패턴을 사용하는데 Container는 렌더링이 잘 되는가에 초점을 맞추고 Presenter는 사용자 행동에 따라 화면을 어떻게 보여주는가에 대해 초점을 맞추어 ' +
            '테스트를 합니다.',
          link: '/pdfs/tdd.pdf',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 8,
          title: 'TDD',
          content:
            '카카오 로그인을 위해 필요한 Window 객체 내 Kakao 객체가 undefined, Axios Instance를 테스트 코드에서 만들 수 없어서 테스트에 에러가 발생하였습니다. ' +
            '각각 해당 객체를 사용하는 Kakao 객체를 사용하는 함수를 mocking, Axios Instance를 axios-mock-adapter 라이브러를 이용하여 mocking 하여 해결하였습니다. ' +
            '하지만 테스트를 지속적으로 하지는 못하여서 아쉬움이 남아있습니다.',
          link: '/pdfs/tdd.pdf',
          type: ProjectDetailTypeEnum.DIFFICULTY,
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
        '마이쉽단 서비스의 입점 업체와 발주/입고/정산을 위한 서비스\n' +
        '첫 버전은 Core UI의 무료 템플릿을 통해 Javascript로 개발. 상태관리 라이브러리 Recoil 사용.' +
        'AWS S3 ➡️ AWS CloudFront ➡️ AWS Route53로 배포 진행\n' +
        '두번째 버전은 Next.js, Typescript로 개발, Nginx와 Next.js를 Dockerize하여 Elastic Beanstalk로 배포(진행 중)',
      detail: [
        {
          id: 0,
          title: '패키지 내 아이콘 import',
          content:
            '백엔드에서 Core UI의 아이콘명을 string으로 프론트엔드에 전달합니다. 프론트엔드에서는 알맞은 아이콘을 아이콘명으로 매칭하여 사용하기 위하여 Core UI의 icons를 모두 import 했습니다.' +
            '그랬더니 JS 번들의 파일 크기가 약 10MB 정도로 커져서 다운로드 시간이 굉장히 오래걸렸습니다. JS 번들 분할을 고려했지만 리소스가 부족하다고 판단하였습니다. ' +
            'CDN을 찾아보려했으나 찾지 못하였고 다른 icon CDN을 찾아서 해결하였습니다. Awesome Font의 icon을 사용하기로 백엔드와 약속하고 진행하였습니다. 이후 Webpack Bundle Analyzer로 번들을 분석했습니다. ' +
            '사용하지 않는 icon도 모두 import 되어 JS 번들의 크기가 커졌던 것을 알 수 있었습니다. CDN으로 변경하였을 때 JS 번들의 크기가 1MB 이하로 떨어져 사용자들에게 빠르게 화면을 보여줄 수 있었습니다. ',
          type: ProjectDetailTypeEnum.DIFFICULTY,
        },
        {
          id: 1,
          title: 'Webpack Bundle Analyzer',
          content:
            'JS 번들을 분석하기 위해 설치하였습니다. 이를 통해 사용하지 않는 icon을 모두 import 했음을 알 수 있었습니다. 또한 Webpack5에서 지원하는 tree shaking이라는 것을 알고 ' +
            'React-Native의 번들러에서는 tree shaking을 지원하지 않 Typescript의 enum 사용에 유의해야함을 알 수 있었습니다. 그래서 React-Native에서는 enum을 사용하지 않고 const를 선언하여 사용하였습니다.',
          type: ProjectDetailTypeEnum.EFFORT,
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
            'Next.js, Typescript, eslint, prettier, babel을 세팅한 프로젝트 보일러플레이트를 생성했습니다. 항상 첫 프로젝트는 세팅하는데 많은 시간이 걸렸습니다. ' +
            '이 시간을 절약하면 효율적일 것 같다고 생각하여 평소 보일러플레이트를 git hub에 생성해두고 clone하여 사용합니다. 함께 협업하는 프론트 엔드 개발자 분도 같은 환경에서의 작업이 익숙하다고 하였습니다.' +
            ' 시간이 부족한 해커톤 특성 상 해당 보일러플레이트를 활용하면 다른 곳에 시간을 사용할 수 있을 것 같아 사용하였습니다. 그로 인해 다른 작업에 많은 시간을 사용할 수 있었고 ' +
            '함께 협업한 개발자분도 만족을 표했습니다.',
          link: 'https://github.com/jiwooIncludeJeong/init_nextjs',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 1,
          title: '협업을 위한 컨벤션 정하기',
          content:
            '다른 개발자분은 어떠한 방식으로 코딩하는지 배우고자 하는 목적으로 다른 개발자분의 컨벤션을 많이 적용하여 개발하였습니다. Styled Component를 최상단에 감싸고 ' +
            '클래스명 선택자로 스타일을 적용하는 것이 같은 코드의 반복이 많다는 점에서 컴포넌트를 재활용하기에 좋지 않다고 생각하였습니다. 그럼에도 불구하고 스스로 부족하다고 생각하는 ' +
            '선택자를 공부할 수 있을 것 같아 컨벤션을 수용하였습니다. 프로젝트를 마치고 협업한 개발자분께 제가 느낀 컨벤션의 부정적인 면에 대해 토의하였습니다. 그 분은 재활용할 때 컴포넌트로 변경한다고 말씀하셨고, ' +
            '저도 일정부분 이해할 수 있었습니다. 프론트엔드 개발자와의 협업과 토의하는 과정이 정말 즐겁게 느껴졌습니다.',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 3,
          title: '카카오 맵 Open API',
          content:
            '위치기반 서비스 특성 상, 지도 API를 사용해야했습니다. 카카오 로그인 기능을 사용할 것이라 카카오 맵 API를 사용하였습니다. ' +
            '지도 관련 서비스는 처음이라 overlay를 커스텀하는데 어려움이 있었습니다. overlay를 html형식의 string으로 커스텀해야했는데 이를 위해 css를 만들어 _app.tsx에서 import 하였습니다. ' +
            '또한 overlay를 상태에 따라 onclick 함수가 다른데 카카오 맵은 js로 동작하기 때문에 state가 없어 hook 내에서 처리하였습니다. ' +
            '현재 위치를 알기 위해 geolocation API의 watchPosition을 사용하였는데 이것이 재렌더링을 많이 일으켜 현재 위치는 RefObject로 처리하였습니다. 하지만 너무 많은 state가 엉켜있고, hook 간의 의존도가 높아' +
            ' 상태관리를 더 잘할 수 있는 여지가 남은 것 같아 아쉽습니다.',
          type: ProjectDetailTypeEnum.DIFFICULTY,
        },
        {
          id: 4,
          title: '한 페이지 내 모달 처리',
          content:
            'hook 간의 의존도가 높아 상태관리에 어려움이 있었지만, 앱과 같은 사용자 경험을 위해 페이지 간 이동을 animation modal로 처리한 부분이 개인적으로는 아쉽습니다. 이로 인해 한 페이지 내에서 너무 많은 state가 선언되었고 ' +
            'modal이 열리고 닫힐 때마다 useEffect의 dependency에 open state를 처리해줘야하는 보일러플레이트가 생겨서 아쉽다고 느꼈습니다.',
          type: ProjectDetailTypeEnum.DIFFICULTY,
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
          title: '미디어 플레이어 상태관리',
          content:
            'React의 state의 개념이 부족할 당시에 VOD 동영상 플레이어 부분의 개발을 맡았습니다. 그래서 미디어의 현재 실행 시간을 state로 관리하였고 useEffect의 dependency에 해당 state가 ' +
            '있는 부분이 많았습니다. 이로 인해 성능 이슈가 발생하였고 QA 과정에서 롤백이 결정되었습니다. React 공식 문서를 통해 useState와 useRef를 공부하였습니다. ' +
            '기존의 state를 ref로 변경하였고 state 변화가 필요한 부분만 state로 사용하였습니다. 또한 재렌더링이 필요한 부분인 미디어플레이어에서 현재 재생 시간, 남은 시간 등에 대해서는 ' +
            '컴포넌트를 따로 생성하여 해당 컴포넌트만 재렌더링이 발생하도록 처리하여 성능 이슈를 해결하였습니다. 그로 인해 변경한 동영상 플레이어가 프로덕트에 반영될 수 있었습니다.',
          type: ProjectDetailTypeEnum.DIFFICULTY,
        },
        {
          id: 2,
          title: 'Container - Presenter 패턴으로 리팩터링',
          content:
            '기존의 프로젝트는 하나의 파일에 로직을 구현하는 부분과 화면에 보여지는 부분을 포함한 구조였습니다. 이를 Container - Presenter 패턴을 적용하였습니다. ' +
            'Container에서는 데이터의 사용 및 조작, 비즈니스 로직 구현 등을 담당하였고 Presenter는 화면에 보여지는 부분과 사용자와 상호작용하는 부분을 담당하여 분리하였습니다. ' +
            '관심사의 분리를 만들 수 있었고, 코드의 변경이 필요할 때 알맞은 곳을 수정할 수 있었습니다.',
          type: ProjectDetailTypeEnum.EFFORT,
        },
        {
          id: 3,
          title: 'MP4 vs GIF',
          content:
            '움직이는 이미지를 화면에 보여주는 기획이 있었습니다. 디자이너님이 GIF 확장자 파일을 주셨습니다. 이는 파일의 크기가 너무 커 ' +
            '화면에 보여지는 데까지 시간이 오래 걸렸습니다. 저는 GIF를 WEBP 확장자로 변경하였지만 이 또한 모든 GIF를 일일이 변경하기에는 시간이 많이 들었습니다. ' +
            '동영상의 경우에는 최소 버퍼가 다운로드 되면 미디어가 실행된다는 점을 알고 디자이너님께 MP4 확장자로 변환을 요청하여 사용자에게 빠르게 보여줄 수 있도록 변경하였습니다. ' +
            '또한 최소 버퍼를 작게 설정하여 더욱 빠르게 사용자에게 미디어를 제공하였습니다. 동영상 버퍼에 대해 알 수 있었습니다.',
          link: '/pdfs/dash-and-buffer.pdf',
          type: ProjectDetailTypeEnum.DIFFICULTY,
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
            'React-Native 0.63 버전을 사용하여 개발하였습니다. 하지만 Beacon과의 통신을 위해 사용하는 React-Native-Beacon 패키지의 안드로이드 버전' +
            ' Dependency가 React-Native 0.63 버전과 맞지 않아 build를 할 때마다 오류가 발생하였습니다. 최초에는 node_modules 내 React-Native-Beacon ' +
            '패키지를 직접 수정하여 build 오류를 해결하였으나 새로운 npm 패키지를 설치 혹은 npm install할 때마다 수정해야하는 번거로움이 있었습니다.' +
            ' 검색을 통해 package-patch 패키지의 존재를 알고 npm 실행에 관계 없이 node_modules 내 수정한 코드가 변경되지 않도록 하여 문제를 해결했습니다. ',
          type: ProjectDetailTypeEnum.DIFFICULTY,
        },
        {
          id: 1,
          title: '서울 열린 데이터 광장 OPEN API',
          content:
            '지하철 실시간 위치, 지하철 역 별 정보, 지하철 역 간의 최소환승 경로를 알아야했습니다. ' +
            '또한 각 지하철 역 별 foreign key로 사용할 id가 필요했습니다. 그래서 서울 열린 데이터 광장에서 제공하는 OPEN API를 사용하여 각 정보를 얻었습니다. ',
          type: ProjectDetailTypeEnum.EFFORT,
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

  return <Presenter data={data} {...props} />;
};

export default ProjectsArea;

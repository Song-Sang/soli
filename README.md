# 'Soli-jang' Web Protfolio Project

<br/>

# 1. Project Outline
<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/61170b18-6656-4473-b565-65cc144c1b35" alt="이미지 1" width="310"></td>
    <td><img src="https://github.com/user-attachments/assets/afcbb2a9-e02b-4927-b987-2053dc30d258" alt="이미지 2" width="310"></td>
    <td><img src="https://github.com/user-attachments/assets/d417a883-114b-4928-847f-a6a3d818404b" alt="이미지 3" width="310"></td>
  </tr>
  <tr>
    <td align="center">HOME PAGE</td>
    <td align="center">WORKS PAGE</td>
    <td align="center">TITLE PAGE</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/73554d2c-207c-4133-a070-340f549a02c2" alt="이미지 5" width="310"></td>
    <td><img src="https://github.com/user-attachments/assets/09151dba-8a58-4616-b7fb-7ac6ebc0c718" alt="이미지 6" width="310"></td>
    <td><img src="https://github.com/user-attachments/assets/54ec9d19-aa43-45bd-9fca-12485ee8eb45" alt="이미지 4" width="310"></td>
  </tr>
    <tr>
    <td align="center">IMAGE MODAL</td>
    <td align="center">ABOUT PAGE</td>
    <td align="center">CONTACT PAGE</td>
  </tr>
</table>

<br/>

# 2. Tech Stack
### Development
<div>
  <img height='26px' src='https://img.shields.io/badge/nextjs14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/sass-cc6699?style=for-the-badge&logo=sass&logoColor=white' />
</div>

### Library
<div>
  <img height='26px' src='https://img.shields.io/badge/zustand-f7a4ad?style=for-the-badge&logo=zustand&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/classnames-031b4e?style=for-the-badge&logo=classnames&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/email--js-3A8D3D?style=for-the-badge&logo=email&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/react--lottie--player-00A3E0?style=for-the-badge&logo=lottie&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/react--slick-6A6A6A?style=for-the-badge&logo=react&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/react--toastify-3E8E41?style=for-the-badge&logo=react&logoColor=white' />
</div>

### Deploy & Tool
<div>
  <img height='26px' src='https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white' />
  <img height='26px' src='https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white' />
</div>

<br/>

# 3. Features
### ALL PAGE
- 모바일 및 태블릿 장치에 최적화된 반응형 UI 구현.

### NAV MENU
- 홈 페이지로의 라우팅, 각 메뉴 페이지로의 라우팅, 현재 페이지 표시.

### HOME PAGE
- 각 페이지로 라우팅되는 메뉴 목록 렌더링.
- PC 화면에서 메뉴에 마우스를 올릴 때 추가 UI 표시.

### WOKRS PAGE
- 테마별로 라우팅된 프로젝트 제목 목록 렌더링.
- 각 제목은 카테고리별로 두 개의 슬라이드로 렌더링.
- 제목 목록이 길어 스크롤이 필요한 경우, 스크롤은 제목 목록 영역에만 적용.
- 제목 목록 영역에서 스크롤이 발생할 때, 화면 크기에 따라 스크롤 가능성을 나타내는 로딩 애니메이션이 화면 오른쪽 하단에 렌더링.

### TITLE PAGE
- 각 프로젝트의 설명, 이미지 슬라이드, 역할 및 멤버 목록 렌더링.
- 이미지를 클릭하면 이미지를 하나씩 볼 수 있는 확대 모달이 열림.
- 페이지 상단으로 스크롤하는 버튼 기능.

### CONTACT PAGE
- 발신자 정보를 입력하여 이메일을 받을 수 있는 기능.
- 필수 입력 정보가 올바르지 않을 경우 경고 메시지 표시.
- 이메일, 전화번호, 인스타그램과 같은 직접 연락처 정보.

<br/>

# 4. Problems & Solutions
### 이미지 랜더링 로딩 문제
- **문제**  
  - 이미지 중심의 프로젝트로 고화질 이미지가 많아 정적 배포 방식을 선택하고, Next.js의 Image 태그로 랜더링해도 페이지 로딩 시간이 길어져 사용자 경험에 부정적인 영향.

- **해결**  
  - 이미지 형식을 PNG에서 WebP로 변경.
  - 원본 이미지 크기 최적화.
  - 이미지가 다량으로 랜더링되는 페이지에서는 모든 이미지가 로딩되기 전에 로딩 화면을 표시.

### 데이터 관리 문제
- **문제**
  - 정제되지 않은 자료와 주제별로 일관성이 없는 형식의 데이터 제공.
  - 카테고리가 여러가지인 타이틀 존재.

- **해결**  
  - 최대한 일관된 형식의 초기 데이터 요청.
  - 모든 주제를 포함할 수 있는 적절한 프로퍼티 이름으로, 값 사용 시점을 고려한 객체 및 배열 구조 설정.

- **개선**  
  - 데이터 구조가 카테고리별 배열로 정리되어 있어서, 카테고리가 여러개인 타이틀의 경우 중복으로 데이터가 정리되고, 현재 코드는 데이터 사용 시점에 필터링하여 하나만 랜더링하게 되어 있음.
  - 데이터 구조를 개선하면 데이터베이스를 압축할 수 있을 것으로 생각.

### 디바이스별 호버 관련 이벤트 문제
- **문제**  
  - PC 화면을 우선으로 개발하여 호버를 이용한 이벤트가 많이 사용되었으나, 반응형 UI 개발이 시작되면서 PC 외의 디바이스에서 호버를 비롯한 몇몇 이벤트가 원하는 대로 동작하지 않는 것을 확인.

- **해결**  
  - 디바이스 구분 코드를 통해 PC에서만 해당 이벤트가 동작하도록 수정
  - 터치 디바이스에서는 다른 이벤트로 기능을 대체

- **개선**  
  - 호버 이벤트를 기준으로 디자인을 진행했기 때문에, 다른 이벤트로 대체했을 때 디자인적으로 부정적인 부분 존재.
  - 향후 프로젝트 진행 시 디자인 단계에서 이러한 부분을 고려해야 한다고 생각.
  - 또한 터치 디바이스에서 호버를 대체할 적절한 이벤트를 찾아보아야 할 것.


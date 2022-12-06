# Milliman Toy Project

Resizable Collapse TreeView

## 1. 프로젝트 소개

### 프로젝트 목표

- 3개의 컴포넌트를 제작 후 조합하여 일렉트론 앱 제작
- 3개의 컴포넌트는 각 package에 포함
  - Resizable([re-resizable](https://www.npmjs.com/package/re-resizable))
  - Collapse([antd](https://ant.design/components/collapse))
  - TreeView([material-ui](https://mui.com/material-ui/react-tree-view/))

### 기술 스택

- JavaScript
- React
- Electron

### 사용한 라이브러리 및 도구

- re-resizable
- antd
- material-ui
- uuid

## 2. 프로젝트 실행 방법

### 필수 기능 버전

```git
git clone https://github.com/okdol1/Electron-App.git
cd Electron-App
npm install
npm run electron:serve
```

### 추가 기능 버전

```git
git clone https://github.com/okdol1/Electron-App.git
cd Electron-App
git checkout -b dev
git pull origin dev --rebase
npm install
npm run electron:serve
```

## 3. 프로젝트 구현 화면

### 필수 기능

![custom-titlebar](https://user-images.githubusercontent.com/76744586/205821726-8ebe9268-eaf0-495a-8fc1-d4b349d2d278.gif)

- Title bar
  - 넓이 960, 높이 30
  - 가운데에 Title 위치
  - electron 기본 titlebar는 hide

![collapse treeview](https://user-images.githubusercontent.com/76744586/205822170-5e9602b1-0e6c-4a7c-b4a4-0d5f7839b721.gif)

- Side bar / Collapse
  - 넓이 230, 높이 23
  - 2개의 category로 구성
  - antd의 collapse 컴포넌트 이용
- Side bar / TreeView
  - 초기의 Tree View는 넓이 230, 높이 277
  - Folder 1, Folder 2 로 구성 되며 Folder 2 는 File 1 ~ File 10 의 children을 가짐
  - material ui의 Tree View 컴포넌트를 이용

![resizable](https://user-images.githubusercontent.com/76744586/205822007-8369e961-df0b-49d7-b41a-169e653358a4.gif)

- Side bar / Resizable
  - Category 1과 Category 2 사이는 Resize가 가능하도록 구현
  - Drag and Drop으로 원하는 만큼 조절
  - Category 1의 내용이 크기가 줄어들었을 때, Tree View에 스크롤바 생성
  - re-resizable 패키지의 resizable 컴포넌트를 이용
  - Side bar 넓이(width)의 사이즈 조절

### 추가 기능

![category-create](https://user-images.githubusercontent.com/76744586/205822847-0525d320-3024-4828-ba64-43f9f5bca604.gif)

- Category Create
  - Add 버튼을 클릭했을 때 하단에 new Category를 생성하는 input, button 구현
  - Add 버튼을 한 번 더 클릭했을 때 form이 닫히며 input text는 초기화
  - input의 text가 비어있을 시 create 버튼 비활성화
  - create 버튼 클릭 시 new Category가 생성됨

![category-remove](https://user-images.githubusercontent.com/76744586/205822855-6d1feecd-d815-4ce1-bdfa-07d5f2e711e3.gif)

- Category Delete
  - Delete 버튼을 클릭했을 때 Confirm 창 표시
  - Confirm true 선택했을 때 해당 Category 삭제

![category-update](https://user-images.githubusercontent.com/76744586/205822862-83d35acd-ea9c-4976-aaf7-2bf71288cfd9.gif)

- Category name Update
  - Update 버튼을 클릭했을 때 Category name을 input으로 변경
  - 기존 Category name이 input value 값으로 설정
  - edit 버튼을 클릭했을 때 Category name 수정

![folder-create](https://user-images.githubusercontent.com/76744586/205822870-fcb27b7e-ef15-42c7-932c-e4e873954ec1.gif)

- Create Folder
  - Tree View 상단에 Add Folder 버튼 위치
  - Add Folder 버튼을 클릭했을 때 new Folder를 생성하는 input, button 구현
  - input의 text가 비어있을 시 create 버튼 비활성화
  - create 버튼을 클릭했을 때 new Folder가 생성됨

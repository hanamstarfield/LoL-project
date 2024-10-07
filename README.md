## :pushpin: 롤 백과사전

Riot API를 이용하여 리그오브레전드의 정보를 볼 수 있는 페이지입니다.

## :pushpin: 배포 링크

https://lo-l-project.vercel.app

## :pushpin: 프로젝트 구조

<details><summary>폴더 구조</summary>
src<br>
 ┣ app<br>
 ┃ ┣ api<br>
 ┃ ┃ ┗ rotation<br>
 ┃ ┃ ┃ ┗ route.ts<br>
 ┃ ┣ champions<br>
 ┃ ┃ ┣ [id]<br>
 ┃ ┃ ┃ ┗ page.tsx<br>
 ┃ ┃ ┣ error.tsx<br>
 ┃ ┃ ┣ loading.tsx<br>
 ┃ ┃ ┗ page.tsx<br>
 ┃ ┣ fonts<br>
 ┃ ┃ ┣ GeistMonoVF.woff<br>
 ┃ ┃ ┗ GeistVF.woff<br>
 ┃ ┣ items<br>
 ┃ ┃ ┣ error.tsx<br>
 ┃ ┃ ┣ loading.tsx<br>
 ┃ ┃ ┗ page.tsx<br>
 ┃ ┣ rotation<br>
 ┃ ┃ ┗ page.tsx<br>
 ┃ ┣ favicon.ico<br>
 ┃ ┣ global-error.tsx<br>
 ┃ ┣ globals.css<br>
 ┃ ┣ layout.tsx<br>
 ┃ ┣ loading.tsx<br>
 ┃ ┗ page.tsx<br>
 ┣ styles<br>
 ┃ ┗ types<br>
 ┃ ┃ ┗ utils<br>
 ┃ ┃ ┃ ┗ public<br>
 ┣ type<br>
 ┃ ┣ Champion.ts<br>
 ┃ ┣ ChampionDetail.ts<br>
 ┃ ┣ ChampionRotation.ts<br>
 ┃ ┗ Item.ts<br>
 ┗ utils<br>
 ┃ ┣ riotApi.ts<br>
 ┃ ┗ serverApi.ts<br>
</details>

## :pushpin: 개발환경

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## :pushpin: 주요 기능

### 홈페이지

![alt text](image.png)

### 챔피언 목록

![alt text](image-1.png)

### 로테이션

![alt text](image-2.png)

### 챔피언 상세

![alt text](image-4.png)

### 아이템 목록

![alt text](image-3.png)

### 반응형

![alt text](image-5.png)

- 각 페이지의 로딩 페이지 구현
- 각 페이지의 에러 페이지 구현

## :pushpin: 트러블 슈팅

### 에러

GET http://localhost:3000/@/app/api/rotation 404 (Not Found)<br>
console.log를 통해 확인해보면 외부에서 Route handle로 데이터를 잘 가져오고있었다. 그런데 왜 컴포넌트 내에서 데이터를 가져오지 못할까?

### 해결

함수의 이름이 대문자가 아니여서 받아오지 못하는것이였다.
Next.js의 API라우트 시스템에서는 메서드 이름이 대문자로 시작해야하는 규칙이 있다.
소문자로 정의된 메서드는 Next.js가 인식하지 못하고 에러를 발생시킨다. 함수의 이름을 카멜 케이스로 수정하여 오류를 해결했다. 이러한 상황이 여러번 있었던 것 같다...

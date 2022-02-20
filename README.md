<div align="center">
  <h1>🌴제주 맛집 지도🥪</h1>
  <p>제주도 지역별 맛집추천</p>
</div>

1. [목표와 기능](#chapter-1)
2. [개발 환경 및 배포 URL](#chapter-2)
3. [프로젝트 구조와 개발 일정](#chapter-3)
4. [기능](#chapter-4)
5. [개발하면서 느낀점](#chapter-5)

<br>

## 🌴 1. 목표와 기능 <a id="chapter-1"></a>

<hr>
<br>

### 1.1 목표

- 제주 여행을 준비하는 사람들의 맛집 정보 공유
- 맛집의 홍수에서 본인에게 딱맞는 맛집 선정

### 1.2 기능

- 지역별 맛집을 찾아볼 수 있습니다.
- 원하는 메뉴 또는 지역을 간단하게 살펴볼 수 있습니다.
- 원하는 맛집은 좀 더 자세히 살펴볼 수 있습니다.
- 자신이 아는 맛집을 등록해서 소개할 수 있습니다.

<br>

## 🍊 2. 개발 환경 및 배포 URL <a id="chapter-2"></a>

<hr>
<br>

### 2.1 개발 환경

- 프론트 개발 환경: 바닐라js
- 백엔드 개발 환경: node.js

### 2.2 배포 URL

[제주 맛집지도] <a href="https://jeju-matzip.herokuapp.com/">https://jeju-matzip.herokuapp.com/</a>

<br>

## 🏝 3. 프로젝트 구조와 개발 일정 <a id="chapter-3"></a>

<hr>

### 3.1 프로젝트 구조

```
├── README.md
├── app.js
├── database
│   └── data.js
├── package-lock.json
├── package.json
├── resource
│   ├── static
│   │   ├── assets
│   │   │   ├── backgroung.jpg
│   │   │   ├── beach-3585794_1920.jpg
│   │   │   ├── cloud.png
│   │   │   ├── cloud2.png
│   │   │   ├── home-solid.svg
│   │   │   ├── jeju.png
│   │   │   ├── jejumap.png
│   │   │   ├── map
│   │   │   └── uploads
│   │   ├── css
│   │   │   ├── map.css
│   │   │   ├── reset.css
│   │   │   └── style.css
│   │   ├── font
│   │   │   ├── SF함박눈-TTF.ttf
│   │   │   └── tway_sky.ttf
│   │   └── javascript
│   │       └── index.js
│   └── template
│       ├── delete.html
│       ├── index.html
│       ├── post.html
│       ├── postdetail.html
│       └── write.html
├── router
│   └── blog.js
├── tree.txt
└── 요구사항.md
```

### 3.2 개발 일정

2022-02-01 ~ 2022-02-20

<br>

## 🏖 4. 메인 기능 <a id="chapter-4"></a>

<hr>

### 🍱 &nbsp; 소개하고 싶은 맛집을 등록할 수 있습니다.

> - 소개하고 싶은 맛집을 등록할 수 있습니다.
> - 자세히 소개하고 싶다면 상세페이지에서 자세한 내용을 확인할 수 있습니다.

### 🎯 &nbsp; 원하는 지역의 맛집정보를 찾아볼 수 있습니다.

> - 원하는 지역을 검색하여 해당하는 지역의 맛집 정보를 살펴볼 수 있습니다.
> - 원하는 지역이 없는 경우 제주 전체의 맛집을 살펴볼 수 있습니다.

<br>

## 👍 8. 개발하며 느낀점 <a id="chapter-5"></a>

<hr>

👩‍💼 이 프로젝트를 진행하면서 실무적으로는 백엔드의 서버가 어떤식으로 구축이 되고, 데이터가 어떤 식으로 들어가는지 짧게나마 배울 수 있었습니다.
그리고 앞으로도 좀 더 배울 수 있는 부분들은 계속 배워나가야겠다는 생각을 했습니다.
이건 내 분야가 아니다라는 생각보다는 이런것들을 배우면 어떤 부분에서 도움이 될 수 있겠다 라는 마음가짐으로 앞으로의 개발자로써의 길을 가야겠다는 생각이 들었습니다.
개발자는 계속 공부해야 하는 직업이라고 하는데, 그러한 부분이 힘들 수도 있고, 어려울 수도 있지만, 항상 배울 수 있다는 것은 항상 성장할 수 있는 기회가 있다라고 생각하고, 매일 조금이라도 성장할 수 있는 개발자가 되야겠다라고 생각하는 계기를 준 프로젝트였습니다.

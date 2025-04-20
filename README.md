# Components-lib

vite library mode를 사용해 React 컴포넌트 라이브러리를 구현하고 빌드 합니다.

컴포넌트 라이브러리 구현을 위해 아래의 패키지를 사용했습니다.

```md
vite-plugin-dts:
TypeScript의 타입 정의 파일(.d.ts)을 자동으로 생성해주는 Vite 플러그인입니다. 라이브러리 사용자가 TypeScript를 사용할 때 타입 지원을 받을 수 있게 해줍니다.

vite-plugin-lib-inject-css:
컴포넌트 라이브러리의 CSS를 자동으로 번들링하고 주입해주는 플러그인입니다. 라이브러리 사용자가 별도의 CSS 설정 없이도 스타일이 적용된 컴포넌트를 사용할 수 있게 해줍니다.

glob:
파일 시스템에서 패턴 매칭을 통해 파일들을 찾아주는 유틸리티입니다. 컴포넌트 파일들을 자동으로 찾아서 번들링할 때 유용하게 사용됩니다.
```

## 작업 방법

### 브랜치 생성

작업 진행을 위해 브랜치를 생성합니다.

### 배포 버전 설정

해당 작업이 배포 될 버전을 `package.json`에 작성합니다.
최종 배포 이전에는 0.0.1-alpha.1 처럼 alpha, beta 등 자유롭게 임시 버전을 사용합니다.

```json:package.json
{
  "version": "0.0.1-alpha.2",
}
```

### 디렉토리

lib 디렉토리 에서 작업을 시작합니다.
필요할 경우 하위 디렉토리를 추가해서 작업을 진행할 수 있습니다.

- `components`: 컴포넌트
- `utils`: 공용 유틸 함수
- `hooks`: 공용 리액트 훅

### 배포하기

작업이 완료될 경우 npm 배포를 진행합니다.

```bash
# 배포하기
npm run publish
```

## To do

- [x] tailwindcss to native css
- [x] npm 배포
- [ ] npm 배포 방법 README 작성
- [x] Storybook 적용
- [ ] Chromatic 배포
- [ ] npm 배포 자동화(github action)

## 링크

- [Chromatic](https://main--6804dc2adb0069525482d99e.chromatic.com/)
- [NPM](https://www.npmjs.com/package/@freejak5520/vite-react-components-library)

## 참고

- [Create a Component Library Fast🚀(using Vite's library mode) - DEV Community](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)
- [Building Your Own UI Library Package with Vite(Library Mode), React, TS, and TailwindCSS. - nuri.gg / software engineer](https://nuri.gg/vite-react-typescript-tailwind-npm-package/)

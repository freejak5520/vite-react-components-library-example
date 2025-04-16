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

1. `lib/components`디렉토리에 컴포넌트를 작성합니다.
2. 작성한 컴포넌트를 `lib/components/main.ts`의 export로 추가합니다.
3. `npm run build`로 번들링된 컴포넌트 라이브러리를 확인 가능합니다.

## 참고

- [Create a Component Library Fast🚀(using Vite's library mode) - DEV Community](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)
- [Building Your Own UI Library Package with Vite(Library Mode), React, TS, and TailwindCSS. - nuri.gg / software engineer](https://nuri.gg/vite-react-typescript-tailwind-npm-package/)

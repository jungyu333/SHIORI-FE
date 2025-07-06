# 🖋️ Shiori FE - 개인 일지 AI 요약 서비스 (Frontend)

**Shiori**는 하루 일지를 마크다운으로 작성하고, AI 요약을 통해 주간 회고를 자동 생성할 수 있는 개인 생산성 웹 서비스입니다.  
본 리포지토리는 **Next.js 기반 프론트엔드 클라이언트**입니다.

<br />

## 🌟 주요 기능

- 🧾 **마크다운 기반 일지 작성** (Tiptap 기반 블록 에디터)
- 📆 **일지 작성/열람/편집**
- 🧠 **AI 요약 요청 및 결과 표시**
- 🏷️ **태그 추가 및 필터링**
- 📊 **주간 요약 뷰 확인**

<br />

## 🛠️ 기술 스택

| 구분       | 스택                                                                                          |
|----------|---------------------------------------------------------------------------------------------|
| 프레임워크    | [Next.js 15](https://nextjs.org/)                                                           |
| 언어       | TypeScript                                                                                  |
| 상태관리     | [React Query](https://tanstack.com/query/latest) + [Zustand](https://zustand-demo.pmnd.rs/) |
| UI 라이브러리 | [Chakra UI](https://chakra-ui.com/) + [Emotion](https://emotion.sh/docs/introduction)       |
| 에디터      | [Tiptap](https://tiptap.dev/)                                                               |
| 기타       | Prettier, ESLint                                                                            |
|

<br />

## 🚀 로컬 실행 방법

```bash
# 1. 패키지 설치 (pnpm 기준)
pnpm install

# 2. 개발 서버 실행
pnpm dev


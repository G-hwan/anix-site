# ANIX Working Rules

## Purpose

이 문서는 다른 PC 또는 다른 작업 세션에서 홈페이지 작업을 이어갈 때 바로 참고할 수 있는 최소 작업 규칙을 정리합니다.

---

## Start Order

작업을 시작할 때는 아래 순서로 확인합니다.

1. `docs/homepage.md`
2. `docs/todo.md`
3. `docs/anix_info.md`
4. `docs/visual_style.md`
5. `index.html`
6. `styles.css`
7. `script.js`

---

## Main Editable Files

- `index.html`: 섹션 구조, 카피, 버튼, 마크업
- `styles.css`: 레이아웃, 색상, 반응형, 반전 모드 스타일
- `script.js`: 헤더 동작, 인터랙션, reveal animation, 화면 모드 반전 저장

---

## Design Rules

- 기본 방향은 dark cinematic tone 유지
- 핵심 포인트는 orange accent, premium studio atmosphere, futuristic interface feeling
- 과한 웹앱 느낌보다 포트폴리오형 랜딩 페이지를 우선
- 섹션 추가 시 기존 톤과 밀도를 해치지 않도록 구성
- 반전 모드 추가 작업 시 dark/light 모두 함께 확인

---

## Content Rules

- 서비스 설명은 ANIX 실제 작업 범위와 맞아야 함
- 현재 핵심 범위는 2D animation compositing, game PV, skill movie, AE pipeline automation
- 카피 수정 시 `docs/anix_info.md`, `docs/services.md`, `docs/workflow.md` 기준 유지

---

## Deployment Rules

- 저장소: `https://github.com/G-hwan/anix-site`
- 라이브 URL: `https://g-hwan.github.io/anix-site/`
- 기본 배포 방식: `main` 브랜치 푸시 후 GitHub Pages 반영

작업 후 권장 순서:

1. 변경 파일 확인
2. 문서 갱신 필요 여부 확인
3. `git add`
4. `git commit`
5. `git push origin main`
6. 라이브 URL 반영 확인

---

## Notes

- 문서에는 절대경로 대신 저장소 기준 상대 파일명을 사용
- PC가 바뀌어도 저장소 구조가 같으면 그대로 작업 가능
- `assets/`는 현재 비어 있을 수 있으므로 실제 리소스 추가 전까지 필수 작업 기준은 아님

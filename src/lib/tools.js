// 도구 뱃지 색 구분 — ChatGPT / Claude를 한눈에 다르게.
// 같은 작업이라도 어떤 도구 예시인지 색으로 바로 구분되게 한다.
export function toolTag(name = '') {
  const has = (k) => name.includes(k)
  if (has('ChatGPT') && has('Claude')) return 'tag-both'   // 둘 다 쓰는 예시
  if (has('ChatGPT')) return 'tag-gpt'
  if (has('Claude')) return 'tag-claude'
  return ''
}

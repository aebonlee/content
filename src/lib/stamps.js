import { useEffect, useState } from 'react'

// 도장 상태 공유 모듈 — localStorage + 커스텀 이벤트로 페이지 간 실시간 동기화.
// 학습강의안(모듈 하단 버튼)에서 찍고, 도장깨기 페이지에서 현황을 본다.
const KEY = 'content.stamps.v1'
const EVT = 'contents:stamps'

export function loadStamps() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {} } catch { return {} }
}

function persist(next) {
  try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* ignore */ }
  window.dispatchEvent(new Event(EVT))
}

// 토글 — 획득/해제. (클릭 시 사라지지 않고 상태만 바뀜)
export function toggleStamp(id) {
  const s = loadStamps()
  if (s[id]) delete s[id]
  else s[id] = true
  persist(s)
}

export function resetStamps() { persist({}) }

// 현재 도장 상태를 구독하는 훅 (다른 페이지의 변경도 반영)
export function useStamps() {
  const [done, setDone] = useState(loadStamps)
  useEffect(() => {
    const sync = () => setDone(loadStamps())
    window.addEventListener(EVT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(EVT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])
  return done
}

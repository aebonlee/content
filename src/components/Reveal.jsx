import { useEffect, useRef } from 'react'

// 스크롤 리빌 — 한 번, 부드럽게 (F-4)
export default function Reveal({ children, as: Tag = 'div', className = '', style }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      // 화면에 조금이라도 들어오면 바로 보이게 — 긴 요소(예: 실습예제 10개 묶음)가
      // 첫 화면에서 15% 기준을 못 채워 숨은 채로 남는 문제 방지.
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  )
}

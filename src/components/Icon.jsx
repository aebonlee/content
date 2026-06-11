// Font Awesome 아이콘 래퍼 — name 에 전체 클래스를 넘긴다.
// 예: <Icon name="fa-solid fa-bullseye" />
export default function Icon({ name, className = '' }) {
  return <i className={`${name}${className ? ' ' + className : ''}`} aria-hidden="true" />
}

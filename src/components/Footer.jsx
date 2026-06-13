import { Link } from 'react-router-dom'
import { site, footerLinks } from '../config/site'

// 푸터 — rest 스타일(다크 그라데이션 · 회사정보 / 빠른링크 / 연락처·패밀리사이트 / 저작권)
export default function Footer() {
  const c = site.company
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__content">
          {/* 브랜드 + 회사 정보 */}
          <div className="site-footer__brand">
            <div className="brand brand--footer">{site.brand}</div>
            <p className="site-footer__tag">{site.tagline}</p>
            <div className="site-footer__company">
              <p><strong>{c.name}</strong></p>
              <p>대표이사: {c.ceo}</p>
              <p>사업자등록번호: {c.bizNumber}</p>
              {c.salesNumber && <p>통신판매신고번호: {c.salesNumber}</p>}
            </div>
          </div>

          {/* 빠른 링크 */}
          <div className="site-footer__col">
            <h4 className="site-footer__h">빠른 링크</h4>
            <ul className="site-footer__links">
              {footerLinks.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* 연락처 + 패밀리 사이트 */}
          <div className="site-footer__col">
            <h4 className="site-footer__h">연락처</h4>
            <p>{c.address}</p>
            <p><a href={`mailto:${c.email}`}>{c.email}</a></p>
            <p>{c.phone}</p>
            {c.kakao && <p>카카오톡: {c.kakao}</p>}
            {c.businessHours && <p className="site-footer__hours">{c.businessHours}</p>}

            <div className="site-footer__family">
              <select
                defaultValue=""
                aria-label="패밀리 사이트"
                onChange={(e) => {
                  if (e.target.value) window.open(e.target.value, '_blank', 'noopener')
                  e.target.value = ''
                }}
              >
                <option value="" disabled>Family Site</option>
                <option value={site.parentSite.url}>{site.parentSite.name} (본사이트)</option>
                {site.familySites.map((s) => (
                  <option key={s.url} value={s.url}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          © 2020–{year} DreamIT Biz. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

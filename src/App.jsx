import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Curriculum from './pages/Curriculum'
import LectureNotes from './pages/LectureNotes'
import Examples from './pages/Examples'
import PromptLab from './pages/PromptLab'
import Lesson from './pages/Lesson'
import Stamps from './pages/Stamps'
import Gallery from './pages/Gallery'
import Community from './pages/Community'

// 대면 워크숍 학습자료 사이트 — 로그인/결제/진도 대시보드 없음(정적 + localStorage 도장).
export default function App() {
  return (
    <BrowserRouter>
      <div className="app grain">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/lecture" element={<LectureNotes />} />
            <Route path="/lecture/:moduleId" element={<LectureNotes />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/examples/:moduleId" element={<Examples />} />
            <Route path="/prompt" element={<PromptLab />} />
            <Route path="/lesson/:id" element={<Lesson />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/stamps" element={<Stamps />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

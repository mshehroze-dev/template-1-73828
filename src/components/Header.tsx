import { useState } from 'react'
import { Menu } from './icons'
import LogoMark from './LogoMark'
import MobileMenu from './MobileMenu'
import Navigation from './Navigation'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="flex justify-center pt-6">
        <div className="relative flex w-full max-w-[1272px] items-center justify-between px-4 md:px-0">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="hidden md:block">
            <LogoMark />
          </div>

          <div className="absolute left-1/2 top-0 -translate-x-1/2 md:hidden">
            <LogoMark />
          </div>

          <div className="hidden md:block">
            <Navigation />
          </div>

          <a
            href="#"
            className="md:hidden rounded-[25px] bg-[#502cef] px-4 py-3 text-xs font-bold text-white shadow-sm whitespace-nowrap"
          >
            Add Idea
          </a>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}

export default Header


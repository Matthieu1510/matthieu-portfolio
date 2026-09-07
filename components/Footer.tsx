import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-ink border-t border-white/10 py-6">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted">
                <span className="font-heading text-white"> _Matthieu<span className="text-accent">.Rk</span></span>
                <span className="font-heading text-white"> &copy; {new Date().getFullYear()} Matthieu. All rights reserved!</span>
            </div>
        </footer>
    )
}
export default Footer

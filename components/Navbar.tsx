import React from 'react'

const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
]

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-white/10">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <a href="#"
                   className="font-heading"
                    style={{width: 120,height: 35, borderRadius: 10,backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold"}}
                > _Matthieu<span className="text-accent">.Rk</span></a>
                <ul className="flex items-center gap-8 text-sm text-slate-300">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="font-semibold">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        )
}
export default Navbar

import { NavLink } from "react-router-dom"

const links = [
  { name: "Community", path: "/community" },
  { name: "Tournaments", path: "/tournaments" },
  { name: "Learning", path: "/learning" },
  { name: "Launchpad", path: "/launchpad" },
]

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-cardDark border-b border-gray-800">
      <h1 className="text-xl font-bold text-neon">GameLaunch</h1>

      <div className="flex gap-6">
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-neon border-b-2 border-neon pb-1"
                : "text-gray-400 hover:text-white"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

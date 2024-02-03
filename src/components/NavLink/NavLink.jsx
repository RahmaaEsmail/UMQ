import { Link } from "react-router-dom";

export default function NavLink({children}) {
  return (
    <li className="flex justify-center h-[fit-content]  m-auto  align-middle">
    <Link className="main_color">
      {children}
    </Link>
  </li>
  )
}

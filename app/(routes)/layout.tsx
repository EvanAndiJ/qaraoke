// import NavMenu from "../ui/search-home";
import NavBar from "../ui/nav/navbar"

export default function AuthLayout({ children }:{children: React.ReactNode}) {
  return (
    <main>
      <NavBar/>
      {children} 
    </main>
  )
}

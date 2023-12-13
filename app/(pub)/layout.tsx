import NavMenu from "../ui/NavMenu";

export default function AuthLayout({ children }:{children: React.ReactNode}) {
  return (
    <main>
      <div>
          <h1>Qaraoke</h1>
      </div>
      <NavMenu/>
      {children} 
      </main>
  )
}

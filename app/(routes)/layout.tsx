import TopBar from "../components/TopBar";

export default function AuthLayout({ children }:{children: React.ReactNode}) {
  return (
    <main> 
      <TopBar/>
      {children} 
      </main>
  )
}

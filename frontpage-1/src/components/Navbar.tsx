import reactLogo from '../assets/react.svg'

export default function Navbar() {
    return (
        <header className="flex items-center bg-[#21222A] text-[#61DAFB] p-16">
            <a href="https://react.dev" rel="noopener noreferrer" target="_blank" aria-label='react website'>
          <img src={reactLogo} className="logo react" alt="React logo" />
         </a>
            <h1 className="ml-4">React facts</h1>
        </header>
      
    )
}

import reactLogo from '../assets/react.svg'

export default function Navbar() {
    return (
        <header className="flex items-center bg-blue-500 text-black p-4">
            <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
         </a>
            <h1 className="ml-4">React facts</h1>
        </header>
      
    )
}

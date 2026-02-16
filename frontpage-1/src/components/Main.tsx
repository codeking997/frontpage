
export default function Main() {

    return ( 
        <>
            <main className="bg-gray-500">
                <h1 className="mb-8 text-white font-bold">Fun facts about React</h1>
                <ul className="list-disc marker:text-blue-500 text-start pl-2">

                    <li className="flex items-start">
                        <span className="text-blue-500 mr-6">•</span>
                        <span>Was first released in 2013</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-6">•</span>
                        <span>Was originally created by Jordan Walke</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-6">•</span>
                        <span>Has well over 100k stars on GitHub</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-6">•</span>
                        <span>Is maintained by Facebook</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-6">•</span>
                        <span>Powers thousands of enterprise apps, including mobile apps</span>
                    </li>

                </ul>
            </main>
      </>
      )
}
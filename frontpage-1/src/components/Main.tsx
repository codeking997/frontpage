const facts = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 100k stars on GitHub",
    "Is maintained by Facebook",
    "Powers thousands of enterprise apps, including mobile apps",
];

export default function Main() {

    return (

        <main className="bg-gray-500 flex-1 flex items-center justify-center flex-col">
            <h1 className="mb-8 text-white font-bold">Fun facts about React</h1>
            <ul className="list-disc marker:text-blue-500 space-y-3 text-white text-start">

                {facts.map((fact)=> (<li key={fact}>{fact}</li>))}

            </ul>
        </main>

    )
}
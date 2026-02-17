const facts = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 100k stars on GitHub",
    "Is maintained by Facebook",
    "Powers thousands of enterprise apps, including mobile apps",
];

export default function Main() {

    return (

        <main className="bg-[#282D35] flex-1 flex items-center justify-center flex-col">
            <div className="w-full max-w-2xl px-8">
            <h1 className="mb-8 text-white text-4xl font-bold">Fun facts about React</h1>
            <ul className="list-disc marker:text-blue-500 space-y-3 text-white  pl-4 sm:pl-5 md:pl-6">

                {facts.map((fact)=> (<li key={fact}>{fact}</li>))}

            </ul>
            </div>
        </main>

    )
}
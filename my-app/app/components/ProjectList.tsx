import { Project } from "./Project"

export function ProjectList() {


    const frontendArr = ['Next.js', 'TailwindCSS'];
    const aiArr = ['Next.js', 'PostgreSQL', 'TypeScript'];
    const brandArr = ['React.js', 'MongoDB', 'Tezos'];
    const gameArr = ['Python'];
    const gitArr = ['Java', 'Unit & Integration Testing'];

    return (

        <div className="projectswrapper">

            <p className="text-sky-500 font-bold font-mono">Portfolio</p>
            <p className="font-bold text-xl">A selection of my projects, more to come!</p>

            <Project name = "Stealth Startup Frontend" stack = {frontendArr} width = {500} left = "yes" img = "/frontend.PNG" link = "https://github.com/ddetchev/turbomonorepo" description = "A sleek, interactive frontend design for a stealth startup with fully draggable components so users can customize their own inteface while using the website. Hosted on a turborepo, run with turbo run dev." />
            <Project name = "AI Semantic Search" stack = {aiArr} width = {500} left = "" img = "/aisearchgood.PNG" link = "https://github.com/ddetchev/nextaisearch" description = "A custom AI semantic search where responses are streamed back to the user based on input query and context using OpenAPI. The AI responds based on knowledge it is fed in a customizable TypeScript file of data inputted into the project repo." />
            <Project name = "Brandnetic" stack = {brandArr} left = "yes" width = {500} img = "/brandnetic.PNG" link = "https://github.com/ddetchev/brandneticwork" description = "Startup idea of a platform for businesses and influencers/models to quickly and efficiently collaborate and agree on partnerships. Guaranteed by a smart contract system stored on a blockchain. Collaborated with UC Berkeley MBAs to pitch this to panel of professors, startups, and research scientists." />
            <div className="ml-20">
            <Project name = "2048" stack = {gameArr} left = "" width = {300} img = "/game.PNG" link = "https://github.com/ddetchev/2048game" description = "My rendition of the popular 2048 game made with Python tkinter for visualization. Works on any stable versions of Python3 or later with pip and Tcl/Tk installed." />
            </div>
            <Project name = "Gitlet" stack = {gitArr} left = "yes" width = {450} img = "/gitlet.PNG" link = "https://github.com/ddetchev/Gitlet" description = "An inline terminal application file management system using version control systems based on Git. Capable of adding/removing files to stage for commits, switching to different versions of files, and displaying logs of files and their content" />
        </div>

    )

}
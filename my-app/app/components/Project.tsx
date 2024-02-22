import Image from "next/image"

export function Project({ name, description, img, left, width, link, stack } : any) {

    return (

        <div className="p-2 mb-12">

            <div className = "projectrowwrapper">
                {left ? 
                <Image 
                src={img}
                width={width}
                height={300}
                alt="Picture of the author"
                className="rounded-md"
                />
                : null}    

                <div className = "projectdesc">
                    <p className = "font-bold font-mono">{name}</p>
                    <p className = "text-stone-500 text-sm text-center">{description}</p>
                    
                    <div className="projecttech font-bold py-2">
                        {/* <p className = "text-sm">Next.js</p>
                        <p className = "text-sm">PostgreSQL</p>
                        <p className = "text-sm">TypeScript</p> */}
                        <div className="text-sm projectstack">
                            {stack.map((item : any, index : any) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    </div>

                    <a href={link}>
                    <div className = "codedemobtn py-2">
                        <p className = "font-mono font-bold px-1">Code</p>
                        <Image 
                        src="/github.svg"
                        width={20}
                        height={20}
                        alt="Picture of the author"
                        />

                    </div>
                    </a>
                </div>

                {left ? null :
                <Image 
                src={img}
                width={width}
                height={300}
                alt="Picture of the author"
                className= "rounded-md"
                />
                }  

            </div>

            
        </div>

    )

}
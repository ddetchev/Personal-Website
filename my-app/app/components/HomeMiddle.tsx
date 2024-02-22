import Image from "next/image";

export function HomeMiddle() {

    return (
        <div className="homewrapper">
          <div className="homerowwrapper">
          <div className="homemiddle">
        
            <p className="font-bold text-3xl">Software Developer</p>
            <p>Hi! My name is Daniel Detchev, and I am a Fullstack Developer. I enjoy tennis, working out, and travelling!</p>

            <div className="homesocials">
            <a href="https://linkedin.com/in/daniel-detchev-454b56196">
            <Image 
              src="/linkedin-icon.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            </a>

            <a href="https://github.com/ddetchev">
            <Image 
              src="/github.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            </a>
            </div>

          </div>

          <div style={{clipPath : "circle()"}}>
          <Image 
              src="/linkedin.jpg"
              width={220}
              height={140}
              alt="Picture of the author"
          />
          </div>

          </div>

          <div className="hometechstacks">

            <p className="font-bold">Tech Stack</p>
            <p style={{marginLeft : "-1rem"}}>|</p>

            <Image 
              src="/react.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />

            <Image 
              src="/nextjs.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />

            <Image 
              src="/nodejs.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />

            <Image 
              src="/mongodb.svg"
              width={60}
              height={60}
              alt="Picture of the author"
            />

            <Image 
              src="/aws.svg"
              width={40}
              height={40}
              alt="Picture of the author"
            />

            <Image 
              src="/html.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />

            <Image 
              src="/tailwindcss.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />

            <Image 
              src="/postgres.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div>
        </div>
    );

}
import Image from "next/image";

export default function Contact() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh'
      }}>
        <a href="https://linkedin.com/in/daniel-detchev-454b56196">
          <Image 
            src="/linkedin-icon.svg"
            width={80}
            height={80}
            alt="LinkedIn Icon"
          />
        </a>
      </div>
    );
  }
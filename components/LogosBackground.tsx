// components/ui/TechLogosBackground.tsx
import Image from 'next/image';

const techLogos = [
  { src: '/logos/next.svg', alt: 'Next.js', style: 'top-10 left-[8%]', float: 'float-slow' },
  { src: '/logos/react.svg', alt: 'React', style: 'top-[25%] right-[65%]', float: 'float-medium delay-1' },
  { src: '/logos/typescript.svg', alt: 'TypeScript', style: 'bottom-[12%] left-[20%]', float: 'float-fast delay-2' },
  { src: '/logos/tailwind.svg', alt: 'Tailwind CSS', style: 'top-[55%] right-[12%]', float: 'float-medium delay-3' },
  { src: '/logos/git.svg', alt: 'Git', style: 'top-[20%] right-[18%]', float: 'float-medium delay-2' },
];;

const TechLogosBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {techLogos.map((logo, i) => (
        <div
          key={i}
          className={`absolute ${logo.style} w-16 h-16 md:w-24 md:h-24 opacity-45 blur-sm ${logo.float}`}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default TechLogosBackground;

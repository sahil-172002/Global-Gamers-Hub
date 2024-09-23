import Component from "@/components/game-market";
import Image from "next/image";
import DotPattern from "@/components/magicui/dot-pattern";

export default function Home() {
  return (
    <>
      {/* <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Component />
       
      </div> */}
      {/* <div className="relative min-h-screen bg-gradient-to-b from-background to-secondary z-20"> */}
      {/* <DotPattern className="absolute inset-0 z-10" /> */}
      <Component />
      {/* </div> */}
    </>
  );
}

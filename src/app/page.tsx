import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-190px)]">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold underline underline-offset-8 decoration-2 ">
            Hi, I'm Rishabh
          </h1>
          <div className="mt-3 ">
            <Button>Resume</Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
import { Experience } from "@/components/experience";
import experienceData from "@/data/experience.json";

export default function ExperiencePage() {
  return (
    <div className="flex justify-center">
      <div className="space-y-8 w-full max-w-3xl px-4 md:px-8 lg:px-12 mt-8 mb-20">
        <h2 className="text-2xl font-bold mb-8">My Work Experience</h2>
        {experienceData.map((experience, index) => (
          <div key={index} className="space-y-8">
            <Experience
              title={experience.title}
              company={experience.company}
              duration={experience.duration}
              responsibilities={experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-gray-500 dark:text-gray-400 leading-7 md:text-base lg:text-lg xl:text-base">
                  {responsibility}
                </li>
              ))}
              skills={experience.skills}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
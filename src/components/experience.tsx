import React from 'react';

export function Experience(props: any) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <div className="font-bold">{props.title}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{props.company}</div>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{props.duration}</div>
      <ul className="space-y-1.5">
        {props.responsibilities}
      </ul>
      <div className="inline-block rounded-md bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
        Skills & Technologies
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        {props.skills.map((skill: any, index: React.Key | null | undefined) => (
          <div key={index} className="inline-flex h-6 items-center rounded-full bg-gray-100 px-3 text-sm dark:bg-gray-800">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
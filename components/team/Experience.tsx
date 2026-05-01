import React from "react";

type Skill = {
  name: string;
  value: string;
};

export default function SkillSection({ skills }: { skills: Skill[] }) {
  return (
    <div className="mt-4">
      <h4 className="font-semibold text-[#1f2a2a] mb-4">
        Experience Area
      </h4>

      <div className="flex flex-col gap-4 text-sm">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-gray-600 mb-1">
              <span>{skill.name}</span>
              <span>{skill.value}</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-[#6c8b6f] rounded-full"
                style={{ width: skill.value }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
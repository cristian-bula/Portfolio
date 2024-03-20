import React, { useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import { SKILLS } from "../constants/skills.ts";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState({
    id: SKILLS[0].id,
    name: SKILLS[0].name,
    percentage: SKILLS[0].percentage,
  });
  return (
    <section className="layout-padding w-full relative">
      <div className="flex md:flex-row flex-col h-full">
        <div className="flex w-full md:w-2/4 items-center justify-center my-16 md:my-0">
          <CircularProgress
            id="my-progress-bar"
            role="progressbar"
            tabIndex={-1}
            label={selectedSkill.name}
            aria-hidden={true}
            aria-labelledby="progress-label"
            classNames={{
              svg: "w-72 h-72 drop-shadow-md",
              indicator: "stroke-white",
              track: "stroke-white/10",
              value: "text-4xl font-semibold text-white",
            }}
            value={selectedSkill.percentage}
            strokeWidth={4}
            showValueLabel={true}
          />
        </div>
        <div className="w-full md:w-2/4">
          <div className="grid auto-rows-[172px] grid-cols-3 gap-4">
            {SKILLS.map((skill, i) => (
              <button
                key={skill.id}
                className={`flex flex-col justify-center items-center gap-4 row-span-1 rounded-xl border-2 border-slate-400/10 p-4 dark:bg-neutral-900 ${
                  i === 3 || i === 6 ? "col-span-2" : ""
                } hover:scale-105 transition-all group skill-item cursor-default`}
                onMouseEnter={() => {
                  setSelectedSkill({
                    id: skill.id,
                    name: skill.name,
                    percentage: skill.percentage,
                  });
                }}
              >
                <span
                  className={`${skill.icon} text-7xl group-hover:bg-secondary ${
                    skill.id === selectedSkill.id ? "bg-secondary" : ""
                  }`}
                />
                <p
                  className={`group-hover:text-secondary text-sm md:text-base ${
                    skill.id === selectedSkill.id ? "text-secondary" : ""
                  }`}
                >
                  {skill.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

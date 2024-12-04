interface SkillBarProps {
  skill: string;
  level: number;
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="flex items-center justify-start mb-4 w-full">
      <div className="text-black w-40">{skill}</div>
      <div className="bg-gray-400 h-3 relative rounded-full w-1/2">
        <div
          className="absolute h-full rounded-full skill-progress"
          style={{
            width: `${level}%`,
            background: 'black',
          }}
        ></div>
      </div>
      <div className="ml-2 skill-level text-black">{level >= 80 ? 'Advanced' : level >= 50 ? 'Intermediate' : 'Beginner'}</div>
    </div>
  );
};
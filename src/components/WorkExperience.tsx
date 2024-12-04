interface WorkExperienceProps {
  companyName: string;
  yearsWorked: string;
  place: string;
}

export default function WorkExperience({
  companyName,
  yearsWorked,
  place,
}: WorkExperienceProps) {
  return (
    <>
      <div className="flex flex-row gap-2">
        <h2 className="align-middle font-bold font-sans items-center text-3xl">{companyName}</h2>
        <p className="flex font-light font-sans items-center text-gray-700 text-sm tracking-widest">{yearsWorked}</p>
      </div>
      <h3 className="font-lg font-light font-sans">{place}</h3>
      <li>yada yada something</li>
    </>
  );
}
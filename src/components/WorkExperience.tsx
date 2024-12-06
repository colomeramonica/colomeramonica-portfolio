interface WorkExperienceProps {
  companyName: string;
  yearsWorked: string;
  place: string;
  responsabilities: string;
}

export default function WorkExperience({
  companyName,
  yearsWorked,
  place,
  responsabilities
}: WorkExperienceProps) {
  return (
    <section className="bg-transparent py-3">
      <div className="flex flex-row gap-2">
        <h2 className="align-middle font-bold font-sans items-center text-3xl">{companyName}</h2>
        <p className="flex font-light font-sans items-center text-gray-700 text-sm tracking-widest">{yearsWorked}</p>
      </div>
      <h3 className="font-lg font-light font-sans">{place}</h3>
      <ul className="px-5">
        {responsabilities.split('.').map((responsibility, index) => (
          <li className="list-disc list-item" key={index}>{responsibility.trim()}</li>
        ))}
      </ul>
    </section>
  );
}
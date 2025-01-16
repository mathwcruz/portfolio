import { calculateProgrammingExperience } from "@/utils/date";

const about = {
  title: "About me",
  description:
    "Passionate about technology, blockchain, astronomy and economics. I also love to travel, experience new cultures, hang out with my friends, read, work out and study economics.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Matheus da Cruz",
    },
    {
      fieldName: "Phone",
      fieldValue: "+55 51986106570",
    },
    {
      fieldName: "Experience",
      fieldValue: `${calculateProgrammingExperience()} Years`,
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian",
    },
    {
      fieldName: "Languages",
      fieldValue: "Portuguese, English",
    },
    {
      fieldName: "Email",
      fieldValue: "matheuswachcruz@gmail.com",
    },
  ],
};

const AboutTab = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {about.description}
      </p>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6 max-w-[680px] mx-auto xl:mx-0">
        {about.info.map((item) => (
          <li
            key={item.fieldName}
            className="flex items-center justify-center xl:justify-start gap-4"
          >
            <span className="text-white/60">{item.fieldName}</span>
            <span className="text-xl">{item.fieldValue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutTab;

import type { ResumeAbout } from "@/lib/data/resume";

const AboutTab = ({ about }: { about: ResumeAbout }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-2xl md:text-4xl font-bold">{about.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm lg:text-base">
        {about.description}
      </p>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6 max-w-[680px] mx-auto xl:mx-0">
        {about.info.map((item) => (
          <li
            key={item.fieldName}
            className="flex items-center justify-center xl:justify-start gap-4"
          >
            <span className="text-sm md:text-base text-white/60">{item.fieldName}</span>
            <span className="text-base md:text-xl">{item.fieldValue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutTab;

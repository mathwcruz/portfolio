import { ScrollArea } from "@/components/ui/scroll-area";

const education = {
  title: "My education",
  description:
    "These are the lessons I consider to be the most relevant and that helped me become the professional I am.",
  items: [
    {
      institution: "Univates",
      degree: "Associate degree",
      duration: "2020 - 2023",
    },
    {
      institution: "Rocketseat",
      degree: "Web Development Bootcamp",
      duration: "2021",
    },
    {
      institution: "University of Michigan",
      degree: "Michigan Language Assessment",
      duration: "2019",
    },
    {
      institution: "Fisk",
      degree: "English course",
      duration: "2017 - 2019",
    },
  ],
};

const EducationTab = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {education.description}
      </p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4 xl:pr-0">
          {education.items.map((item) => (
            <li
              key={item.institution}
              className="bg-background-600 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>

              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {item.degree}
              </h3>

              <div className="flex items-center gap-3 justify-center xl:justify-start">
                <span className="w-[6px] h-[6px] rounded-full bg-accent" />

                <p className="text-white/60">{item.institution}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default EducationTab;

import { ScrollArea } from "@/components/ui/scroll-area";

export type TimelineItem = {
  duration: string;
  primary: string;
  secondary: string;
};

type TimelineTabProps = {
  title: string;
  description: string;
  items: TimelineItem[];
};

const TimelineTab = ({ title, description, items }: TimelineTabProps) => {
  return (
    <div className="flex flex-col gap-[16px] lg:gap-[30px] text-center xl:text-left">
      <h3 className="text-2xl md:text-4xl font-bold">{title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm lg:text-base">
        {description}
      </p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4 xl:pr-0">
          {items.map((item) => (
            <li
              key={item.secondary}
              className="bg-background-600 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>

              <h3 className="text-lg lg:text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {item.primary}
              </h3>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-[6px] h-[6px] rounded-full bg-accent" />

                <p className="text-white/60">{item.secondary}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default TimelineTab;

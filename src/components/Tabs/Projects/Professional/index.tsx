import { useEffect, useState } from "react";

export type ProfessionalProject = {
  id: string;
  name: string;
  type: string;
  banner: string;
  technologies: string[];
  description?: string;
  websiteUrl?: string;
  githubRepository?: string;
};

interface ProfessionalProjectsProps {
  projects: ProfessionalProject[];
}

export const ProfessionalProjects = ({
  projects,
}: ProfessionalProjectsProps) => {
  const [professionalProjects, setProfessionalProjects] = useState(projects);

  useEffect(() => {
    if (projects?.length > 0) {
      const professionalProjectsFormatted = projects?.map((project) => {
        return {
          id: project?.id,
          name: project?.name,
          type: project?.type,
          banner: project?.banner,
          technologies: project?.technologies,
          description: project?.description,
          websiteUrl: project?.website_url,
          githubRepository: project?.github_repository,
        };
      });

      setProfessionalProjects(professionalProjectsFormatted);
    }
  }, [projects]);

  useEffect(
    () => console.log({ professionalProjects }),
    [professionalProjects]
  );

  return <h2>ola</h2>;
};

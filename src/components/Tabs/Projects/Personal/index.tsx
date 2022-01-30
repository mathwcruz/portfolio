import { useEffect, useState } from "react";

import { ProjectsList } from "components/Tabs/Projects/ProjectsList";

export type PersonalProject = {
  id: string;
  name: string;
  type: string;
  banner: string;
  technologies: string[];
  description?: string;
  websiteUrl?: string;
  githubRepository?: string;
};

interface PersonalProjectsProps {
  projects: PersonalProject[];
}

export const PersonalProjects = ({ projects }: PersonalProjectsProps) => {
  const [personalProjects, setPersonalProjects] = useState(projects);

  useEffect(() => {
    if (projects?.length > 0) {
      const personalProjectsFormatted = projects?.map((project) => {
        return {
          id: project?.id,
          name: project?.name,
          banner: project?.banner,
          technologies: project?.technologies,
          description: project?.description,
          websiteUrl: project?.website_url,
          githubRepository: project?.github_repository,
        };
      });

      setPersonalProjects(personalProjectsFormatted);
    }
  }, [projects]);

  return <ProjectsList projects={personalProjects} />;
};

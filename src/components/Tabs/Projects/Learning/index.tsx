import { useEffect, useState } from "react";

export type LearningProject = {
  id: string;
  name: string;
  type: string;
  banner: string;
  technologies: string[];
  description?: string;
  websiteUrl?: string;
  githubRepository?: string;
};

interface LearningProjectsProps {
  projects: LearningProject[];
}

export const LearningProjects = ({ projects }: LearningProjectsProps) => {
  const [learningProjects, setLearningProjects] = useState(projects);

  useEffect(() => {
    if (projects?.length > 0) {
      const learningProjectsFormatted = projects?.map((project) => {
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

      setLearningProjects(learningProjectsFormatted);
    }
  }, [projects]);

  useEffect(() => console.log({ learningProjects }), [learningProjects]);

  return <h2>ola</h2>;
};

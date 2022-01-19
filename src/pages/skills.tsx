import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import { supabase } from "services/supabase";

const Skills: NextPage = () => {
  const [programmingSkills, setProgrammingSkills] = useState([]);

  // TODO: Make request via server side rendering
  useEffect(() => {
    const fetchProgrammingSkills = async () => {
      const { data: programmingSkills, error } = await supabase
        .from("programming_skills")
        .select("*");

      setProgrammingSkills(programmingSkills);
    };

    fetchProgrammingSkills();
  }, []);

  useEffect(() => console.log({ programmingSkills }), [programmingSkills]);

  return <Box>Skills</Box>;
};

export default Skills;

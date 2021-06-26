import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { ProjectCard } from "./projectCard";
import { InternCard } from "./intern";

import "../../css/styles.css";

export interface IExperienceProps {
  experienceRef: React.RefObject<HTMLDivElement>
}

export const Experience: React.FC<IExperienceProps> = (props) => {

  return (
    <div ref={props.experienceRef}>
      <Stack styles={detailCardStyles} id="experience" horizontalAlign="center">
        <Text variant="xxLargePlus" styles={headerStyle}>
          Experience
        </Text>
        <Stack horizontalAlign="center">
          <InternCard/>
          <ProjectCard/>
        </Stack>  
      </Stack>
    </div>
  )
}

const detailCardStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
    borderBottom: '2px solid #E1DFDD',
    backgroundColor: "white",
    padding: 20
  }
}

const headerStyle: Partial<ITextStyles> = {
  root: {
    padding: 20,
    textAlign: 'center'
  }
}

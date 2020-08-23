import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { DetailsCard } from "./details";
import { SkillCard } from "./skillCard";
import { AcadsCard } from "./acadCard";
import "../../css/styles.css";

export interface IAboutProps {
  aboutRef: React.RefObject<HTMLDivElement>
}

export const About: React.FC<IAboutProps> = (props) => {
  return (
    <div ref={props.aboutRef}>
      <Stack styles={detailCardStyles} id="about">
        <Text variant="xxLargePlus" styles={headerStyle}>
          About Me
        </Text>
        <Stack horizontal wrap horizontalAlign="center">
          <AcadsCard/>
          <DetailsCard/>
          <SkillCard/>
        </Stack>
      </Stack>
    </div>
  )
}

const detailCardStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
    minHeight: "60vh",
    borderBottom: '2px solid #E1DFDD',
    backgroundColor: "white",
    paddingTop: 40
  }
}

const headerStyle: Partial<ITextStyles> = {
  root: {
    padding: 20,
    textAlign: 'center'
  }
}

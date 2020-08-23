import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { PrimaryButton, IButtonStyles } from "@fluentui/react/lib/Button";
import { Link } from "@fluentui/react/lib/Link";
import { ProjectCard } from "./projectCard";
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
        <Text variant="large" styles={contentStyle}>
          Hi, I'm Kshitij, a Final year Undegraduate Student
        </Text>
        <Text variant="large" styles={contentStyle}>
          I came across this wonderful concept of programming computers in my freshmen year 
          and have been hanging around it for quite a while now.
        </Text>
        <Text variant="large" styles={contentStyle}>
          My interests majorly include "Algorithmic Problem Solving", <i>aka <b>Competitive 
            Programming</b></i>, and I've lately been learning a lot of Full Stack Web Development.
        </Text>
        <Stack horizontal wrap horizontalAlign="center">
          <ProjectCard/>
          <SkillCard/>
          <AcadsCard/>
        </Stack>
      </Stack>
    </div>
  )
}

const detailCardStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
    minHeight: "60vh",
    boxShadow: Depths.depth16,
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

const contentStyle: Partial<ITextStyles> = {
  root: {
    paddingLeft: '4vw',
    paddingRight: '4vw',
    paddingBottom: '1vh'
  }
}
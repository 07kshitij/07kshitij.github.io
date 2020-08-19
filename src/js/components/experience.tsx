import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

export interface IExperienceProps {
  experienceRef: React.RefObject<HTMLDivElement>
}

export const Experience: React.FC<IExperienceProps> = (props) => {
  return (
    <div ref={props.experienceRef}>
      <Stack styles={detailCardStyles} id="about">
        <Text variant="xxLargePlus" styles={headerStyle}>
          Experience
        </Text>
        <Stack gap="5vh">
          <Stack>
            <Text variant="xLargePlus" styles={titleStyle}>
              Software Engineering Internship
            </Text>
            <Text variant="large" styles={titleStyle}>
              Garage India <b>@Teams Mobile Bangalore</b>
            </Text>
            <Text variant="large" styles={contentStyle}>
              • Worked on the Teams Mobile Extensibility Platform to develop an Application Screener which scores apps on Teams Store on Mobile best-practices.
            </Text>
            <Text variant="large" styles={contentStyle}>
              • Worked on designing components for the <b>Screening Report</b> generated. <b>Designed</b> and <b>Implemented</b> various sections to show detailed results and recommendations on the parameters used for screening.
            </Text>
            <Text variant="large" styles={contentStyle}>
              • Packaged the Application Screener as a <b>VS Code Extension</b> that can be installed and used right in the development phase itself.
            </Text>
            <Text variant="large" styles={contentStyle}>
              • The Screening Application parallelized the process of screening thereby <b>reducing the time of computation from over 1 minute to 10 - 15 seconds</b>.
            </Text>
            <Text variant="large" styles={contentStyle}>
              • Understood the challenges in deploying the Screening Application on <b>Microsoft Azure</b> to enable use as a Web API.
            </Text>
          </Stack>
       </Stack>
      </Stack>
    </div>
  )
}

const detailCardStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
    minheight: "60vh",
    boxShadow: Depths.depth16,
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

const titleStyle: Partial<ITextStyles> = {
  root: {
    paddingLeft: '2vw',
    paddingBottom: '1vh',
    textAlign: 'center'
  }
}


const contentStyle: Partial<ITextStyles> = {
  root: {
    paddingLeft: '2vw',
  }
}
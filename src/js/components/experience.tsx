import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { DefaultButton, IButtonStyles } from "@fluentui/react/lib/Button";

import "../../css/styles.css";

export interface IExperienceProps {
  experienceRef: React.RefObject<HTMLDivElement>
}

export const Experience: React.FC<IExperienceProps> = (props) => {

  const [isVisible, toggleVisibility] = React.useState(false);

  const toggleContent = () => {
    toggleVisibility(!isVisible);
  }

  return (
    <div ref={props.experienceRef}>
      <Stack styles={detailCardStyles} id="experience">
        <Text variant="xxLargePlus" styles={headerStyle}>
          Experience
        </Text>
        <Stack gap="0vh">
          <Stack horizontalAlign="start" styles={{ root: { paddingLeft: '2vw', paddingBottom: '2vh' } }}>
            <img className="mslogo" src="../../../public/microsoft.png" alt="image" />
          </Stack>
          <Stack horizontalAlign="start">
            <Text variant="xLargePlus" styles={titleStyle}>
              Software Engineering Internship
            </Text>
            <Text variant="large" styles={titleStyle}>
              <b className="garageText">@Garage India</b>
              {" | "}
              <b className="teamsText">Microsoft Teams Mobile</b>
            </Text>
            <DefaultButton
              text={isVisible ? "Read Less..." : "Read More ..."}
              styles={buttonStyles}
              onClick={toggleContent}/>
            {
              isVisible && 
              <Stack styles={experienceStyles}>
                <Text variant="large" styles={contentStyle}>
                  • Worked on the <b className="teamsText">Teams Mobile Extensibility Platform</b> to
                  develop an <b><i>Application Screener</i></b> which scores apps on Teams Store on Mobile best-practices.
                </Text>
                <Text variant="large" styles={contentStyle}>
                  • Worked on designing components for the <b>Screening Report</b> generated.
                  <b> Designed</b> various sections to show detailed results and recommendations on the parameters used for screening.
                  Used <b>JavaScript</b> and <b>TypeScript</b> extensively for the implementation.
                </Text>
                <Text variant="large" styles={contentStyle}>
                  • Packaged the <b><i>Application Screener</i></b> as a <b className="azureText">VS Code Extension</b> that
                  enables <b>@Developers</b> test their Apps right in the development phase.
                </Text>
                <Text variant="large" styles={contentStyle}>
                  • The <b><i>Application Screener</i></b> parallelized the process of screening thereby <b>reducing
                    the time of computation from over 1 minute to 10 - 15 seconds</b>.
                </Text>
                <Text variant="large" styles={contentStyle}>
                  • Understood the challenges in deploying the <b><i>Application Screener</i></b> on
                  <b className="azureText"> Microsoft Azure</b> to enable use as a Web API.
                </Text>
              </Stack>
            }
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
    paddingBottom: '1vh'
  }
}

const experienceStyles: Partial<IStackStyles> = {
  root: {
    boxShadow: Depths.depth16,
    paddingTop: '2vh',
    paddingBottom: '2vh',
    marginLeft: '2vw'
  }
}

const buttonStyles: Partial<IButtonStyles> = {
  root: {
    textAlign: 'left', 
    border: 'none', 
    paddingLeft: '2vw', 
    fontSize: '20px'
  }
}
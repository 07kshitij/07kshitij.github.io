import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { Separator } from "@fluentui/react/lib/Separator";

export interface IExperienceProps {
  experienceRef: React.RefObject<HTMLDivElement>
}

export const Experience: React.FC<IExperienceProps> = (props) => {
  return (
    <div ref={props.experienceRef}>
      <Stack styles={detailCardStyles} horizontalAlign="center" id="about">
        <Text
          variant="xxLarge" 
          styles={headerStyle}>
        {" Experience "}
        </Text>
        {/* <Stack horizontal>
          <Stack styles={{root: {width: "20%"}}}>
          </Stack>
          <Stack styles={{root: {width: "20%"}}}>
            <Separator vertical styles={{root: {height: "25vh"}}}/>
          </Stack>
          <Stack styles={{root: {width: "20%"}}}>
            <Text>Hello</Text>
          </Stack>
        </Stack> */}
      </Stack>
    </div>
  )
}

const detailCardStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
    height: "40vh",
    boxShadow: Depths.depth16,
    backgroundColor: "white"
  }
}

const headerStyle: Partial<ITextStyles> = {
  root: {
    padding: 20
  }
}
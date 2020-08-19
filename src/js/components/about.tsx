import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

export interface IAboutProps {
  aboutRef: React.RefObject<HTMLDivElement>
}

export const About: React.FC<IAboutProps> = (props) => {
  return (
    <div ref={props.aboutRef}>
      <Stack styles={detailCardStyles} horizontalAlign="center" id="about">
        <Text
          variant="xxLarge" 
          styles={headerStyle}>
        {" About "}
        </Text>
      </Stack>
    </div>
  )
}

const detailCardStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
    height: "60vh",
    boxShadow: Depths.depth16,
    backgroundColor: "white",
  }
}

const headerStyle: Partial<ITextStyles> = {
  root: {
    padding: 20
  }
}
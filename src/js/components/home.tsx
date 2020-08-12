import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextSlots, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

export const Home: React.FC = () => {
  return (
    <Stack horizontalAlign="space-between" styles={homeStyles} gap="2vw">
      <Stack styles={detailCardStyles} horizontalAlign="center" id="about">
        <Text 
          variant="xxLarge" 
          styles={headerStyle}>
        {" About "}
        </Text>
      </Stack>
      <Stack styles={detailCardStyles} horizontalAlign="center" id="blog">
        <Text 
          variant="xxLarge" 
          styles={headerStyle}>
        {" Blog "}
        </Text>
      </Stack>
      <Stack styles={detailCardStyles} horizontalAlign="center" id="resume">
        <Text 
          variant="xxLarge" 
          styles={headerStyle}>
        {" Resume "}
        </Text>
      </Stack>
      <Stack styles={detailCardStyles} horizontalAlign="center" id="contact">
        <Text 
          variant="xxLarge" 
          styles={headerStyle}>
        {" Contact "}
        </Text>
      </Stack>
    </Stack>
  )
}

const homeStyles : Partial<IStackStyles> = {
  root: {
    height: "100%",
    padding: 20
  }
}

const detailCardStyles: Partial<IStackStyles> = {
  root: {
    width: "95vw",
    height: "40vw",
    boxShadow: Depths.depth16,
    backgroundColor: "white"
  }
}

const headerStyle: Partial<ITextStyles> = {
  root: {
    padding: 20
  }
}
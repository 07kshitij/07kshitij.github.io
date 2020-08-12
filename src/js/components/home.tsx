import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextSlots, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { About } from "./about";
import { Blog } from "./blog";
import { Contact } from "./contact";
import { Resume } from "./resume";

export const Home: React.FC = () => {
  return (
    <Stack horizontalAlign="space-between" styles={homeStyles} gap="2vw">
      <About/>
      <Blog/>
      <Contact/>
      <Resume/>
    </Stack>
  )
}

const homeStyles : Partial<IStackStyles> = {
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white"
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
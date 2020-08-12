import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack"
import { Text } from "@fluentui/react/lib/Text"
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { NavPane } from "./navPane";

export const Header: React.FC = () => {
  return (
      <Stack
        horizontalAlign="center"      
        verticalAlign="center"
        styles={headerStyle}
        >
        <Text variant="xxLargePlus">
          Hi! I'm Kshitij Agrawal
        </Text>
      </Stack>
  )
}

const headerStyle: Partial<IStackStyles> = {
  root: {
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    width: "100%",
    height: "40vh",
    boxShadow: Depths.depth16,
  }
}
import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack"
import { Text } from "@fluentui/react/lib/Text"
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

export const Header: React.FC = () => {
  return (
    <Stack
      horizontal
      horizontalAlign="center"
      verticalAlign="center"
      styles={headerStyle}>
      <Text variant="xLarge"> Kshitij Agrawal </Text>
    </Stack>
  )
}

const headerStyle: Partial<IStackStyles> = {
  root: {
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    width: "100%",
    padding: "10px",
    boxShadow: Depths.depth4
  }
}
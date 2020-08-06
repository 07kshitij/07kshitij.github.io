import * as React from "react";
import { Stack, IStackItemStyles } from "@fluentui/react/lib/Stack";
import { Text } from "@fluentui/react/lib/Text";

export const Home: React.FC = () => {
  console.log("Hello");
  return (
    <Stack horizontalAlign="center">
      <Text variant="xLarge">
        Work under progress. Please check out later
      </Text>
    </Stack>
  )
}

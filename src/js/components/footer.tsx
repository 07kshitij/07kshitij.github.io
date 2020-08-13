import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack"
import { Text } from "@fluentui/react/lib/Text"
import { Icon } from "@fluentui/react/lib/Icon"
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { initializeIcons } from "@uifabric/icons";
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { ScrollToTop } from "./scrollToTop";

initializeIcons();

export const Footer: React.FC = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      styles={footerStyle}>
      <Text variant="xLarge">
        Built with <Icon iconName="HeartFill" className={iconClass} /> by @kshitij_07
      </Text>
      <ScrollToTop/>
    </Stack>
  )
}

const footerStyle: Partial<IStackStyles> = {
  root: {
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    width: "100%",
    height: "20vh",
    boxShadow: Depths.depth4
  }
}

const iconClass = mergeStyles({
  fontSize: 15,
  height: 15,
  width: 20,
  color: 'red',
});

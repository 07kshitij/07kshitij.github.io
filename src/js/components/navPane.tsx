import * as React from "react";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Pivot, PivotItem, IPivotStyles, PivotLinkSize } from "@fluentui/react/lib/Pivot";
// import { Label } from "@fluentui/react/lib/Label";
// import { Link } from "@fluentui/react/lib/Link";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";

export const NavPane: React.FC = () => {
  return (
    <Stack horizontal horizontalAlign="space-between" styles={navHeaderStyle}>
      <Stack>
        <Text variant="xLarge" styles={nameStyles}>@kshitij_07</Text>
      </Stack>
      <Stack>
        <Pivot linkSize={PivotLinkSize.large}>
          <PivotItem headerText="About">
            {/* <Label> About </Label> */}
          </PivotItem>
          <PivotItem headerText="Blog">
            {/* <Label> Blog </Label> */}
          </PivotItem>
          <PivotItem headerText="Resume">
            {/* <Label> Resume </Label> */}
          </PivotItem>
          <PivotItem headerText="Contact">
            {/* <Label> Contact </Label> */}
          </PivotItem>
        </Pivot>
      </Stack>
    </Stack>
  )
}

const navHeaderStyle: Partial<IStackStyles> = {
  root: {
    position: "sticky",
    top: "0",
    backgroundColor: "black",
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingTop: 15
  }
}

const navPaneStyle: Partial<IPivotStyles> = {
  text: {
    color: "white"
  }
}

const nameStyles: Partial<ITextStyles> = {
  root: {
    color: "white",
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30
  }
}
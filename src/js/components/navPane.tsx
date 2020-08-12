import * as React from "react";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Pivot, PivotItem, IPivotStyles, PivotLinkSize, PivotLinkFormat } from "@fluentui/react/lib/Pivot";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Link, ILinkStyles } from "@fluentui/react/lib/Link";
import "../../css/styles.css";

export const NavPane: React.FC = () => {
  return (
    <Stack horizontal horizontalAlign="space-between" styles={navHeaderStyle}>
      <Stack>
        <Link styles={nameStyles} href="https://github.com/07kshitij/07kshitij.github.io">
          <Text variant="xLarge">@07kshitij</Text>
        </Link>
      </Stack>
      <Stack>
        <Pivot 
          className="navPane"
          linkSize={PivotLinkSize.large} 
          styles={navPaneStyle} >
          <PivotItem headerText="Home" ariaLabel="Home">
          </PivotItem>
          <PivotItem headerText="About" ariaLabel="About">
          </PivotItem>
          <PivotItem headerText="Blog" ariaLabel="Blog">
          </PivotItem>
          <PivotItem headerText="Resume" ariaLabel="Resume">
          </PivotItem>
          <PivotItem headerText="Contact" ariaLabel="Contact">
          </PivotItem>
        </Pivot>
      </Stack>
    </Stack>
  )
}

const navHeaderStyle: Partial<IStackStyles> = {
  root: {
    position: "sticky",
    top: 0,
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
    color: "white",
  }
}

const nameStyles: Partial<ILinkStyles> = {
  root: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30
  }
}
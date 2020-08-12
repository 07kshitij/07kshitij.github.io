import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { Link, ILinkStyles } from "@fluentui/react/lib/Link";

export const Resume: React.FC = () => {
  return (
    <Stack styles={detailCardStyles} horizontalAlign="center" id="about" verticalAlign="center">
      <Link href="https://drive.google.com/file/d/1YVBS0hK9ZHZNAXIdeNFMPpAE0G8cFla9/view?usp=sharing">
        <Text
          variant="xxLargePlus"
          styles={headerStyle}>
          {" Resume "}
        </Text>
      </Link>
    </Stack>
  )
}

const detailCardStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
    height: "15vw",
    boxShadow: Depths.depth16,
    backgroundColor: "white"
  }
}

const headerStyle: Partial<ITextStyles> = {
  root: {
    padding: 20,
    fontSize: "40px"
  }
}
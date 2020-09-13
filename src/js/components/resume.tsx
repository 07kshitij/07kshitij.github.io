import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { Link, ILinkStyles } from "@fluentui/react/lib/Link";

export interface IResumeProps {
  resumeRef: React.RefObject<HTMLDivElement>
}

export const Resume: React.FC<IResumeProps> = (props) => {
  return (
    <div ref={props.resumeRef}>
      <Stack styles={detailCardStyles} horizontalAlign="center" id="resume" verticalAlign="center">
        <Link target="_blank" href="https://drive.google.com/file/d/1YVBS0hK9ZHZNAXIdeNFMPpAE0G8cFla9/view?usp=sharing">
          <Text
            variant="xxLarge"
            styles={headerStyle}>
            {" Resume "}
          </Text>
        </Link>
      </Stack>
    </div>
  )
}

const detailCardStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
    height: "15vh",
    backgroundColor: "white"
  }
}

const headerStyle: Partial<ITextStyles> = {
  root: {
    padding: 20
  }
}
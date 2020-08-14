import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

export interface IContactProps {
  contactRef: React.RefObject<HTMLDivElement>
}

export const Contact: React.FC<IContactProps> = (props) => {
  return (
    <div ref={props.contactRef}>
      <Stack styles={detailCardStyles} horizontalAlign="center" id="contact">
        <Text
          variant="xxLarge" 
          styles={headerStyle}>
        {" Contact "}
        </Text>
      </Stack>
    </div>
  )
}

const detailCardStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
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
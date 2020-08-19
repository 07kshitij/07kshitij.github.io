import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
// @ts-ignore
import { SocialIcon } from "react-social-icons";

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
          {"Contact"}
        </Text>
        <Stack horizontal gap="1vw">
          <SocialIcon url="https://github.com/07kshitij" />
          <SocialIcon url="https://www.facebook.com/kshitij.1000000007" />
          <SocialIcon url="https://medium.com/@kshitijagrawal2607" />
          <SocialIcon url="mailto:kshitijagrawal2607@gmail.com" />
          <SocialIcon url="https://www.linkedin.com/in/kshitij-agrawal-50712b16b/" />
        </Stack>
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
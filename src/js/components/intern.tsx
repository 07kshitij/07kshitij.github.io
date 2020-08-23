import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { PrimaryButton, IButtonStyles } from "@fluentui/react/lib/Button";
import "../../css/styles.css";

export const InternCard: React.FC = () => {
  return (
    <Stack styles={internCard} wrap>
      <div>
        <PrimaryButton text={"Internship"} styles={sectionTitleStyles} />
      </div>
      <Stack horizontalAlign="center" wrap>
        <img className="mslogo" src="../../../public/microsoft.png" alt="image" />
        <Text variant="xLargePlus" styles={titleStyle}>
          Software Engineering Internship
        </Text>
        <Text variant="large" styles={titleStyle}>
          <b className="garageText">@Garage India</b>
          {" | "}
          <b className="teamsText">Microsoft Teams Mobile</b>
        </Text>
      </Stack>
    </Stack>
  )
}

const sectionTitleStyles: Partial<IButtonStyles> = {
  root: {
    marginBottom: '1vh',
    position: 'inherit',
    fontSize: '16px'
  }
}
const internCard: Partial<IStackStyles> = {
  root: {
    boxShadow: Depths.depth4,
    margin: 10,
    paddingBottom: 10,
    paddingRight: 10,
    maxWidth: '450px',
    width: '100%',
    backgroundColor: 'whitesmoke'
  }
}

const titleStyle: Partial<ITextStyles> = {
  root: {
    paddingBottom: '1vh',
    textAlign: 'center',
    paddingLeft: 10
  }
}


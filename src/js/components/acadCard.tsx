import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { PrimaryButton, IButtonStyles } from "@fluentui/react/lib/Button";
import { Link } from "@fluentui/react/lib/Link";
import "../../css/styles.css";

export const AcadsCard: React.FC = () => {
  return (
    <Stack styles={acadCard} wrap>
      <div>
        <PrimaryButton text={"Academic Qualifications & Achievements"} styles={sectionTitleStyles} />
      </div>
      <Stack gap="1vh" styles={{ root: { margin: '1vw', padding: '1vw' } }} wrap>
        <Text variant="mediumPlus"><b>Bachelors of Technology (2017 - Present)</b></Text>
        <Text styles={separatorStyles} variant="mediumPlus">
          Electronics {"&"} Electrical Communication Engineering <br />
          <Link href="https://en.wikipedia.org/wiki/Indian_Institute_of_Technology_Kharagpur">@IIT Kharagpur</Link>
        </Text>
        <Text variant="mediumPlus"><b>ACM - ICPC Amritapuri Doublesite Regional Contest (2019)</b></Text>
        <Text variant="mediumPlus">
          <Link href="https://icpc.global/ICPCID/Q24S7K2P1JCJ">Honorable Mention</Link>
        </Text>
      </Stack>
    </Stack>
  )
}

const acadCard: Partial<IStackStyles> = {
  root: {
    boxShadow: Depths.depth4,
    margin: 10,
    maxWidth: '450px',
    width: '100%',
    backgroundColor: 'whitesmoke'
  }
}

const separatorStyles: Partial<ITextStyles> = {
  root: {
    borderBottom: '1px solid #E1DFDD',
    paddingBottom: '1vh'
  }
}

const sectionTitleStyles: Partial<IButtonStyles> = {
  root: {
    marginBottom: '1vh',
    position: 'inherit',
    fontSize: '16px'
  }
}

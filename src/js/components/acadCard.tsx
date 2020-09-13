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
          <Link target="_blank" href="https://en.wikipedia.org/wiki/Indian_Institute_of_Technology_Kharagpur">IIT Kharagpur</Link>
        </Text>
        <Text variant="mediumPlus"><b>ACM - ICPC Amritapuri Doublesite Regional Contest (2019)</b></Text>
        <Text variant="mediumPlus">
          <Link target="_blank" href="https://icpc.global/ICPCID/Q24S7K2P1JCJ">Honorable Mention</Link>
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
    backgroundColor: 'white',
    border: '1px solid rgba(10, 10, 10, 0.1)',
    selectors: {
      ':hover': {
        backgroundColor: 'rgba(10, 10, 10, 0.05)'
      }
    }
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

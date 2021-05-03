import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { PrimaryButton, IButtonStyles } from "@fluentui/react/lib/Button";
import "../../css/styles.css";

export const DetailsCard: React.FC = () => {
  return (
    <Stack styles={detailsCard} wrap>
      <div>
        <PrimaryButton text={"About Me"} styles={sectionTitleStyles} />
      </div>
      <Stack styles={contentStyle} gap="1vh">
        <Text variant="large" styles={separatorStyles}>
          <b>$</b> Hi, I'm Kshitij, a Final year Undergraduate Student.
        </Text>
        <Text variant="large" styles={separatorStyles}>
          <b>$</b> My favorite hobby is "Algorithmic Problem Solving", <i>aka</i> <b>Competitive 
            Programming</b>, and I've participated in a lot of renowned competitions 
            notably <i> ACM - ICPC</i>, <i> Google CodeJam </i> & <i> Facebook HackerCup </i> amongst the others.
        </Text>
        <Text variant="large">
          <b>$</b> I'm currently learning Full Stack Web Development and also learning fundamentals of Computer Systems.
        </Text>
      </Stack>        
    </Stack>
  )
}

const detailsCard: Partial<IStackStyles> = {
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

const sectionTitleStyles: Partial<IButtonStyles> = {
  root: {
    marginBottom: '1vh', 
    position: 'inherit',
    fontSize: '16px'
  }
}

const separatorStyles: Partial<ITextStyles> = {
  root: {
    borderBottom: '1px solid #E1DFDD',
    paddingBottom: '1vh'
  }
}


const contentStyle: Partial<ITextStyles> = {
  root: {
    padding: '1.5vw'
  }
}
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
        <Text variant="large">
          <b>$</b> Hi, I'm Kshitij, a Final year Undergraduate Student.
        </Text>
        <Text variant="large">
          <b>$</b> I came across this wonderful concept of programming computers in my freshman year 
          and have been hanging around it for quite a while now.
        </Text>
        <Text variant="large">
          <b>$</b> My interests majorly include "Algorithmic Problem Solving", aka <b>Competitive 
            Programming</b>, and I've participated in a lot of renowned Competitions 
            notably <i> ACM - ICPC</i>, <i> Google KickSart </i> & <i> Facebook HackerCup </i> amongst the others.
        </Text>
        <Text variant="large">
          <b>$</b> I'm currently learning Full Stack Web Development and also learning fundamentals of Computer Systems.
        </Text>
        <Text variant="large">
          <b>$</b> I'm a huge Cricket fan and follow matches of all the 3 formats regularly.
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
    backgroundColor: 'whitesmoke'  
  }
}

const sectionTitleStyles: Partial<IButtonStyles> = {
  root: {
    marginBottom: '1vh', 
    position: 'inherit',
    fontSize: '16px'
  }
}

const contentStyle: Partial<ITextStyles> = {
  root: {
    padding: '1.5vw'
  }
}
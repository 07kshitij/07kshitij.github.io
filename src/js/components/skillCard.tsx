import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { PrimaryButton, IButtonStyles } from "@fluentui/react/lib/Button";
import "../../css/styles.css";

export const SkillCard: React.FC = () => {
  return (
    <Stack styles={skillCard} wrap>
      <div>
        <PrimaryButton text={"Skills"} styles={sectionTitleStyles} />
      </div>
      <Stack gap="1vh" horizontal styles={{ root: { margin: '1vw', padding: '1vw' } }} wrap>
        {/* <!-- Markup Languages --> */}
        <PrimaryButton text={"HTML5"} styles={skillListStyles} />
        <PrimaryButton text={"CSS3"} styles={skillListStyles} />
        {/* <!--Programming Langugages--> */}
        <PrimaryButton text={"C"} styles={skillListStyles} />
        <PrimaryButton text={"C++"} styles={skillListStyles} />
        <PrimaryButton text={"Python3"} styles={skillListStyles} />
        {/* <!--Frontend Technologies--> */}
        <PrimaryButton text={"JavaScript"} styles={skillListStyles} />
        <PrimaryButton text={"TypeScript"} styles={skillListStyles} />
        <PrimaryButton text={"React"} styles={skillListStyles} />
        {/* <!--Backend Frameworks--> */}
        <PrimaryButton text={"Flask"} styles={skillListStyles} />
        <PrimaryButton text={"Node"} styles={skillListStyles} />
        {/* <!--Others--> */}
        <PrimaryButton text={"Git"} styles={skillListStyles} />
      </Stack>
    </Stack>
  )
}

const skillCard: Partial<IStackStyles> = {
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

const skillListStyles: Partial<IButtonStyles> = {
  root: {
    backgroundColor: 'lightgray',
    color: 'black',
    border: 'none',
    position: 'inherit'
  }
}
import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths";
import { PrimaryButton, IButtonStyles } from "@fluentui/react/lib/Button";
import "../../css/styles.css";

export const SkillCard: React.FC = () => {
  return (
    <Stack styles={skillCard} wrap>
      <div>
        <PrimaryButton text={"Skills"} styles={sectionTitleStyles} />
      </div>
      <Stack tokens={{ childrenGap: "1vh" }} horizontal styles={{ root: { margin: "1vw", padding: "1vw" } }} wrap>
        {/* <!-- Markup Languages --> */}
        <PrimaryButton text={"HTML5"} styles={skillListStyles} />
        <PrimaryButton text={"CSS3"} styles={skillListStyles} />
        {/* <!--Programming Langugages--> */}
        <PrimaryButton text={"C"} styles={skillListStyles} />
        <PrimaryButton text={"C++"} styles={skillListStyles} />
        <PrimaryButton text={"Python3"} styles={skillListStyles} />
        {/* <!--Frontend Languages--> */}
        <PrimaryButton text={"JavaScript"} styles={skillListStyles} />
        <PrimaryButton text={"TypeScript"} styles={skillListStyles} />
        {/* <!--Backend Frameworks--> */}
        <PrimaryButton text={"Flask"} styles={skillListStyles} />
        <PrimaryButton text={"Node"} styles={skillListStyles} />
        {/* <!--Others--> */}
        <PrimaryButton text={"Git"} styles={skillListStyles} />
      </Stack>
    </Stack>
  );
};

const skillCard: Partial<IStackStyles> = {
  root: {
    boxShadow: Depths.depth4,
    margin: 10,
    maxWidth: "450px",
    width: "100%",
    backgroundImage: "linear-gradient(0deg, rgba(8, 8, 200, 0.1), rgba(8, 8, 200, 0.3))",
    border: "1px solid rgba(10, 10, 10, 0.1)",
    selectors: {
      ":hover": {
        backgroundImage: "linear-gradient(0deg, rgba(8, 8, 200, 0.2), rgba(8, 8, 200, 0.4))",
      },
    },
  },
};

const sectionTitleStyles: Partial<IButtonStyles> = {
  root: {
    marginBottom: "1vh",
    position: "inherit",
    fontSize: "16px",
  },
};

const skillListStyles: Partial<IButtonStyles> = {
  root: {
    backgroundColor: "rgba(8, 8, 255, 0.4)",
    color: "black",
    border: "none",
    position: "inherit",
  },
};

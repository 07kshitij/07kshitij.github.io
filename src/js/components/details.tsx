import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths";
import { PrimaryButton, IButtonStyles } from "@fluentui/react/lib/Button";
import "../../css/styles.css";

export const DetailsCard: React.FC = () => {
  return (
    <Stack styles={detailsCard} wrap>
      <div>
        <PrimaryButton text={"About Me"} styles={sectionTitleStyles} />
      </div>
      <Stack styles={contentStyle} tokens={{ childrenGap: "1vh" }}>
        <Text variant="large" styles={separatorStyles}>
          <b>$</b> Hi, I'm Kshitij Agrawal, a recent graduate from IIT Kharagpur.
        </Text>
        <Text variant="large" styles={separatorStyles}>
          <b>$</b> My favorite hobby is <b>Competitive Programming</b>, and I've participated in a lot of renowned
          competitions notably <i> ACM - ICPC</i>, <i> Google CodeJam </i> & <i> Facebook HackerCup </i> amongst the
          others.
        </Text>
        <Text variant="large">
          <b>$</b> I'm currently learning Full Stack Web Development and also learning fundamentals of Computer Systems.
        </Text>
      </Stack>
    </Stack>
  );
};

const detailsCard: Partial<IStackStyles> = {
  root: {
    boxShadow: Depths.depth4,
    margin: 10,
    width: "80%",
    backgroundImage: "linear-gradient(0deg, rgba(8, 8, 200, 0.1), rgba(8, 8, 200, 0.3))",
    border: "1px solid rgba(10, 10, 10, 0.1)",
    selectors: {
      ":hover": {
        backgroundImage: "linear-gradient(0deg, rgba(8, 8, 200, 0.1), rgba(8, 8, 200, 0.4))",
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

const separatorStyles: Partial<ITextStyles> = {
  root: {
    borderBottom: "1px solid white",
    paddingBottom: "1vh",
  },
};

const contentStyle: Partial<ITextStyles> = {
  root: {
    padding: "1.5vw",
  },
};

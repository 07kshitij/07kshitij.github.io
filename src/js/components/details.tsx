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
          <b>$</b> Hi, I'm <b>Kshitij Agrawal</b>, a batch of 2017 - 21 graduate from IIT Kharagpur, and an aspiring
          Software Engineer
        </Text>
        <Text variant="large" styles={separatorStyles}>
          <b>$</b> I enjoy solving <b>Algorithmic problems</b>, and have participated in a lot of renowned
          competitions including the <b><i>ACM - ICPC</i></b>.
        </Text>
        <Text variant="large" styles={separatorStyles}>
          <b>$</b> I aspire to work on complex problems involving scale and learning more about Distributed Systems.
        </Text>
        <Text variant="large">
          <b>$</b> Besides coding, I follow <i>Cricket</i> a lot and currently fascinated by the science behind <i>Formula - 1</i>.
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
    minWidth: "300px",
    backgroundColor: "rgba(62, 64, 167, 0.2)",
    border: "1px solid rgba(10, 10, 10, 0.1)",
    selectors: {
      ":hover": {
        backgroundImage: "linear-gradient(0deg, rgba(62, 64, 167, 0.1), rgba(62, 64, 167, 0.4))",
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

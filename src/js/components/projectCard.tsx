import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths";
import { PrimaryButton, IButtonStyles } from "@fluentui/react/lib/Button";
import { Link } from "@fluentui/react/lib/Link";
import "../../css/styles.css";

export const ProjectCard: React.FC = () => {
  return (
    <Stack styles={projectCard} wrap>
      <div>
        <PrimaryButton text={"Projects"} styles={sectionTitleStyles} />
      </div>
      <Stack tokens={{ childrenGap: "1vh" }} styles={{ root: { margin: "1vw", paddingLeft: 10 } }} wrap>
        <Link target="_blank" styles={separatorStyles} href="https://github.com/07kshitij/chess">
          <img src={"https://github.com/favicon.ico"} className="github-icon" alt="Github-Icon" /> 07kshitij / chess
        </Link>
        <Link target="_blank" styles={separatorStyles} href="https://github.com/07kshitij/CS60075-Team-11-Task-1">
          <img src={"https://github.com/favicon.ico"} className="github-icon" alt="Github-Icon" /> 07kshitij /
          CS60075-Team-11-Task-1
        </Link>
        <Link target="_blank" styles={separatorStyles} href="https://github.com/07kshitij/Multilingual_Lip_Reader">
          <img src={"https://github.com/favicon.ico"} className="github-icon" alt="Github-Icon" /> 07kshitij /
          Multilingual_Lip_Reader
        </Link>
        {/* <Link target="_blank" styles={separatorStyles} href="https://github.com/07kshitij/07kshitij.github.io">
          <img src={"https://github.com/favicon.ico"} className="github-icon" alt="Github-Icon"/> {" "}
            07kshitij / 07kshitij.github.io
          </Link> */}
        <Link target="_blank" styles={separatorStyles} href="https://github.com/07kshitij/Quarantine-Projects">
          <img src={"https://github.com/favicon.ico"} className="github-icon" alt="Github-Icon" /> 07kshitij /
          Quarantine-Projects
        </Link>
        <Link target="_blank" styles={separatorStyles} href="https://github.com/lbs-iitkgp/Opensoft-2019">
          <img src={"https://github.com/favicon.ico"} className="github-icon" alt="Github-Icon" /> lbs-iitkgp /
          Opensoft-2019
        </Link>
      </Stack>
    </Stack>
  );
};

const projectCard: Partial<IStackStyles> = {
  root: {
    boxShadow: Depths.depth4,
    margin: 10,
    paddingBottom: 10,
    paddingRight: 10,
    maxWidth: "450px",
    width: "100%",
    backgroundColor: "rgba(62, 64, 167, 0.2)",
    border: "1px solid rgba(10, 10, 10, 0.1)",
    selectors: {
      ":hover": {
        backgroundImage: "linear-gradient(0deg, rgba(62, 64, 167, 0.1), rgba(62, 64, 167, 0.4))",
      },
    },
  },
};

const separatorStyles: Partial<ITextStyles> = {
  root: {
    borderBottom: "1px solid white",
    paddingBottom: "1vh",
    color: "black"
  },
};

const sectionTitleStyles: Partial<IButtonStyles> = {
  root: {
    marginBottom: "1vh",
    position: "inherit",
    fontSize: "16px",
  },
};

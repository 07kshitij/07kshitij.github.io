import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Link, ILinkStyles } from "@fluentui/react/lib/Link";
import { DefaultButton, IButtonStyles } from "@fluentui/react/lib/Button"
import "../../css/styles.css";

export interface IBlogProps {

}

export const Blog: React.FC<IBlogProps> = (props) => {

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, []);

  return (
    <Stack styles={blogStyles}>
      <Stack horizontal horizontalAlign="space-between" styles={navHeaderStyle}>
        <Link styles={nameStyles} href="https://github.com/07kshitij/07kshitij.github.io">
          @07kshitij
      </Link>
        <DefaultButton styles={buttonStyles} href="/">Home</DefaultButton>
      </Stack>
    </Stack>
  )
}
const navHeaderStyle: Partial<IStackStyles> = {
  root: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'black',
    width: "100%",
    paddingLeft: '2vw',
    paddingRight: '2vw',
    paddingBottom: '2vh',
    paddingTop: '2vh'
  }
}

const blogStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
  }
}


const nameStyles: Partial<ILinkStyles> = {
  root: {
    fontSize: '20px',
  }
}

const buttonStyles: Partial<IButtonStyles> = {
  root: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRight: '0.5vw',
    fontSize: '20px ',
    width: '2vw',
  }
}

import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Text, ITextStyles } from "@fluentui/react/lib/Text";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { Link, ILinkStyles } from "@fluentui/react/lib/Link";
import { DefaultButton, IButtonStyles } from "@fluentui/react/lib/Button"

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
      <DefaultButton styles={buttonStyles} href="#/">Home</DefaultButton>
    </Stack>

        <Stack styles={detailCardStyles} horizontalAlign="center" id="blog">
          <Text
            variant="xxLarge" 
            styles={headerStyle}>
          {" Recent Posts "}
          </Text>
          <Text 
            variant="large">
          This place is currently empty. Please check after a while !!
          </Text>
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


const detailCardStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
    minHeight: "100vh",
    boxShadow: Depths.depth16,
    backgroundColor: "white"
  }
}

const headerStyle: Partial<ITextStyles> = {
  root: {
    padding: 20
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

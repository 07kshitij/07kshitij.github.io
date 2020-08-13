import * as React from "react";
import { IconButton } from "@fluentui/react/lib/Button";
import { IIconProps } from "@fluentui/react/lib/Icon";
import "../../css/styles.css";

const upButton: IIconProps = { iconName: 'DoubleChevronUp' };

export const ScrollToTop: React.FC = () => {
  const [isVisible, toggleVisibility] = React.useState(false);

  const checkScroll = () => {
    if (!isVisible && window.pageYOffset >= 200) {
      toggleVisibility(true);
    } else if (isVisible && window.pageYOffset < 200) {
      toggleVisibility(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener("scroll", checkScroll);

  return (
    <IconButton
      className="scroll-to-top"
      iconProps={upButton}
      title="Scroll to Top"
      ariaLabel="scrollToTop"
      onClick={scrollToTop}
      style={{display: isVisible ? 'flex' : 'none' }}
    />
  )
}
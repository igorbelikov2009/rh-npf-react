import React, { FC, useEffect, useState } from "react";
import styles from "./SidebarLink.module.scss";

export interface ISidebarLink {
  itemName: string;
  isActive: boolean;
}

const SidebarLink: FC<ISidebarLink> = ({ itemName, isActive }) => {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (anchorTarget) {
      anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <li className={styles.li}>
      <a href={`#${itemName}`} onClick={handleClick} className={isActive ? styles["link_active"] : styles["link"]}>
        {itemName}
      </a>
    </li>
  );
};

export default SidebarLink;

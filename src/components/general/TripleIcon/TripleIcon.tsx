import React, { FC, useState } from "react";
import styles from "./TripleIcon.module.scss";
// import imgUrl from "../../../assets/icons/triple/Hamburger/Dark.svg";

interface TripleIconProps {
  isBackgroundWhite: boolean;
  icon: string;
}

const TripleIcon: FC<TripleIconProps> = ({ isBackgroundWhite, icon }) => {
  // const [isLocalHovered, setIsLocalHovered] = useState(false);
  // const state = "Colored";
  // let imgUrl = `../../../assets/icons/triple/${icon}/Dark.svg`;

  //   useEffect(()=> {
  //     return imgUrl:
  //   },[])

  return <img src={`../../../assets/icons/triple/Hamburger/Dark.svg`} alt={icon} className={styles["triple-icon"]} />;
};

export default TripleIcon;

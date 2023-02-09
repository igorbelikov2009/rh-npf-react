import React, { FC } from "react";
import ArchiveLink, { ArchiveLinkProps } from "../../../general/ArchiveLink/ArchiveLink";
import IndicatorRow, { IIndicatorRow } from "../IndicatorRow/IndicatorRow";
import styles from "./IndicatorsYear.module.scss";

export interface IIndicatorsYear {
  heading?: string;
  subheading?: string;
  indicatorRows?: IIndicatorRow[];
  archiveLinks: ArchiveLinkProps[];
}

interface IndicatorsYearProps {
  isVisible: boolean;
  heading?: string;
  subheading?: string;
  indicatorRows?: IIndicatorRow[];
  archiveLinks: ArchiveLinkProps[];
}

const IndicatorsYear: FC<IndicatorsYearProps> = ({ isVisible, heading, subheading, indicatorRows, archiveLinks }) => {
  return (
    <>
      {isVisible && (
        <div>
          <div>
            <div className={styles["indicators-year"]}>
              <p className={styles["indicators-year__heading"]}>{heading}</p>

              <p className={styles["indicators-year__subheading"]}>{subheading}</p>
            </div>
            {indicatorRows &&
              indicatorRows.map((indicatorRow, index) => (
                <IndicatorRow key={index} title={indicatorRow.title} index={indicatorRow.index} />
              ))}
          </div>

          {archiveLinks.map((link, index) => (
            <ArchiveLink key={index} href={link.href} title={link.title} />
          ))}
        </div>
      )}
    </>
  );
};

export default IndicatorsYear;

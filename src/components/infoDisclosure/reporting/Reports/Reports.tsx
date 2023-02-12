import React, { FC } from "react";
import Report, { IReport } from "../Report/Report";

interface ReportsProps {
  reports: IReport[];
  isVisible: boolean;
}

const Reports: FC<ReportsProps> = ({ reports, isVisible }) => {
  return (
    <>
      {isVisible && (
        <div>
          {reports.map((report, index) => (
            <Report key={index} heading={report.heading} archiveLinks={report.archiveLinks} />
          ))}
        </div>
      )}
    </>
  );
};

export default Reports;

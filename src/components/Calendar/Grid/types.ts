import { PaginatedSchedulerData, SchedulerProjectData } from "@/types/global";

export type GridProps = {
  zoom: number;
  rows: number;
  data: PaginatedSchedulerData;
  onTileClick?: (e: React.MouseEvent, data: SchedulerProjectData) => void;
  onContextMenu?: (e: React.MouseEvent, data: SchedulerProjectData) => void;
};

export type StyledSpanProps = {
  position: "left" | "right";
};

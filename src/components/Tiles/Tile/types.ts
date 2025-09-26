import { SchedulerProjectData } from "@/types/global";

export type TileProps = {
  row: number;
  data: SchedulerProjectData;
  zoom: number;
  onTileClick?: (e: React.MouseEvent, data: SchedulerProjectData) => void;
  onContextMenu?: (e: React.MouseEvent, data: SchedulerProjectData) => void;
};

export type StyledTextProps = {
  bold?: boolean;
};

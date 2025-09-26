import { PaginatedSchedulerData, SchedulerProjectData } from "@/types/global";

export type TilesProps = {
  zoom: number;
  data: PaginatedSchedulerData;
  onTileClick?: (e: React.MouseEvent, data: SchedulerProjectData) => void;
  onContextMenu?: (e: React.MouseEvent, data: SchedulerProjectData) => void;
};

export type PlacedTiles = JSX.Element[];

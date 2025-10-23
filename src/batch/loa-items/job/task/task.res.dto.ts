export class TaskReaderRes {
  PageNo: number;
  PageSize: number;
  TotalCount: number;
  Items: Array<MarketItemInfo>;
}
export class MarketItemInfo {
  Id: number;
  Name: string;
  Grade: string;
  Icon: string;
  BundleCount: number;
  TradeRemainCount: number;
  YDayAvgPrice: number;
  RecentPrice: number;
  CurrentMinPrice: number;
}

export class TaskProcessorRes {
  id: number;
  status: number;
  data: string;
}

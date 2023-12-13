export interface DataRangeInterface {
  dataStart: number;
  dataEnd: number;
}

export interface WorkItemInterface extends DataRangeInterface {
  id?: number;
  specilization: string;
  location: string;
}

export interface WorkInterface {
  dataRange: DataRangeInterface;
  workList: WorkItemInterface[];
}

export interface SkillsInterface {
  id?: number,
  nameIcon?: string,
  title: string,
  progress: number
}

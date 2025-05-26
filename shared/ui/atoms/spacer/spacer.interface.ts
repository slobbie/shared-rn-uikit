export interface ISpace {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export type SpacerComponent = React.FC<ISpace> & {};

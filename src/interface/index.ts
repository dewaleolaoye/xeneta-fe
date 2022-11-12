export interface Rate {
  day: string;
  mean: number;
  low: number;
  high: number;
}

export interface RateDTO {
  origin: string;
  destination: string;
}
export interface PortsRO {
  code: string;
  name: string;
}

// RadioProps
export interface RadioItemProps {
  value: string;
  title: string;
  name: string;
}

export interface RadioProps {
  radioItems: RadioItemProps[];
  emitValue: (event: React.SetStateAction<string>) => void;
}

export interface RadioLabelProps {
  value: string;
  title: string;
  name: string;
  isActive: boolean;
  emitValue: (event: React.SetStateAction<string>) => void;
}
// RadioProps

// SliderProps
export interface SliderProps {
  title: string;
  name: string;
  min: number;
  max: number;
  step: number;
  value: number;
  emitValue: (event: React.SetStateAction<number>) => void;
}
// SliderProps

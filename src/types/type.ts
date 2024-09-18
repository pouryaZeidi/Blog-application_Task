export type InputComponentProps = {
    label: string;
    placeholder: string;
    type: string;
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  };
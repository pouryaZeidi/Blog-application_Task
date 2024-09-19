export type InputComponentProps = {
    label: string;
    placeholder: string;
    type: string;
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  };
  export type cardprops = {
    txt:string;
    src:string;
    des:string;
  }
  export type idprops = {
    title:string;
    src:string;
    desc:string;
  }
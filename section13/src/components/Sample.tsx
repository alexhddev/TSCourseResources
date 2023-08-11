import { useState } from "react";

/* eslint-disable react-refresh/only-export-components */
type SampleProps = {
    message: string;
};

export const Sample = ({ message }: SampleProps) => <h2>{message}</h2>;

export const Sample2 = (props: SampleProps) => <h2>{props.message}</h2>;

export function Sample3(props: SampleProps) {
    return (
        <h2>
            {props.message}
        </h2>
    )
}

export function genericFunction<T>(arg: T){
    console.log(arg)
}

export const genericFunction2 = <T,>(arg: T) =>{
    console.log(arg)
}
  
export function Sample4(){
    const [count, setCount] = useState(0);
    return (
      <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    )
  }
















import React, {useState} from "react";
import Champions from "../components/Champions";
export default function App(){
  const [name, setName] = useState<string>('未定义变量')
  const [age, setAge] = useState<number>(28)
  const [isProgrammer, setIsProgrammer] = useState<boolean>(true)

  return(
    <div>
      <Champions />
    </div>
  );
}
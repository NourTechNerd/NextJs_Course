import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {

  console.log("Server Component")  
  return (

    <div>
      <h1 className="text-3xl text-blue-500">Hello to Next js first app</h1>
      <Hello />
    </div>
  );
}

"use client";

import { Line } from "react-chartjs-2";
import {options, data} from "../components/Chart";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Hello world!</h1>
      <Line data={data} width={400} height={100} options={options} />;
    </main>
  );
}

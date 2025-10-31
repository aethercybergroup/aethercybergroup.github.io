"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { quarter: "Q1 2023", progress: 20 },
  { quarter: "Q2 2023", progress: 40 },
  { quarter: "Q3 2023", progress: 60 },
  { quarter: "Q4 2023", progress: 80 },
  { quarter: "Q1 2024", progress: 90 },
  { quarter: "Q2 2024", progress: 100 },
];

export default function RoadmapPage() {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-3xl font-bold">Roadmap</h1>
      <p className="text-lg">Our journey towards excellence is mapped across key milestones.</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="progress" stroke="#00bcd4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Case A', value: 400 },
  { name: 'Case B', value: 300 },
  { name: 'Case C', value: 500 },
  { name: 'Case D', value: 200 },
];

export default function CaseStudiesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Case Studies</h1>
      <p className="text-gray-300">Explore our successful engagements and the impact we've made for clients.</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#00bcd4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

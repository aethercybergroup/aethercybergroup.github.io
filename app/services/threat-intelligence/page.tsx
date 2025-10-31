'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Malware', count: 120 },
  { name: 'Phishing', count: 98 },
  { name: 'Ransomware', count: 86 },
  { name: 'Exploits', count: 65 },
];

export default function ThreatIntelligencePage() {
  return (
    <section className="prose dark:prose-invert">
      <h1>Threat Intelligence</h1>
      <p>Stay informed about emerging threats with our intelligence feeds and analysis.</p>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from "recharts";

const data = [
  { subject: "Speed", A: 120, B: 110, fullMark: 150 },
  { subject: "Sharp", A: 98, B: 130, fullMark: 150 },
  { subject: "Knowledge", A: 86, B: 130, fullMark: 150 },
  { subject: "Resposibility", A: 99, B: 100, fullMark: 150 },
  { subject: "Perfomance", A: 85, B: 90, fullMark: 150 },
  { subject: "Perfomance", A: 85, B: 90, fullMark: 150 },
  { subject: "Perfomance", A: 85, B: 90, fullMark: 150 },
  { subject: "Perfomance", A: 85, B: 90, fullMark: 150 },
];

export default function RadarStats() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        width={350}
        height={250}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar
          name="Main"
          dataKey="A"
          stroke="rgba(50, 100, 150, 1)"
          fill="var(--acent-color)"
          fillOpacity={0.5}
        />
        <Radar
          name="Main2"
          dataKey="B"
          stroke="rgba(53, 150, 50, 1)"
          fill="var(--acent-color)"
          fillOpacity={0.5}
        />
      </RadarChart>
    </div>
  );
}

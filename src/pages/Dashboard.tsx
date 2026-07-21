import { MOCK_ANALYTICS } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, CloudRain, Leaf, ArrowUpRight } from "lucide-react";
import { CarbonBadge } from "@/components/shared/CarbonBadge";

export default function Dashboard() {
  const { summary, dailyTrend, topOffenders } = MOCK_ANALYTICS;

  return (
    <div className="py-12 max-w-7xl mx-auto space-y-8">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Platform Analytics</h1>
          <p className="text-zinc-400">Mock metrics for "Zepto" integration.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Today's Orders" 
          value={summary.todaysOrders.toLocaleString()} 
          icon={<Activity className="text-zinc-400" />} 
          trend="+12% from yesterday"
        />
        <MetricCard 
          title="Platform Carbon Score" 
          value={summary.averageCarbonScore} 
          icon={<CloudRain className="text-blue-400" />}
          trend="Improved from B"
          valueColor="text-blue-400"
        />
        <MetricCard 
          title="Carbon Saved (Today)" 
          value={`${(summary.potentialCarbonSaved / 1000).toFixed(1)}t`} 
          icon={<Leaf className="text-zinc-900 dark:text-white" />}
          trend="+2.4t from yesterday"
          valueColor="text-zinc-900 dark:text-white"
        />
        <MetricCard 
          title="Recommendation Acceptance" 
          value={`${summary.acceptanceRate}%`} 
          icon={<ArrowUpRight className="text-zinc-400" />}
          trend="Industry average is 45%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 bg-zinc-950 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white">Emissions & Savings Trend</CardTitle>
            <CardDescription className="text-zinc-400">Daily total vs. saved carbon (kg)</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailyTrend} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSaved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="date" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val/1000}t`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="emissions" stroke="#ef4444" fillOpacity={1} fill="url(#colorEmissions)" name="Total Emissions" />
                <Area type="monotone" dataKey="saved" stroke="#10b981" fillOpacity={1} fill="url(#colorSaved)" name="Carbon Saved" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-zinc-950 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white">Top High-Emission Items</CardTitle>
            <CardDescription className="text-zinc-400">Frequently purchased offenders.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {topOffenders.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="text-xs text-zinc-500">{item.occurrences.toLocaleString()} orders</p>
                  </div>
                  <CarbonBadge emissions={item.avgEmissions} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon, trend, valueColor = "text-white" }: { title: string, value: string, icon: React.ReactNode, trend: string, valueColor?: string }) {
  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-zinc-400">
          {title}
        </CardTitle>
        <div className="w-4 h-4">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className={`text-3xl font-bold ${valueColor}`}>{value}</div>
        <p className="text-xs text-zinc-500 mt-1">
          {trend}
        </p>
      </CardContent>
    </Card>
  );
}

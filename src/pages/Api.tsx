import { Code } from "lucide-react";

export default function Api() {
  const mockRequest = `POST /v1/analyze-cart
Host: api.carboniq.io
Content-Type: application/json
Authorization: Bearer ciq_live_***

{
  "cartId": "crt_8932nf3",
  "items": [
    {
      "productId": "p_apples_imp",
      "quantity": 1
    },
    {
      "productId": "p_water_plastic",
      "quantity": 2
    }
  ]
}`;

  const mockResponse = `{
  "id": "analysis_9023",
  "totalCarbonEmissions": 12.1,
  "unit": "kg",
  "score": "C+",
  "recommendations": [
    {
      "sourceItemId": "p_apples_imp",
      "suggestedItem": {
        "productId": "p_apples_local",
        "name": "Local Fuji Apples"
      },
      "carbonSaved": 2.3,
      "tag": "Local Sourced"
    }
  ]
}`;

  return (
    <div className="py-12 max-w-5xl mx-auto space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-white mb-4">Developer API</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          CarbonIQ is built for engineers. Integrate our sub-50ms carbon estimation and recommendation engine directly into your e-commerce checkout flow.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Request Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-zinc-300">
            <Code className="w-5 h-5 text-zinc-900 dark:text-white" />
            <h3 className="font-semibold text-lg">1. Send Cart Data</h3>
          </div>
          <p className="text-zinc-500 text-sm">Send your user's cart items to our `/analyze-cart` endpoint.</p>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 overflow-hidden">
            <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950"></div>
              <span className="ml-2 text-xs font-mono text-zinc-500">request.http</span>
            </div>
            <pre className="p-6 text-sm font-mono text-zinc-300 overflow-x-auto whitespace-pre-wrap">
              <code>{mockRequest}</code>
            </pre>
          </div>
        </div>

        {/* Response Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-zinc-300">
            <Code className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-lg">2. Receive Recommendations</h3>
          </div>
          <p className="text-zinc-500 text-sm">We respond instantly with the total footprint and greener alternatives.</p>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 overflow-hidden">
            <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950"></div>
              <span className="ml-2 text-xs font-mono text-zinc-500">response.json</span>
            </div>
            <pre className="p-6 text-sm font-mono text-zinc-300 overflow-x-auto whitespace-pre-wrap">
              <code>{mockResponse}</code>
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}

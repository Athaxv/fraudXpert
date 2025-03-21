import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FraudTimeSeriesChart } from "@/components/fraud-time-series-chart"
import { FraudDimensionChart } from "@/components/fraud-dimension-chart"
import { EvaluationMatrix } from "@/components/evaluation-matrix"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">Analyze fraud detection performance and trends</p>
      </div>

      <Tabs defaultValue="time-series">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="time-series">Time Series</TabsTrigger>
          <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
          <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
        </TabsList>
        <TabsContent value="time-series" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fraud Detection Trends</CardTitle>
              <CardDescription>Compare predicted vs reported frauds over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <FraudTimeSeriesChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dimensions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fraud by Dimensions</CardTitle>
              <CardDescription>Compare fraud metrics across different dimensions</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <FraudDimensionChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="evaluation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Model Evaluation</CardTitle>
              <CardDescription>Confusion matrix, precision, and recall metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <EvaluationMatrix />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


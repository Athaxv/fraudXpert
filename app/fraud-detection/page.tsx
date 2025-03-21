import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RealTimeFraudDetection } from "@/components/real-time-fraud-detection"
import { BatchFraudDetection } from "@/components/batch-fraud-detection"

export default function FraudDetectionPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Fraud Detection</h1>
        <p className="text-muted-foreground">Detect fraud in real-time or batch process multiple transactions</p>
      </div>

      <Tabs defaultValue="real-time">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="real-time">Real-Time Detection</TabsTrigger>
          <TabsTrigger value="batch">Batch Detection</TabsTrigger>
        </TabsList>
        <TabsContent value="real-time" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Real-Time Fraud Detection</CardTitle>
              <CardDescription>Process a single transaction to detect potential fraud</CardDescription>
            </CardHeader>
            <CardContent>
              <RealTimeFraudDetection />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="batch" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Batch Fraud Detection</CardTitle>
              <CardDescription>Process multiple transactions in parallel</CardDescription>
            </CardHeader>
            <CardContent>
              <BatchFraudDetection />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FraudReportingForm } from "@/components/fraud-reporting-form"

export default function FraudReportingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Fraud Reporting</h1>
        <p className="text-muted-foreground">Report fraudulent transactions for investigation</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Fraud</CardTitle>
          <CardDescription>Submit details about a fraudulent transaction</CardDescription>
        </CardHeader>
        <CardContent>
          <FraudReportingForm />
        </CardContent>
      </Card>
    </div>
  )
}


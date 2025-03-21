/**
 * Model training page
 * Allows uploading transaction data and training the fraud detection model
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ModelTrainingForm } from "@/components/model-training-form"

export default function ModelTrainingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Model Training</h1>
        <p className="text-muted-foreground">Train the fraud detection model with transaction data</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Train Fraud Detection Model</CardTitle>
          <CardDescription>Upload transaction data to train the machine learning model</CardDescription>
        </CardHeader>
        <CardContent>
          <ModelTrainingForm />
        </CardContent>
      </Card>
    </div>
  )
}


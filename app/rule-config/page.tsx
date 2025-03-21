import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RuleConfigEditor } from "@/components/rule-config-editor"

export default function RuleConfigPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Rule Configuration</h1>
        <p className="text-muted-foreground">Configure fraud detection rules for the rule engine</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rule Engine Configuration</CardTitle>
          <CardDescription>Create and manage rules for fraud detection</CardDescription>
        </CardHeader>
        <CardContent>
          <RuleConfigEditor />
        </CardContent>
      </Card>
    </div>
  )
}


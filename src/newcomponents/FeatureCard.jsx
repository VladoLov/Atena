import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon, Rocket } from "lucide-react";

export const FeatureCard = ({ title, description, href, icon: Icon }) => (
  <Card className="flex flex-col h-full w-64">
    <CardHeader>
      <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
        {Icon && <Icon className="w-6 h-6 text-primary" />}
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardContent>{description}</CardContent>
    </CardContent>
    <CardFooter className="mt-auto">
      <Button variant="outline" asChild>
        <a href="/quick-start">Learn More</a>
      </Button>
    </CardFooter>
  </Card>
);

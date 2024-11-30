import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rocket, Shield, Zap, User, Star, Coffee } from "lucide-react";
import Image from "next/image";

const FeatureCard = () => (
  <Card className="flex flex-col h-full">
    <CardHeader>
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Rocket className="w-6 h-6 text-primary" />
      </div>
      <CardTitle>Quick Start</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>
        Get up and running with our platform in minutes. Easy setup process for
        all users.
      </CardDescription>
    </CardContent>
    <CardFooter className="mt-auto">
      <Button variant="outline" asChild>
        <a href="/quick-start">Learn More</a>
      </Button>
    </CardFooter>
  </Card>
);

const PricingCard = () => (
  <Card className="flex flex-col h-full border-primary">
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold">Pro Plan</CardTitle>
      <CardDescription className="text-4xl font-bold mt-4">
        $29<span className="text-sm font-normal">/month</span>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {["Unlimited projects", "Priority support", "Custom domain"].map(
          (feature, index) => (
            <li key={index} className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              {feature}
            </li>
          )
        )}
      </ul>
    </CardContent>
    <CardFooter className="mt-auto">
      <Button className="w-full" asChild>
        <a href="/signup">Get Started</a>
      </Button>
    </CardFooter>
  </Card>
);

const TeamMemberCard = () => (
  <Card className="flex flex-col h-full items-center text-center p-6">
    <Avatar className="w-24 h-24 mb-4">
      <AvatarImage src="https://github.com/shadcn.png" alt="Team member" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <CardTitle>Jane Doe</CardTitle>
    <CardDescription className="mb-4">Senior Developer</CardDescription>
    <div className="flex space-x-2 mb-4">
      <Badge>React</Badge>
      <Badge>Node.js</Badge>
      <Badge>AWS</Badge>
    </div>
    <Button variant="outline" className="w-full" asChild>
      <a href="/team/jane-doe">View Profile</a>
    </Button>
  </Card>
);

const ProductCard = () => (
  <Card className="flex flex-col h-full overflow-hidden">
    <Image
      src="/placeholder.svg?height=200&width=400"
      alt="Product"
      className="object-cover"
      width={48}
      height={48}
    />
    <CardHeader>
      <CardTitle>Premium Headphones</CardTitle>
      <CardDescription>High-quality audio experience</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
        <span className="ml-2 text-sm text-gray-600">(128 reviews)</span>
      </div>
      <p className="text-2xl font-bold">$299.99</p>
    </CardContent>
    <CardFooter className="mt-auto">
      <Button className="w-full" asChild>
        <a href="/product/headphones">Add to Cart</a>
      </Button>
    </CardFooter>
  </Card>
);

const TestimonialCard = () => (
  <Card className="flex flex-col h-full">
    <CardHeader>
      <div className="flex items-center mb-4">
        <Avatar className="mr-4">
          <AvatarImage src="https://github.com/vercel.png" alt="Customer" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>Alex Johnson</CardTitle>
          <CardDescription>CEO, TechCorp</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="italic">
        This platform has revolutionized our workflow. The features are
        intuitive and the support is outstanding. Highly recommended!
      </p>
    </CardContent>
    <CardFooter className="mt-auto">
      <Button variant="link" className="p-0" asChild>
        <a href="/case-studies">Read Full Case Study</a>
      </Button>
    </CardFooter>
  </Card>
);

const EventCard = () => (
  <Card className="flex flex-col h-full">
    <CardHeader>
      <div className="flex justify-between items-center mb-2">
        <Badge variant="secondary">Upcoming</Badge>
        <Coffee className="w-6 h-6 text-primary" />
      </div>
      <CardTitle>Web Dev Meetup</CardTitle>
      <CardDescription>
        Join us for an evening of coding and networking
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <div className="flex items-center">
          <User className="w-5 h-5 mr-2 text-gray-500" />
          <span>50 attendees</span>
        </div>
        <div className="flex items-center">
          <Zap className="w-5 h-5 mr-2 text-gray-500" />
          <span>June 15, 2023 at 7:00 PM</span>
        </div>
      </div>
    </CardContent>
    <CardFooter className="mt-auto">
      <Button className="w-full" asChild>
        <a href="/events/web-dev-meetup">RSVP Now</a>
      </Button>
    </CardFooter>
  </Card>
);

export default function DiverseCards() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Card Variations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard />
        <PricingCard />
        <TeamMemberCard />
        <ProductCard />
        <TestimonialCard />
        <EventCard />
      </div>
    </div>
  );
}

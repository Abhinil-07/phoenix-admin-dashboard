import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/event-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface EventCardProps {
  name: string;
  description: string;
  posterUrl: string;
  subwing: string;
}

export function EventCard({
  name,
  description,
  posterUrl,
  subwing,
}: EventCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-48 rounded-md overflow-hidden">
          <Image
            src={posterUrl}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge>{subwing}</Badge>
        <Button variant="outline">View More</Button>
      </CardFooter>
    </Card>
  );
}

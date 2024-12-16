import Image from "next/image";
import { CalendarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// This is sample data. In a real application, you'd fetch this from an API or database.
const events = [
  {
    id: 1,
    name: "Web Dev Workshop",
    status: "upcoming",
    date: "2023-08-15",
    image: "https://i.ibb.co/GvDPhLM/image.webp",
  },
  {
    id: 2,
    name: "AI Hackathon",
    status: "finished",
    date: "2023-07-20",
    image: "https://i.ibb.co/GvDPhLM/image.webp",
  },
  {
    id: 3,
    name: "Cybersecurity Seminar",
    status: "upcoming",
    date: "2023-09-05",
    image: "https://i.ibb.co/GvDPhLM/image.webp",
  },
  {
    id: 4,
    name: "Mobile App Challenge",
    status: "finished",
    date: "2023-06-30",
    image: "https://i.ibb.co/GvDPhLM/image.webp",
  },
];

export default function SubwingEventsPage({
  params,
}: {
  params: { subwingId: string };
}) {
  // In a real application, you would fetch the subwing name based on the subwingId
  const subwingName = "Web Development";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{subwingName} Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{event.name}</CardTitle>
                <Badge
                  variant={
                    event.status === "upcoming" ? "secondary" : "outline"
                  }
                >
                  {event.status === "upcoming" ? "Upcoming" : "Finished"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src={event.image}
                alt={event.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <Button variant="outline" asChild size="sm">
                  <a href={`/events/${params.subwingId}/${event.id}`}>
                    View More Details
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const subwings = [
  {
    id: 1,
    name: "Web Development",
    image: "https://i.ibb.co/GvDPhLM/image.webp",
    description:
      "Explore the world of web technologies, from front-end frameworks to back-end systems.",
  },
  {
    id: 2,
    name: "Artificial Intelligence",
    image: "https://i.ibb.co/1MjDLJq/ai.webp",
    description:
      "Dive into machine learning, neural networks, and the cutting-edge of AI research.",
  },
  {
    id: 3,
    name: "Cybersecurity",
    image: "https://i.ibb.co/d40fBxg/design.webp",
    description:
      "Learn about network security, ethical hacking, and protecting digital assets.",
  },
  {
    id: 4,
    name: "Mobile App Development",
    image: "https://i.ibb.co/d2SnTK0/masti.webp",
    description:
      "Create innovative mobile applications for iOS and Android platforms.",
  },
  {
    id: 5,
    name: "Data Science",
    image: "https://i.ibb.co/GvDPhLM/image.webp",
    description:
      "Analyze complex datasets, visualize information, and extract meaningful insights.",
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto p-4 relative min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Tech Club Events</h1>
        <Button
          size="lg"
          variant="outline"
          onClick={() => {
            // Add your logic for adding a new event here
            console.log("Add new event");
          }}
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Add Event
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subwings.map((subwing) => (
          <Card key={subwing.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{subwing.name}</CardTitle>
              <CardDescription>{subwing.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src={subwing.image}
                alt={`${subwing.name} subwing`}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            </CardContent>
            <CardFooter className="flex justify-end mt-4">
              <Button variant="outline">
                <Link href={`/events/wings`}>View Events</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

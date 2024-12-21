import Image from "next/image";
import Link from "next/link";
import {
  CalendarIcon,
  FileText,
  ImageIcon,
  LinkIcon,
  DollarSign,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// This is sample data. In a real application, you'd fetch this from an API or database.
const eventDetails = {
  id: 1,
  name: "Web Dev Workshop",
  wing: "Web Development",
  date: "2023-08-15",
  rulebook: "https://example.com/rulebook.pdf",
  poster: "https://i.ibb.co/8rdfSmn/masti.jpg",
  registrationLink: "https://example.com/register",
  certificateTemplateLink: "https://example.com/certificate-template.pdf",
  description:
    "Join us for an intensive web development workshop where you'll learn the latest technologies and best practices in front-end and back-end development. This hands-on session will cover HTML5, CSS3, JavaScript, and popular frameworks like React and Node.js.",
  budgetAllocated: 5000,
};

export default function EventDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="relative w-full h-[40vh] overflow-hidden rounded-xl">
          <Image
            src={eventDetails.poster}
            alt={`${eventDetails.name} poster`}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold">{eventDetails.name}</h1>
              <p className="text-xl text-muted-foreground mt-2">
                {eventDetails.wing}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <p className="flex items-center text-muted-foreground">
                <CalendarIcon className="mr-2 h-5 w-5" />
                {new Date(eventDetails.date).toLocaleDateString()}
              </p>
              <Separator orientation="vertical" className="h-6" />
              <p className="flex items-center text-muted-foreground">
                <DollarSign className="mr-2 h-5 w-5" />
                Budget: ${eventDetails.budgetAllocated}
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Description</h2>
              <p className="text-lg">{eventDetails.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Important Links</h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={eventDetails.rulebook}
                    className="flex items-center text-primary hover:underline"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Rulebook
                  </Link>
                </li>
                <li>
                  <Link
                    href={eventDetails.registrationLink}
                    className="flex items-center text-primary hover:underline"
                  >
                    <LinkIcon className="mr-2 h-5 w-5" />
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    href={eventDetails.certificateTemplateLink}
                    className="flex items-center text-primary hover:underline"
                  >
                    <ImageIcon className="mr-2 h-5 w-5" />
                    Certificate Template
                  </Link>
                </li>
              </ul>
            </div>

            <Button className="w-full">Track Budget</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

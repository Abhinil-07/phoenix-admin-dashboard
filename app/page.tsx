import { EventCard } from "@/components/EventCard";

const upcomingEvents = [
  {
    name: "Hackathon 2023",
    description: "Annual coding competition",
    posterUrl: "https://i.ibb.co/1MjDLJq/ai.webp",
    subwing: "Coding",
  },
  {
    name: "AI Workshop",
    description: "Introduction to machine learning",
    posterUrl: "https://i.ibb.co/vQfGtS9/hacka.webp",
    subwing: "AI",
  },
  {
    name: "Design Thinking Seminar",
    description: "Learn the basics of design thinking",
    posterUrl: "https://i.ibb.co/d40fBxg/design.webp",
    subwing: "Design",
  },
];

export default function Home() {
  return (
    <div className=" m-6">
      <h1 className="text-3xl font-bold mb-8">Hi Admin</h1>
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

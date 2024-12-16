export default function Events() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Events</h1>
      <p className="text-lg mb-4">Welcome to the events page of Phoenix Tech Club.</p>
      <div className="bg-card rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <div className="bg-primary text-primary-foreground rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Annual Hackathon</h3>
              <p className="text-sm text-muted-foreground">July 15-17, 2023</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="bg-primary text-primary-foreground rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                <path d="M10 2c1 .5 2 2 2 5" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">AI Workshop Series</h3>
              <p className="text-sm text-muted-foreground">Every Tuesday, Starting August 1, 2023</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="bg-primary text-primary-foreground rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h20" />
                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                <path d="m7 21 5-5 5 5" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Tech Talk: Future of Web Development</h3>
              <p className="text-sm text-muted-foreground">September 5, 2023</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}


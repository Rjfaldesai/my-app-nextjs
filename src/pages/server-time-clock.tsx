import { GetServerSideProps } from "next";

import { useEffect, useState, useRef } from "react";

interface ServerTimePageProps {
  initialTime: string;
}

export default function ServerTimePage({ initialTime }: ServerTimePageProps) {
  const [time, setTime] = useState(new Date(initialTime));
  const timeRef = useRef(time.getTime()); // store timestamp in ms

  // Format Date object into readable string
  function formatTime(date: Date) {
    return date.toLocaleString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      fractionalSecondDigits: 3, // milliseconds
    });
  }

  useEffect(() => {
    // Increment clock every 100ms for smooth ticking
    const tickInterval = setInterval(() => {
      timeRef.current += 100; // increment 100ms
      setTime(new Date(timeRef.current));
    }, 100);

    // Sync with server every 10s
    const syncInterval = setInterval(async () => {
      try {
        const res = await fetch("/api/server-time");
        if (!res.ok) throw new Error("Failed to fetch server time");
        const data = await res.json();
        const serverTime = new Date(data.time).getTime();
        timeRef.current = serverTime; // reset to server time
        setTime(new Date(serverTime));
      } catch (err) {
        console.error("Error syncing with server:", err);
      }
    }, 10000);

    return () => {
      clearInterval(tickInterval);
      clearInterval(syncInterval);
    };
  }, []);

  return (
    <div>
      <h1>Server Time (Smooth Clock)</h1>
      <p>uses api</p>
      <p>{formatTime(time)}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { initialTime: new Date().toISOString() },
  };
};

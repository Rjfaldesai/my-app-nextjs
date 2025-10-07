import { GetServerSideProps } from "next";
//uses serversideprops directly, without api
//need to be refreshed manually
interface ServerTimePageProps {
  time: string;
}

export default function ServerTimePage({ time }: ServerTimePageProps) {



    return (
    <div>
      <h1>Server Time (SSR)</h1>
      <p>Note: Requires manual refresh for update</p>
      <p>Page rendered at: {time}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
    //sends date in ISO format
    return {
    props: { time: new Date().toISOString() },
    };

  return {
    props: { time: new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }) },
  };
};

"use client";

import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import { FlightLog, FlightLogService } from "../(flightlog)/fightlog.service";
import LogCard from "../(flightlog)/LogCard";
import LogForm from "../(flightlog)/LogForm";
// import BoardingPassCard from "../(boardingpass)/BoardingPassCard";

const flightLogService = new FlightLogService();

export default function Home() {
  const [logs, setLogs] = useState<FlightLog[]>([]);

  const handleAddLog = useCallback(
    (log: FlightLog) => {
      console.log(log)
      setLogs([...logs, log]);
    },
    [logs]
  );

  useEffect(() => {
    const fetch = async () => {
      const data = await flightLogService.getLogs();
      setLogs(data as FlightLog[]);
    };

    fetch();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next Airline!</a>
        </h1>
        <div className="w-full flex flex-row justify-between items-start gap-8">
          <div className="w-full rounded-lg p-8 border-[1px] border-[#eaeaea]">
            <h2 className="text-2xl mb-4">Departure Logging</h2>
            <LogForm
              data={logs}
              type={"departure"}
              onSubmit={handleAddLog}
            ></LogForm>
          </div>
          <div className="w-full rounded-lg p-8 border-[1px] border-[#eaeaea]">
            <h2 className="text-2xl mb-4">Arrival Logging</h2>
            <LogForm
              data={logs}
              type={"arrival"}
              onSubmit={handleAddLog}
            ></LogForm>
          </div>
        </div>
        <div className={styles.card} style={{ margin: 16, width: "100%" }}>
          <h2>Flight Logs</h2>
          <LogCard data={logs}></LogCard>
        </div>
        {/* Render boarding pass here */}
        {/* {[].map((_, i) => ( */}
        {/*   <BoardingPassCard key={i} /> */}
        {/* ))} */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

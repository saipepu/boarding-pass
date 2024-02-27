"use client";

import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import { FlightLog, FlightLogService } from "../(services)/fightlog.service";
import LogCard from "../(flightlog)/LogCard";
import LogForm from "../(flightlog)/LogForm";
import BoardingPassCard from "../(boardingpass)/BoardingPassCard";
import { BoardingPass, getBoardingPasses } from "../(services)/boarding-pass.service";
import { calculateAverageTimeForEachRoute } from "../(services)/average-travel-time.service";
// import BoardingPassCard from "../(boardingpass)/BoardingPassCard";

const flightLogService = new FlightLogService();

export default function Home() {

  const [logs, setLogs] = useState<FlightLog[]>([]);
  const [bPass, setbPass] = useState<BoardingPass[]>([])

  // add log
  const handleAddLog = useCallback(
    (log: FlightLog) => {
      const existed = logs.filter((item: FlightLog) => item.passengerName == log.passengerName)

      if(log.type === 'arrival' && existed.length%2 == 0) {

        // If the passenger name is not in the departure list.
        // Alert the user and don't update the Flight Logs
        // If the passenger is in the departure list and has already landed.
        window.alert("Cannot find this passenger in the Departure Log or this passenger has already landed.")
        
      } else if(log.type === 'departure' && existed.length%2 == 1) {

        // If the passenger name is in the departure list and not landed yet,
        // Alert the user and don't update the Flight Logs
        window.alert("This passenger has already departed and not landed yet.")

      } else {
        setLogs([...logs, log]);
      }
    },
    [logs]
  );

  // get logs
  useEffect(() => {
    const fetch = async () => {
      const data = await flightLogService.getLogs();
      setLogs(data as FlightLog[]);
    };

    fetch();
  }, []);

  // getboardingpass
  useEffect(() => {
    getBoardingPasses({ logs, setbPass })
  }, [logs])

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
        <button onClick={() => calculateAverageTimeForEachRoute({ logs })}>Calculate Average Time</button>
        <div className={styles.card} style={{ margin: 16, width: "100%" }}>
          <h2>Flight Logs</h2>
          <LogCard data={logs}></LogCard>
        </div>
        {/* Render boarding pass here */}
        <div className="w-full flex flex-col justify-start items-center gap-4">
          {bPass.map((item, index) => {
            return (
              <BoardingPassCard key={index} boardingPass={item} />
            )
          })}
        </div>
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

import { useState, useEffect } from "react";
import LogItem from "./LogItem";
import { FlightLog } from "./fightlog.service";

interface LogCardProps {
  data: FlightLog[]
}

function LogCard(props: LogCardProps) {
  const { data } = props;
  const [logs, setLogs] = useState(data);

  useEffect(() => {
    setLogs(data);
  }, [data]);

  return (
    <div
      style={{
        width: '100%',
        display: "flex",
        flexDirection: "column",
        rowGap: 4,
      }}
    >
      <div
        style={{
          display: "flex",
          marginBottom: 4,
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        <span style={{ flex: 1 }}>Passenger Name</span>
        <span style={{ flex: 1 }}>Airport</span>
        <span style={{ flex: 1 }}>Timestamp</span>
        <span style={{ flex: 1 }}>Type</span>
      </div>
      {logs.map((item: FlightLog, index: number) => (
        // used index as key for each child here to make each of them unique
        <LogItem key={index} item={item}></LogItem>
      ))}
    </div>
  );
}

export default LogCard;

export interface FlightLog {
  passengerName: string,
  airport: string,
  timestamp: number,
  type: string,
}

export class FlightLogService {
  initialData: FlightLog[] = [
    {
      passengerName: "cherprang",
      airport: "bangkok",
      timestamp: 1630454400,
      type: "departure",
    },
    {
      passengerName: "sita",
      airport: "chiangmai",
      timestamp: 1630627200,
      type: "departure",
    },
    {
      passengerName: "cherprang",
      airport: "tokyo",
      timestamp: 1630454405,
      type: "arrival",
    },
  ];

  getLogs() {
    // Changed pure functions to arrow functions to preserve 'this' keyword
    // Explaination -> When using a regular function as a callback, the context of this changes. 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.initialData || []);
      }, 2000);
    });
  }

}

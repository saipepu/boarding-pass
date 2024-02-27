import { FlightLog } from "./fightlog.service"

export interface Route {
  dAirport: string,
  aAirport: string,
  travelTimes: number[]
}

export const calculateAverageTimeForEachRoute = ({
  logs
}: {
  logs: FlightLog[]
}) => {

  let departure = []
  let arrival = []
  let route: Route[] = []

  for(let i=0; i<logs.length; i++) {
    if(logs[i].type == 'departure') {
      departure.push(logs[i])
    } else {
      arrival.push(logs[i])
    }
  }

  while(departure.length > 0) {
    let fD = departure.shift()
    let found = false
    let arr = arrival

    while(!found && arr.length > 0) {
      let fA = arr.shift()
      if(fD?.passengerName == fA?.passengerName) {
        found = true

        // --------------------------------------------------------
        // average time
        let timeDifference = new Date(fA?.timestamp || 0).getTime() - new Date(fD?.timestamp || 0).getTime()
        let millisecondsInHour = 1000 * 60 * 60
        let hoursDifference = timeDifference / millisecondsInHour

        let existedRoute = route.filter((item) => item.dAirport == fD?.airport && item.aAirport == fA?.airport)

        if(existedRoute.length == 0) {
          let RouteObj: Route = {
            dAirport: fD?.airport || '',
            aAirport: fA?.airport || '',
            travelTimes: [hoursDifference]
          }
          route.push(RouteObj)
  
        } else {
          route.map((item) => item.dAirport == fD?.airport && item.aAirport == fA?.airport ? item.travelTimes.push(hoursDifference) : item )
        }
        // --------------------------------------------------------
  
      }
  
    }
  }
  PrintAvergeTimeForEachRoute(route)
}

const PrintAvergeTimeForEachRoute = (route: Route[]) => {
  for(let i=0; i<route.length; i++) {
    let sum = route[i].travelTimes.reduce((a: number, e: number) => a + e, 0)
    let average = sum / route[i].travelTimes.length
    console.log(`Average Travel Time [${route[i].dAirport} - ${route[i].aAirport}] - ${average}`)
  }
}
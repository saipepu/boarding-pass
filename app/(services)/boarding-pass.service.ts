import { FlightLog } from "./fightlog.service"

export interface BoardingPass {
  pName: string,
  dAirport: string,
  dTimeStamp: number,
  aAirport: string,
  aTimeStamp: number,
}

export const getBoardingPasses = ({
  logs,
  setbPass
}: {
  logs: FlightLog[],
  setbPass: (board: BoardingPass[]) => void
}) => {

  let departure = []
  let arrival = []
  let board: BoardingPass[] = []

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

        // boarding pass
        let boardObj: BoardingPass = {
          pName: fD?.passengerName || fA?.passengerName || '',
          dAirport: fD?.airport || '',
          dTimeStamp: fD?.timestamp || 0,
          aAirport: fA?.airport || '',
          aTimeStamp: fA?.timestamp || 0,
        }
        board.push(boardObj)
        // --------------------------------------------------------
  
      }
  
    }
  }
  setbPass(board)
}
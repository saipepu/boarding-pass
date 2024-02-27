import Image from "next/image";
import { BoardingPass } from "../(services)/boarding-pass.service";
import barcode from '../../public/barcode.png'

function BoardingPassCard({ boardingPass } : { boardingPass: BoardingPass }) {

  const dMonth = new Date(boardingPass.dTimeStamp).toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const dDate = new Date(boardingPass.dTimeStamp).getDate() + dMonth;
  const dTime = new Date(boardingPass.dTimeStamp).getHours() + ":" + new Date(boardingPass.dTimeStamp).getMinutes()
  return (
      <div className="w-full rounded-lg overflow-hidden flex justify-start items-start shadow-md ring-1 ring-slate-300">
        {/* barcode + logo */}
        <div className="min-w-[150px] h-full flex flex-col justify-start items-start">
          <div className="relative w-full min-h-[100px] bg-blue-200 flex justify-center items-center">
            <div className="absolute top-5 w-[100px] h-[100px] rounded-full bg-blue-200 flex justify-center items-center ring-8 ring-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plane"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center px-4 py-1">
            <div className="w-full h-full">
              <Image
                src={barcode}
                alt="barcode"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="w-full min-h-[20px] bg-blue-200">

          </div>
        </div>
        {/* detail */}
        <div className="w-full h-full flex flex-col justify-start items-start border-r-4 border-dashed border-slate-300">
          {/* header */}
          <div className="w-full min-h-[100px] flex justify-between items-center bg-blue-200 p-2">
            <div className="text-5xl text-white">Sky Airlines</div>
            <div className="flex flex-col justify-center items-end text-blue-50">
              <div className="text-2xl">Boarding pass</div>
              <div className="text-lg italic">BUSINESS</div>
            </div>
          </div>
          {/* body */}
          <div className="w-full h-full">
            <table className="w-full">
              <tr className="w-full">
                <td className="p-3">
                  <p className="text-lg text-slate-600 leading-tight">Passenger name</p>
                  <p className="text-xl">{boardingPass.pName.toUpperCase()}</p>
                </td>
                <td>
                  <p className="text-lg text-slate-600 leading-tight">Date</p>
                  <p className="text-xl">{dDate}</p>
                </td>
                <td>
                  <p className="text-lg text-slate-600 leading-tight">Time</p>
                  <p className="text-xl">{dTime}</p>
                </td>
              </tr>
              <tr>
                <td className="p-3">
                  <p className="text-lg text-slate-600 leading-tight">From</p>
                  <p className="text-xl">{boardingPass.dAirport.toUpperCase()}</p>
                </td>
                <td>
                  <p className="text-lg text-slate-600 leading-tight">Flight</p>
                  <p className="text-xl">N/A</p>
                </td>
                <td>
                  <p className="text-lg text-slate-600 leading-tight">Seat</p>
                  <p className="text-xl">N/A</p>
                </td>
              </tr>
              <tr>
                <td className="p-3">
                  <p className="text-lg text-slate-600 leading-tight">To</p>
                  <p className="text-xl">{boardingPass.aAirport.toUpperCase()}</p>
                </td>
                <td>
                  <p className="text-lg text-slate-600 leading-tight">Gate</p>
                  <p className="text-xl">N/A</p>
                </td>
                <td>
                  <p className="text-lg text-slate-600 leading-tight">Board till</p>
                  <p className="text-xl">N/A</p>
                </td>
              </tr>
            </table>
          </div>
          <div className="w-full min-h-[20px] bg-blue-200">

          </div>
          <div></div>
        </div>
        {/* detail */}
        <div className="min-w-[250px] h-full flex flex-col justify-start items-start">
          <div className="w-full min-h-[100px] flex justify-end items-center bg-blue-200 p-2">
            <div className="flex flex-col justify-center items-end text-blue-50">
              <div className="text-2xl">Boarding pass</div>
              <div className="text-lg italic">BUSINESS</div>
            </div>
          </div>
          <div className="h-full">
            <table className="w-full">
              <tr className="w-full">
                <td className="p-1 pl-3 pt-3">
                  <p className="text-lg text-slate-600 leading-tight">Passenger name</p>
                  <p className="text-xl">{boardingPass.pName.toUpperCase()}</p>
                </td>
              </tr>
              <tr className="w-full">
                <td className="p-1 pl-3">
                  <p className="text-lg text-slate-600 leading-tight">From</p>
                  <p className="text-xl">{boardingPass.dAirport}</p>
                </td>
              </tr>
              <tr className="w-full">
                <td className="p-1 pl-3">
                  <p className="text-lg text-slate-600 leading-tight">To</p>
                  <p className="text-xl">{boardingPass.aAirport}</p>
                </td>
              </tr>
            </table>
            <table className="w-full">
              <tr className="w-full">
                <td className="p-1 pl-3">
                  <p className="text-lg text-slate-600 leading-tight">Date</p>
                  <p className="text-xl">{dDate}</p>
                </td>
                <td className="p-1 pl-3">
                  <p className="text-lg text-slate-600 leading-tight">Time</p>
                  <p className="text-xl">{dTime}</p>
                </td>
                <td className="p-1 pl-3">
                  <p className="text-lg text-slate-600 leading-tight">Flight</p>
                  <p className="text-xl">N/A</p>
                </td>
              </tr>
              <tr className="w-full">
                <td className="p-1 pl-3">
                  <p className="text-lg text-slate-600 leading-tight">Seat</p>
                  <p className="text-xl">N/A</p>
                </td>
                <td className="p-1 pl-3">
                  <p className="text-lg text-slate-600 leading-tight">Gate</p>
                  <p className="text-xl">N/A</p>
                </td>
              </tr>
            </table>
          </div>
          <div className="relative w-full min-h-[20px] bg-blue-200">
            <div className="absolute -top-10 right-4 w-[50px] h-[50px] rounded-full bg-blue-200 flex justify-center items-center ring-4 ring-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plane"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
            </div>
          </div>
        </div>
      </div>
  );
}

// TODO: add propTypes
// BoardingPassCard.propTypes = {};

export default BoardingPassCard;

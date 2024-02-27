import { useState, useCallback } from "react";

const emptyForm = {
  passengerName: "",
  airport: "",
  timestamp: "",
};

function LogForm(props: any) {
  const { type, onSubmit } = props;

  const [formData, setFormData] = useState(emptyForm);

  const handleSubmit = useCallback(() => {
    onSubmit({ ...formData, type });
    setFormData(emptyForm);
  }, [formData, type, onSubmit]);

  const handleChange = useCallback(({ target }: any) => {
    let value = target.id == 'timestamp' ? Number.parseInt(target.value) : target.value
    setFormData((prev) => ({
      ...prev,
      [target.id]: value,
    }));
  }, []);

  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">

      <div className="w-full flex flex-col justify-start items-start gap-2">
        <label className="font-bold" htmlFor="passengerName">
          Passenger Name:
        </label>
        <input
          type="text"
          id="passengerName"
          name="passengerName"
          value={formData.passengerName}
          onChange={handleChange}
          className="w-full border-[1px] border-[#eaeaea] rounded-md focus:outline-[1px] focus:outline-slate-300 px-3 py-1"
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <label className="font-bold" htmlFor="airport">
          Airport:
        </label>
        <input
          type="text"
          id="airport"
          name="airport"
          value={formData.airport}
          onChange={handleChange}
          className="w-full border-[1px] border-[#eaeaea] rounded-md focus:outline-[1px] focus:outline-slate-300 px-3 py-1"
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <label className="font-bold" htmlFor="airport">
          Timestamp:
        </label>
        <input
          type="number"
          id="timestamp"
          name="timestamp"
          value={formData.timestamp}
          onChange={handleChange}
          className="w-full border-[1px] border-[#eaeaea] rounded-md focus:outline-[1px] focus:outline-slate-300 px-3 py-1"
        />
      </div>

      <div className="w-full max-w-[150px]">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded-lg bg-slate-300 text-white font-medium hover:bg-slate-500"
        >Submit</button>
      </div>
    </div>
  );
}

export default LogForm;

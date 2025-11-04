import React, { useState } from "react";

function FlightForm({
  fromAirport,
  setFromAirport,
  toAirport,
  setToAirport,
  flightType,
  setFlightType,
  aircraftData,
  selectedAircraftModel,
  setSelectedAircraftModel,
  handleSubmit,
}) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!fromAirport) newErrors.fromAirport = "From Airport is required";
    if (!toAirport) newErrors.toAirport = "To Airport is required";
    if (!selectedAircraftModel) newErrors.selectedAircraftModel = "Aircraft Model is required";
    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4 max-w-2xl mx-auto"
    > 
      <div className="mb-4">
        <label
          htmlFor="fromAirport"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          From Airport:
        </label>
        <input
          type="text"
          id="fromAirport"
          value={fromAirport}
          onChange={(e) => setFromAirport(e.target.value)}
          placeholder="Enter departure airport IATA code"
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.fromAirport ? 'border-red-500' : ''
          }`}
        />
        {errors.fromAirport && (
          <p className="text-red-500 text-xs italic">{errors.fromAirport}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="toAirport"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          To Airport:
        </label>
        <input
          type="text"
          id="toAirport"
          value={toAirport}
          onChange={(e) => setToAirport(e.target.value)}
          placeholder="Enter destination airport IATA code"
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.toAirport ? 'border-red-500' : ''
          }`}
        />
        {errors.toAirport && (
          <p className="text-red-500 text-xs italic">{errors.toAirport}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="flightType"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Operation:
        </label>
        <select
          id="flightType"
          value={flightType}
          onChange={(e) => setFlightType(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="takeoff">Takeoff</option>
          <option value="landing">Landing</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="aircraftModel"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Aircraft Model:
        </label>
        <select
          id="aircraftModel"
          value={selectedAircraftModel}
          onChange={(e) => setSelectedAircraftModel(e.target.value)}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.selectedAircraftModel ? 'border-red-500' : ''
          }`}
        >
          <option value="" disabled>
            Select an aircraft model
          </option>
          {Array.isArray(aircraftData) &&
            aircraftData.map((aircraft) => (
              <option key={aircraft.aircraftID} value={aircraft.model}>
                {aircraft.model}
              </option>
            ))}
        </select>
        {errors.selectedAircraftModel && (
          <p className="text-red-500 text-xs italic">{errors.selectedAircraftModel}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Check Navigation Status
        </button>
      </div>
    </form>
  );
}

export default FlightForm;

import Datetime from 'react-datetime';

const FlightTabPanel = () => {
  return (
    <div className="p-8 flex flex-col flex-grow">
      <div className="mb-8">
        <h1 className="text-gray-700 text-xl font-medium">
          Best train deals with{' '}
          <span className="text-blue-500 font-bold">Tickets4U</span>
        </h1>
      </div>
      <form action="" className="flex flex-col flex-grow">
        <div className="flex flex-col flex-grow">
          <div className="pb-6 flex-grow">
            <div className="mb-6">
              <label
                htmlFor="departFrom"
                className="block mb-2 text-xs font-medium text-gray-600"
              >
                Depart from
              </label>

              <div className="relative">
                <i className="bx bxs-plane-take-off absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600"></i>

                <input
                  name="departFrom"
                  type="text"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 w-full text-sm"
                  placeholder="Lagos, Nigeria"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="arriveAt"
                className="block mb-2 text-xs font-medium text-gray-600"
              >
                Arrive at
              </label>

              <div className="relative">
                <i className="bx bxs-plane-land absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600"></i>

                <input
                  name="arriveAt"
                  type="text"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 w-full text-sm"
                  placeholder="Berlin, Germany"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-x-4">
                <div>
                  <label
                    htmlFor="departureDate"
                    className="block mb-2 text-xs font-medium text-gray-600"
                  >
                    Departure date
                  </label>

                  <div className="relative">
                    <i className="bx bx-calendar absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600"></i>
                    <Datetime
                      className="static"
                      timeFormat={false}
                      inputProps={{
                        name: 'departureDate',
                        placeholder: '12/07/23',
                        className:
                          'pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 w-full text-sm',
                      }}
                    />
                  </div>
                </div>{' '}
                <div>
                  <label
                    htmlFor="returnDate"
                    className="block mb-2 text-xs font-medium text-gray-600"
                  >
                    Return date
                  </label>

                  <div className="relative">
                    <i className="bx bx-calendar absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600"></i>
                    <Datetime
                      className="static"
                      timeFormat={false}
                      inputProps={{
                        name: 'returnDate',
                        placeholder: '13/07/23',
                        className:
                          'pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 w-full text-sm',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-x-4">
                <div className="col-span-2">
                  <label
                    htmlFor="class"
                    className="block mb-2 text-xs font-medium text-gray-600"
                  >
                    Class
                  </label>

                  <div className="relative">
                    <i className="bx bxs-data absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600"></i>

                    <select
                      name="class"
                      className="block appearance-none pl-10 py-2 pr-4 border border-gray-300 bg-white rounded focus:outline-none focus:ring focus:border-blue-300 w-full text-sm"
                      placeholder="Enter text here"
                    >
                      <option selected>--Select class</option>

                      <option value="">First class</option>
                      <option value="">Economy</option>
                      <option value="">Business class</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 14.293a1 1 0 0 0 1.414 0L14 10.414A1 1 0 1 0 12.586 9L10 11.586 7.414 9a1 1 0 1 0-1.414 1.414L9.293 14.293z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="passengers"
                    className="block mb-2 text-xs font-medium text-gray-600"
                  >
                    Passengers
                  </label>

                  <div className="relative">
                    <i className="bx bxs-user absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600"></i>

                    <input
                      name="passengers"
                      type="number"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 w-full text-sm"
                      placeholder="Enter"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button className="w-full bg-blue-500 text-white flex justify-center items-center uppercase py-2 rounded font-medium text-sm border border-blue-500">
              Find Train
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FlightTabPanel;

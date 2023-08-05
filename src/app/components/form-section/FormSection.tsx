'use client';

import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CarTabPanel from './CarTabPanel';
import FlightTabPanel from './FlightTabPanel';
import ShipTabPanel from './ShipTabPanel';
import TrainTabPanel from './TrainTabPanel';

import 'react-tabs/style/react-tabs.css';
import 'react-datetime/css/react-datetime.css';

const FormSection = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="lg:w-1/3 flex-grow flex flex-col bg-gray-100 h-screen overflow-auto ">
      <div className="w-full relative flex flex-col flex-grow">
        <div className="p-8">
          <h1 className="text-blue-500 font-bold text-xl">Ticket4Ulogo</h1>
        </div>
        <div className="flex flex-col flex-grow">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className={'flex flex-col flex-grow w-full'}
          >
            <TabList className={'grid grid-cols-4 gap-x-1 w-full'}>
              <Tab
                className={`inline-flex focus:outline-none cursor-pointer items-center justify-center p-2 rounded-r ${
                  tabIndex !== 0 ? 'bg-white text-gray-900' : ''
                } `}
                selectedClassName="bg-blue-500 text-white"
              >
                <div className="flex-col items-center justify-center">
                  <div className="w-fit mx-auto">
                    <i className="bx bxs-plane"></i>
                  </div>
                  <div className="text-xs">Flight</div>
                </div>
              </Tab>
              <Tab
                className={`inline-flex focus:outline-none cursor-pointer items-center justify-center p-2 rounded ${
                  tabIndex !== 1 ? 'bg-white text-gray-900' : ''
                } `}
                selectedClassName="bg-blue-500 text-white"
              >
                <div className="flex-col items-center justify-center">
                  <div className="w-fit mx-auto">
                    <i className="bx bxs-train"></i>
                  </div>
                  <div className="text-xs">Trains</div>
                </div>
              </Tab>
              <Tab
                className={`inline-flex focus:outline-none cursor-pointer items-center justify-center p-2 rounded ${
                  tabIndex !== 2 ? 'bg-white text-gray-900' : ''
                } `}
                selectedClassName="bg-blue-500 text-white"
              >
                <div className="flex-col items-center justify-center">
                  <div className="w-fit mx-auto">
                    <i className="bx bxs-ship"></i>
                  </div>
                  <div className="text-xs">Ship</div>
                </div>
              </Tab>
              <Tab
                className={`inline-flex focus:outline-none cursor-pointer items-center justify-center p-2 rounded-l ${
                  tabIndex !== 3 ? 'bg-white text-gray-900' : ''
                } `}
                selectedClassName="bg-blue-500 text-white"
              >
                <div className="flex-col items-center justify-center">
                  <div className="w-fit mx-auto">
                    <i className="bx bxs-car"></i>
                  </div>
                  <div className="text-xs">Cars</div>
                </div>
              </Tab>
            </TabList>

            <TabPanel
              className={`${tabIndex == 0 ? 'flex flex-col flex-grow' : ''}`}
            >
              <FlightTabPanel />
            </TabPanel>
            <TabPanel
              className={`${tabIndex == 1 ? 'flex flex-col flex-grow' : ''}`}
            >
              <TrainTabPanel />
            </TabPanel>
            <TabPanel
              className={`${tabIndex == 2 ? 'flex flex-col flex-grow' : ''}`}
            >
              <ShipTabPanel />
            </TabPanel>
            <TabPanel
              className={`${tabIndex == 3 ? 'flex flex-col flex-grow' : ''}`}
            >
              <CarTabPanel />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FormSection;

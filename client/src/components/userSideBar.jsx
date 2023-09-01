/* eslint-disable default-case */
"use client";

import { useEffect, useState } from "react";
import Widget from "./widget";
import Weathercomponent from "../widgets/weathercomponent";
import Contryiinfocomponent from "../widgets/affir";
import Dadjokecomponent from "../widgets/dadjokecomponent";
import Btcpricecomponent from "../widgets/btcpricecomponent";
import Jobscomponent from "../widgets/jobscomponent";
import Rateusd from "../widgets/rateusd";
import Wouldyourathercomponent from "../widgets/wouldyourathercomponent";
import DateWidget from "../widgets/datecomponent";

export default function SidebarUser() {
  // const [data, setData] = useState([]);
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    getWidgets()
  }, [])

  const getWidgets = async () => {
    try {
      const id = localStorage.getItem('token')
      const url = "http://127.0.0.1:4000/dashboard/" + id;
      const response = await fetch(url)
      const data = await response.json()
      setWidgets(data)
    }catch (error) {
      console.error('error:' + error)
    };
  }

  const updateState = () => {
    getWidgets()
  }

  let comoponentToDisplay;

  const getWidgetComponent = async (widid, name) => {
    switch (name) {
      case 'Country Info':
        //
        break;

      case 'Wealthy Info':
        comoponentToDisplay = <Weathercomponent widid={widid} updateState={updateState}/>
        break;

      case 'Dad Jokes':
        comoponentToDisplay = <Dadjokecomponent widid={widid} updateState={updateState}/>
        break;

      case 'Would You Rather':
        comoponentToDisplay = <Wouldyourathercomponent widid={widid} updateState={updateState}/>
        break;

      case 'Rates USD XOF':
        comoponentToDisplay = <Rateusd widid={widid} updateState={updateState}/>
        break;

      case 'BTC Price':
        comoponentToDisplay = <Btcpricecomponent widid={widid} updateState={updateState}/>
        break;

      case 'Fives remotes jobs':
        comoponentToDisplay = <Jobscomponent widid={widid} updateState={updateState}/>
        break;

      case 'Date and Times':
        comoponentToDisplay = <DateWidget widid={widid} updateState={updateState}/>
        break;

      case 'Affirmation':
        comoponentToDisplay = <DateWidget widid={widid} updateState={updateState}/>
        break;
    }
  }


  return (
    <div className="h-screen relative bg-[url('./img/john-schnobrich-2FPjlAyMQTA-unsplash.jpg')] bg-cover">
      <div className="h-full w-full absolute bg-[#000000a0]">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full container my-24 mx-auto">
          {widgets.map((widget) => {
            getWidgetComponent(widget._id, widget.name)
            return (
              <span key={widget._id}>
                {comoponentToDisplay}
              </span>
            )            
          })}
        </div>
      </div>
    </div>
  );
}

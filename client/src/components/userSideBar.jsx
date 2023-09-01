/* eslint-disable default-case */
"use client";

import { useEffect, useState } from "react";
import Weathercomponent from "../widgets/weathercomponent";
import Dadjokecomponent from "../widgets/dadjokecomponent";
import Btcpricecomponent from "../widgets/btcpricecomponent";
import Jobscomponent from "../widgets/jobscomponent";
import Rateusd from "../widgets/rateusd";
import Wouldyourathercomponent from "../widgets/wouldyourathercomponent";
import DateWidget from "../widgets/datecomponent";

export default function SidebarUser() {
  // const [data, setData] = useState([]);
  const [widgets, setWidgets] = useState([]);
  const [clickedSpanText, setClickedSpanText] = useState("");


  useEffect(() => {
    getWidgets()
  }, [])


  const handleWidgetClick = async (text) => {
    setClickedSpanText(text);
    let name;
    switch (text) {
      case 'Wealthy':
        name = 'Wealthy Info'
        break;

      case 'DateTimes':
        name = 'Date and Times'
        break;

      case 'Jobs':
        name = 'Fives remotes jobs'
        break;

      case 'RatesUSD':
        name = 'Rates USD XOF'
        break;

      case 'WouldRather':
        name = 'Would You Rather'
        break;

      case 'Affirmation':
        name = 'Affirmation'
        break;

      case 'Dad Jokes':
        name = 'Dad Jokes'
        break;

      case 'BTC Price':
        name = 'BTC Price'
        break;
      case 'Numbers':
        name = 'Numbers'
        break;
      case 'News':
        name = 'News'
        break;
      case 'Quotes':
        name = 'Quotes'
        break;
      case 'Trivia':
        name = 'Trivia'
        break;
    }
    // console.log("The name = "+name);
    const obj = { 'name': name}
    try {
      const userid = localStorage.getItem('token')
      const url = "http://localhost:4000/widget/user/" + userid;      
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      })
      updateState()
    } catch (error) {

    }
  };

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
      case 'Numbers':
        comoponentToDisplay = <DateWidget widid={widid} updateState={updateState}/>
        break;
      case 'News':
      comoponentToDisplay = <DateWidget widid={widid} updateState={updateState}/>
      break;
      case 'Quotes':
        comoponentToDisplay = <DateWidget widid={widid} updateState={updateState}/>
        break;
      case 'Trivia':
        comoponentToDisplay = <DateWidget widid={widid} updateState={updateState}/>
        break;
      
    }
  }
  
  return (
    <div className="h-[1500px] relative bgi bg-cover bg-fixed">
      <div className="h-full w-full py-24 absolute bg-[#00000071]">
        <div className="container mx-auto text-center h-fit flex items-center justify-center my-3">
          <span
            className="bg-blue-100 text-blue-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">Wealthy</a>
          </span>
          <span
            className="bg-gray-100 text-gray-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">DateTimes</a>
          </span>
          <span
            className="bg-red-100 text-red-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">Jobs</a>
          </span>
          <span
            className="bg-green-100 text-green-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">RatesUSD</a>
          </span>
          <span
            className="bg-yellow-100 text-yellow-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">WouldRather</a>
          </span>
          <span
            className="bg-indigo-100 text-indigo-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">Affirmation</a>
          </span>
          <span
            className="bg-purple-100 text-purple-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">Dad Jokes</a>
          </span>
          <span
            className="bg-pink-100 text-pink-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">BTC Price</a>
          </span>

          <span
            className="bg-blue-100 text-blue-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">Numbers</a>
          </span>
          <span
            className="bg-gray-100 text-gray-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">News</a>
          </span>
          <span
            className="bg-red-100 text-red-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">Quotes</a>
          </span>
          <span
            className="bg-green-100 text-green-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 w-1/12"
            onClick={(event) => handleWidgetClick(event.target.textContent)}
          >
            <a href="#">olo</a>
          </span>
        </div>
        <div className="flex flex-wrap container mx-auto">
          
          {widgets.map((widget) => {
            getWidgetComponent(widget._id, widget.name)
            return (
              <div className="p-4 h-fit w-1/4 sm:mb-0 mb-6" key={widget._id}>
                {comoponentToDisplay}
              </div>
            )            
          })}
        </div>
      </div>
    </div>
  );
}
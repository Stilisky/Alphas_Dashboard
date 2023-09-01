/* eslint-disable default-case */
"use client";

import { useEffect, useState } from "react";
import Widget from "./widget";
import Weathercomponent from "../widgets/weathercomponent";
import Contryiinfocomponent from "../widgets/contryiinfocomponent";
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
    // fetch("http://127.0.0.1:4000/services")
    //   .then(response => response.json())
    //   .then(data => {
    //     setWidgets(data);
    //   })
    //   .catch(error => {
    //     console.error('error:' + error)
    //   });
    // fetchWidget("Date and Times")
  }, [])

  const handleWidgetClick = (text) => {
    setClickedSpanText(text);
    console.log("Texte du dernier span cliqué :", text);
  };


  const fetchWidget = async (name) => {
    switch (name) {
      case 'Country Info':
        try {
          const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=6.37,2.45"
          const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
          const response = await fetch(url, { headers: { 'X-RapidAPI-Key': key } })
          const data = response.json()
          const donnee = {
            'City': data.location.name,
            'country': data.location.country
          }
          return donnee
        } catch (error) {
          console.error('error:' + error)
        };
        break;
      case 'Wealthy Info':

        break;
      case 'Dad Jokes':
        try {
          const url = "https://dad-jokes.p.rapidapi.com/random/joke";
          const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
          const response = await fetch(url, { headers: { 'X-RapidAPI-Key': key } })
          const data = response.json()
          const donnee = {
            'setup': data.body[0].setup,
            'punchline': data.body[0].punchline
          }
          return donnee
        } catch (error) {

        }
        break;

      case 'Would You Rather':
        try {
          const url = "https://would-you-rather.p.rapidapi.com/wyr/random";
          const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
          const response = await fetch(url, { headers: { 'X-RapidAPI-Key': key } })
          const data = response.json()
          return data[0]
        } catch (error) {

        }
        break;

      case 'Rates USD XOF':
        try {
          const url = "https://exchange-rate-api1.p.rapidapi.com/latest?base=USD";
          const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
          const response = await fetch(url, { headers: { 'X-RapidAPI-Key': key } })
          const data = await response.json()
          const donnee = {
            'rates': data.rates.XOF
          }
          return donnee
        } catch (error) {

        }
        break;

      case 'BTC Price':
        try {
          const url = "https://binance43.p.rapidapi.com/ticker/price?symbol=BTCUSDT";
          const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
          const response = await fetch(url, { headers: { 'X-RapidAPI-Key': key } })
          const data = response.json()
          const donnee = {
            'price': data.price
          }
          console.log(data)
          return donnee
        } catch (error) {

        }
        break;

      case 'Fives remotes jobs':
        try {
          const url = "https://remote-jobs-api.p.rapidapi.com/jobs";
          const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
          const response = await fetch(url, { headers: { 'X-RapidAPI-Key': key } })
          const data = response.json()
          const donnee = {
            'Job1': {
              'title': data.items[0].title,
              'Company': data.items[0].company_name,
              'Date': data.items[0].date,
            },
            'Job2': {
              'title': data.items[1].title,
              'Company': data.items[1].company_name,
              'Date': data.items[1].date,
            },
            'Job3': {
              'title': data.items[2].title,
              'Company': data.items[2].company_name,
              'Date': data.items[2].date,
            },
            'Job4': {
              'title': data.items[3].title,
              'Company': data.items[3].company_name,
              'Date': data.items[3].date,
            },
            'Job5': {
              'title': data.items[4].title,
              'Company': data.items[4].company_name,
              'Date': data.items[4].date,
            },
          }
          return donnee
        } catch (error) {

        }
        break;

      case 'Date and Times':
        try {
          const ts = Date.now();
          const date_time = new Date(ts)
          const year = date_time.getFullYear()
          const month = date_time.getMonth()
          const day = date_time.getDate()
          const hour = date_time.getHours();
          const minutes = date_time.getMinutes();
          const seconds = date_time.getSeconds();
          const dateofday = day + "-" + month + "-" + year;
          const theHour = hour + ":" + minutes + ":" + seconds;
          const donnee = {
            "date": dateofday,
            "time": theHour
          }
          console.log(donnee)
          return donnee
        } catch (error) {

        }
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
            <a href="#">Wealthy Info</a>
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
            <a href="#">Indigo</a>
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
            <a href="#">Pink</a>
          </span>
        </div>
        <div className="flex flex-wrap container mx-auto">
          <div className="p-4 h-fit w-1/4 sm:mb-0 mb-6">
            <Wouldyourathercomponent />
          </div>
          <div className="p-4 h-fit w-1/4 sm:mb-0 mb-6">
            <Rateusd />
          </div>
          <div className="p-4 h-fit w-1/4 sm:mb-0 mb-6">
            <Jobscomponent />
          </div>
          <div className="p-4 h-fit w-1/4 sm:mb-0 mb-6">
            <Btcpricecomponent />
          </div>
          <div className="p-4 h-fit w-1/4 sm:mb-0 mb-6">
            <Dadjokecomponent />
          </div>
          <div className="p-4 h-fit w-1/4 sm:mb-0 mb-6">
            <Contryiinfocomponent />
          </div>
          <div className="p-4 h-fit w-1/4 sm:mb-0 mb-6">
            <Weathercomponent />
          </div>
          <div className="p-4 h-fit w-1/4 sm:mb-0 mb-6">
            <DateWidget />
          </div>
          <div className="p-4 h-fit w-1/4 sm:mb-0 mb-6">
            <DateWidget />
          </div>
        </div>
      </div>
    </div>
  );
}


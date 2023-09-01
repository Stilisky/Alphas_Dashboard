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


export default function SidebarUser() {
  // const [data, setData] = useState([]);
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    // fetch("http://127.0.0.1:4000/services")
    //   .then(response => response.json())
    //   .then(data => {
    //     setWidgets(data);
    //     // console.log(widgets)
    //   })
    //   .catch(error => {
    //     console.error('error:' + error)
    //   });
    fetchWidget("Date and Times")
  }, [])

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
        try {
          const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=6.37,2.45"
          const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
          const response = await fetch(url, { headers: { 'X-RapidAPI-Key': key } })
          const data = response.json()
          const donnee = {
            'City': data.location.name,
            'temp': data.current.temp_c,
            'condition': data.current.condition.text,
          }
          return donnee
        } catch (error) {
          console.error('error:' + error)
        };
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
          const data = response.json()
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
    <div className="h-screen relative bg-[url('./img/john-schnobrich-2FPjlAyMQTA-unsplash.jpg')] bg-cover">
      <div className="h-full w-full absolute bg-[#000000a0]">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full container my-24 mx-auto">
          <Wouldyourathercomponent />
          <Rateusd />
          <Jobscomponent />
          <Btcpricecomponent />
          <Dadjokecomponent />
          <Contryiinfocomponent />
          <Weathercomponent />
        </div>
      </div>
    </div>
  );
}

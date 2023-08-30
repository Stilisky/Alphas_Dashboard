/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ApiService {
   constructor(private readonly httpService: HttpService) {}

   async dateAndTime(){
      const ts = Date.now();
      const date_time = new Date(ts)
      const year = date_time.getFullYear()
      const month = date_time.getMonth()
      const day = date_time.getDate()
      const hour = date_time.getHours();
      const minutes = date_time.getMinutes();
      const seconds = date_time.getSeconds();
      const dateofday = day + "-"+ month +"-" + year;
      const theHour = hour + ":" + minutes + ":" + seconds;
      const donnee = {
         "date": dateofday,
         "time": theHour
      }
      return donnee
   }

   async countryInfo(){
      const url =  "https://weatherapi-com.p.rapidapi.com/current.json?q=6.37,2.45"
      const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
      const response = await axios.get(url, {headers: {'X-RapidAPI-Key': key}});
      const country = response.data.location.country 
      return country
   }

   async wealthyInfo(){
     const url =  "https://weatherapi-com.p.rapidapi.com/current.json?q=6.37,2.45"
     const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
     const response = await axios.get(url, {headers: {'X-RapidAPI-Key': key}});
     const country = response.data.location.country 
     const temp = response.data.current.temp_c
     const condition = response.data.current.condition.text
     const donnee = {
      'country': country,
      'temp': temp,
      'condition': condition,
     }
     return donnee;
   }

   async dadJokes() {
      const url = "https://dad-jokes.p.rapidapi.com/random/joke";
      const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
      const response = await axios.get(url, {headers: {'X-RapidAPI-Key': key}});
      const setup = response.data.body[0].setup
      const punch = response.data.body[0].punchline
      const donnee = {
         'setup': setup,
         'punchline': punch
      }
      return donnee
   }

   async woulduRather() {
      const url = "https://would-you-rather.p.rapidapi.com/wyr/random";
      const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
      const response = await axios.get(url, {headers: {'X-RapidAPI-Key': key}});
      return response.data[0]
   }

   async latestRatesUSDXOF() {
      const url = "https://exchange-rate-api1.p.rapidapi.com/latest?base=USD";
      const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
      const response = await axios.get(url, {headers: {'X-RapidAPI-Key': key}});
      const donnee = {
         'rates': response.data.rates.XOF
      }
      return donnee
   }

   async latestBTCPrice() {
      const url = "https://binance43.p.rapidapi.com/ticker/price?symbol=BTCUSDT";
      const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
      const response = await axios.get(url, {headers: {'X-RapidAPI-Key': key}});
      const donnee = {
         'price': response.data.price
      }
      return donnee
   }

   async getLastFiveRemoteJobs() {
      const url = "https://remote-jobs-api.p.rapidapi.com/jobs";
      const key = "6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593"
      const response = await axios.get(url, {headers: {'X-RapidAPI-Key': key}});
      const donnee = {
         'Job1': {
            'title': response.data.items[0].title,
            'Company': response.data.items[0].company_name,
            'Date': response.data.items[0].date,
         },
         'Job2': {
            'title': response.data.items[1].title,
            'Company': response.data.items[1].company_name,
            'Date': response.data.items[1].date,
         },
         'Job3': {
            'title': response.data.items[2].title,
            'Company': response.data.items[2].company_name,
            'Date': response.data.items[2].date,
         },
         'Job4': {
            'title': response.data.items[3].title,
            'Company': response.data.items[3].company_name,
            'Date': response.data.items[3].date,
         },
         'Job5': {
            'title': response.data.items[4].title,
            'Company': response.data.items[4].company_name,
            'Date': response.data.items[4].date,
         },
      }
      return donnee
   }

   async widget9() {

   }
}

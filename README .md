
# Dashboard Readme

Welcome to Dashboard readme

# Descriptions

The purpose of this project is to implement a web application that works like Netvibes.
The user will first connect in the application and then subscribe to different services you that are accessible. All of the service have different widgets

## Project part

In this web site application we have two main parts:
- Frontoffice: The user-facing part where users when connected can explore and select favorites services and widget.
- Backoffice: The admin panel controle the users account and have all right to administrate and manage the web site.

### Technologie used

 We use some technology:

**Frontend**: HTML, Flowbite, React js, Tailwindcss 

**Backend**: Nest Framework (Node.js)

**Database**: MongoDB

## Key feature

To help user to have a better experience we add some functionnality. 

### When connected 
The user can:

- Subscribe to different services you that are     accessible;
- Composes his Dashboard by inserting previously configured widget instances
(see Dashboard & widget Instance)
- Add a new widget instances
- Reconfigure a widget instance
- Move a widget instance present on the Dashboard
- Delete a widget instance present on the Dashboard
### When not connected
The user can just:
- See the Register page to registre and be connected.

### Admin Functionalities

- Create, update, and delete user accounts.
- Create, update, and delete sevices and widgets
- Promote users to administrator status.
- Access detailed booking statistics.

# Installation

***
A little intro about the installation.

git@github.com:EpitechCodingAcademyPromo2023/C-COD-280-COT-2-2-dashboard-setonde.hounnouvi.git
 npm run start dev

 ## Run Locally

Clone the project

```bash
  git clone git@github.com:EpitechCodingAcademyPromo2023/C-COD-280-COT-2-2-dashboard-setonde.hounnouvi.git
```

Go to the project directory

```bash
  cd client
  cd sever
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


 
# Getting Started

To start using the application, follow these steps:

1. Register an account if you're a new user, or log in if you have an account.
2. Select your favorite services and widgets and go to the dashboard

# Authors

- [Sétondé HOUNNOUVI] (setonde.hounnouvi@epitech.eu)
- [Espérat DIMON] (esperat.dimon@epitech.eu)
- [Fatima YARO] (fatima.yaro@epitech.eu)
- [Lawane DJIBRILA] (lawane.djibrila@epitech.eu)

# Ressources
- https://docs.nestjs.com/
- https://tailwindcss.com/docs/installation
- https://flowbite.com/docs/getting-started/      quickstart/
- https://www.mongodb.com/docs/
- https://www.rapideapi.com
- https://www.mixedanalytics.com
## Run Locally

Clone the project

```bash
  git clone git@github.com:EpitechCodingAcademyPromo2023/C-COD-280-COT-2-2-dashboard-setonde.hounnouvi.git
```

Go to the project directory

```bash
  cd client
  cd sever
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## API Reference

#### Get all items

```http
  GET /https://binance43.p.rapidapi.com/ticker/price?symbol=BTCUSDT
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key 6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593  |

```http
  GET /https://weatherapi-com.p.rapidapi.com/current.json?q=6.37,2.45
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key 6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593  |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


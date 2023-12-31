# KImóveis - PostgreSQL - TypeORM com Relacionamentos

Nessa **API** foi desenvolvido um serviço de back-end responsável por gerenciar uma imobiliária utilizando TypeORM e relacionamentos com base no diagrama abaixo:

## Representação:

![image](https://user-images.githubusercontent.com/101838666/210680737-dfced207-47ec-4d63-9d5c-45c871a7d451.png)

## 👨🏻‍💻 Executando o projeto ou o teste

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto ou o teste.

Iniciando a versão web:

```cl
yarn start ou npm run dev
```

Iniciando o test:

```cl
yarn test
```

### User

**Rotas de criação de usuario:**

### POST: /users

**Request**

```
{
    "name": "Joana",
    "email": "joana@kenzie.com",
    "password": "123456",
    "isAdm": false
}
```

**Response - 201 - Created**

```
{
	"name": "Jorge",
	"email": "jorge@kenzie.com",
	"isAdm": false,
	"id": "95de129b-fc96-4c70-b57e-49dc1cb9ffb6",
	"isActive": true,
	"createdAt": "2023-01-05T01:40:00.749Z",
	"updatedAt": "2023-01-05T01:40:00.749Z"
}
```

### POST: /login

**Request**

```
{

    "email": "jorge@kenzie.com",
    "password": "123456"

}
```

**Response - 200 - Ok**

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9yZ2UiLCJpZCI6Ijk1ZGUxMjliLWZjOTYtNGM3MC1iNTdlLTQ5ZGMxY2I5ZmZiNiIsImlhdCI6MTY3Mjg4Mjk5MywiZXhwIjoxNjcyOTY5MzkzLCJzdWIiOiI5NWRlMTI5Yi1mYzk2LTRjNzAtYjU3ZS00OWRjMWNiOWZmYjYifQ.H1QS3gcBspxP6G3ZIP-KqWUfrMEhQHiFM0C2CgS7kX0"
}
```

## Rotas que necessitam de autenticação:

### GET: /users

**Response - 200 - Ok**

```
[
	{
		"id": "7d00dedb-7ab6-4e04-b9b4-d3daef7085a7",
		"name": "Thiago",
		"email": "thiago@mail.com",
		"isAdm": true,
		"isActive": true,
		"createdAt": "2022-12-14T19:40:55.865Z",
		"updatedAt": "2022-12-14T19:40:55.865Z"
	},
	{
		"id": "69e02416-70f6-4478-9f0c-68d787c52a32",
		"name": "Lucas",
		"email": "lucas123@mail.com",
		"isAdm": true,
		"isActive": true,
		"createdAt": "2022-12-14T19:54:19.286Z",
		"updatedAt": "2022-12-14T19:54:19.286Z"
	},
	{
		"id": "e05c4067-1e5b-42b3-a4d3-d4bd47b1b1a4",
		"name": "Juliooooo",
		"email": "Ju520@mail.com",
		"isAdm": false,
		"isActive": true,
		"createdAt": "2022-12-15T01:22:05.647Z",
		"updatedAt": "2022-12-15T01:22:05.647Z"
	}
]
```

## Rota necessita que o usuario esteja logado como Adm

### PATCH: /users/:id (id do usuario)

**Request**

```
{
    "email": "jorge2023@kenzie.com",
    "password": "novaSenha"
}
```

**Response - 200 - Ok**

```
[
	{
		"id": "95de129b-fc96-4c70-b57e-49dc1cb9ffb6",
		"name": "Jorge",
		"email": "jorge2023@kenzie.com",
		"password": "$2a$10$SYR.1C6aSWUSFQFejnDeaOuT2BXETD7S6O7n.nX3jL4JkOEvr3FDu",
		"isAdm": false,
		"isActive": true,
		"createdAt": "2023-01-05T01:40:00.749Z",
		"updatedAt": "2023-01-05T01:40:00.749Z"
	}
]
```

### DELETE: /users/:id (id do usuario)

**Response - 204 - No Content**

## Categories

**Rotas de criação de categorias:**

## Rota necessita que o usuario esteja logado como Adm

### POST: /categories

**Request**

```
{
    "name": "Terrenos"
}
```

**Response - 201 - Created**

```
{
    "name": "Terrenos",
    "id": "e5f1c308-0d74-4e2d-977b-83075cc4adb2"
}
```

### GET: /categories

**Response - 200 - Ok**

```
[
	{
		"id": "1a758f52-2080-46fd-a16d-558198856308",
		"name": "Apartamento"
	},
	{
		"id": "d1b38a29-0d73-48c7-8700-10614dc62b01",
		"name": "Casa"
	},
	{
		"id": "27b51517-0deb-4ca0-ae0a-b4dbd3d67488",
		"name": "Terreno"
	}
]
```

## Propriedades

**Rotas de criação de propriedades:**

## Rota necessita que o usuario esteja logado como Adm

### POST: /properties

**Request**

```
{
    "value": 1000000,
    "size": 350,
    "address": {
        "district": "Rua Heleodo Pires de camargo",
        "zipCode": "18150000",
        "number": "67",
        "city": "Piedade",
        "state": "SP"
    },
    "categoryId": "27b51517-0deb-4ca0-ae0a-b4dbd3d67488"
}
```

**Response - 201 - Created**

```
{
     "value": 1000000,
     "size": 350,
     "address": {
	 "id": "a310dbee-55fc-4daf-9541-3ecb1a9bcbe2",
	 "district": "Rua Heleodo Pires de camargo",
         "zipCode": "18150000",
	 "number": "67",
	 "city": "Piedade",
	 "state": "SP"
     },
     "category": {
	 "id": "27b51517-0deb-4ca0-ae0a-b4dbd3d67488",
	 "name": "Terreno"
     },
     "id": "f7b71adc-4ee2-4a20-a861-ae7788b06d78",
     "sold": false,
     "createdAt": "2022-12-22T17:36:17.065Z",
     "updatedAt": "2022-12-22T17:36:17.065Z"
}
```

### GET: /properties

**Response - 200 - Ok**

```
[
	{
		"id": "6da96b52-7fda-49fa-b477-47939420a501",
		"sold": false,
		"value": 1000000,
		"size": 350,
		"createdAt": "2022-12-22T10:36:30.600Z",
		"updatedAt": "2022-12-22T10:36:30.600Z",
		"address": {
			"id": "0defb39a-a02d-463d-8039-65a4542b9d3e",
			"district": "Rodovia Bunjiro Nakao",
			"zipCode": "18170000",
			"number": "42",
			"city": "Ibiúna",
			"state": "SP"
		}
	},
	{
		"id": "6498ac91-2261-45c1-85fa-ce86d2883c54",
		"sold": false,
		"value": 1000000,
		"size": 350,
		"createdAt": "2022-12-22T10:36:34.932Z",
		"updatedAt": "2022-12-22T10:36:34.932Z",
		"address": {
			"id": "785b7a31-5209-4ad5-9c45-ac60bb71d7b9",
			"district": "Rua Heleodo Pires de camargo",
			"zipCode": "18150000",
			"number": "67",
			"city": "Piedade",
			"state": "SP"
		}
	},
	{
		"id": "f7b71adc-4ee2-4a20-a861-ae7788b06d78",
		"sold": false,
		"value": 1000000,
		"size": 350,
		"createdAt": "2022-12-22T17:36:17.065Z",
		"updatedAt": "2022-12-22T17:36:17.065Z",
		"address": {
			"id": "a310dbee-55fc-4daf-9541-3ecb1a9bcbe2",
			"district": "Rua Heleodo Pires de camargo10",
			"zipCode": "18150000",
			"number": "67",
			"city": "Piedade",
			"state": "SP"
		}
	}
]
```

## Horários

**Rotas de agendamento para visita de uma propiedade:**

## Rota necessita que o usuario esteja logado como Adm

**Obs: Agendamento de horários somente em horário comercial, de segunda à sexta das 8h às 18h.**
**O usuario logado, pode agendar somente uma visita por horário.**
**A propriedade pode receber somente uma visita por horario**

### POST: /schedules

**Request**

```
{
   "date": "04/25/1998",
   "time": "12:00",
   "propertyId": "f7b71adc-4ee2-4a20-a861-ae7788b06d78"
}
```

**Response - 201 - Created**

```
{
	"message": "Appointment successfully scheduled"
}
```

### GET: /schedules/:id (id da propriedade)

**Response - 200 - Ok**

```
{
	"schedules": [
		{
			"id": "5f0b4376-a9de-42bf-9e0d-a1cd5919c137",
			"date": "2022-08-16",
			"hour": "12:55:00",
			"user": {
				"id": "38aa9481-0527-4985-b389-42448fb581e3",
				"name": "Joana",
				"email": "joana@kenzie.com",
				"password": "$2a$10$JA21n4sMJ6U4hq6P5zFRzOyd14ilCFZYdrrKzMRoVXXOTlKrMxxiG",
				"isAdm": false,
				"isActive": true,
				"createdAt": "2022-12-19T18:00:58.626Z",
				"updatedAt": "2022-12-19T18:00:58.626Z"
			}
		},
		{
			"id": "8a1a0070-7955-484e-b042-c3b51ceb767f",
			"date": "2022-12-27",
			"hour": "12:10:00",
			"user": {
				"id": "95de129b-fc96-4c70-b57e-49dc1cb9ffb6",
				"name": "Jorge",
				"email": "cauan@kenzie.com",
				"password": "$2a$10$SYR.1C6aSWUSFQFejnDeaOuT2BXETD7S6O7n.nX3jL4JkOEvr3FDu",
				"isAdm": false,
				"isActive": true,
				"createdAt": "2023-01-05T01:40:00.749Z",
				"updatedAt": "2023-01-05T01:40:00.749Z"
			}
		}
	]
}
```

## Testes realizado ultilizando Jest <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="23" alt="jest icon"  />:

![image](https://user-images.githubusercontent.com/101838666/210904099-19c5e9c5-386c-4a54-811f-929aef2ced37.png)
![image](https://user-images.githubusercontent.com/101838666/210904949-d34687cb-a5c8-44ad-8142-499a41083501.png)

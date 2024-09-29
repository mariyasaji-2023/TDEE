{
  "openapi": "3.0.0",
  "info": {
    "title": "tdee",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "http://localhost:5000"
    }
  ],
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  },
  "tags": [
    {
      "name": "Admin"
    },
    {
      "name": "user"
    }
  ],
  "paths": {
    "/api/admin/login": {
      "post": {
        "tags": [
          "Admin"
        ],
        "summary": "adminLogin",
        "description": "### Admin Login\n\nThis endpoint allows administrators to log in.\n\n#### Request Body\n\n- `email` (string, required): The email address of the administrator.\n    \n- `password` (string, required): The password for the administrator's account.\n    \n\n#### Response\n\n- `message` (string): A message indicating the result of the login attempt.\n    \n- `token` (string): A token for authenticating future requests.\n    \n\n#### Example\n\nRequest:\n\n``` json\n{\n  \"email\": \"admin@example.com\",\n  \"password\": \"admin123\"\n}\n\n ```\n\nResponse:\n\n``` json\n{\n  \"message\": \"Login successful\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\"\n}\n\n ```",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "email": "admin@gmail.com",
                  "password": "abcdefg"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "195"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"c3-7XPnxAKwlplE8ZPm/lNAd/7FTmw\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sat, 28 Sep 2024 17:46:51 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "message": "Admin login successful",
                  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3Mjc1NDU2MTEsImV4cCI6MTcyNzU0OTIxMX0.IpEH7g-rrcKrZoabvHFJZxuFsR9w1bj_QqNQQBRpgFA"
                }
              }
            }
          }
        }
      }
    },
    "/api/admin/users": {
      "get": {
        "tags": [
          "Admin"
        ],
        "summary": "listUsers",
        "description": "### Request\n\nThis is a GET request to retrieve a list of admin users.\n\n### Response\n\nThe response for this request is in the form of a JSON array with the following schema:\n\n``` json\n[\n  {\n    \"_id\": \"string\",\n    \"email\": \"string\",\n    \"password\": \"string\",\n    \"name\": \"string\",\n    \"isDisabled\": true,\n    \"createdAt\": \"string\",\n    \"updatedAt\": \"string\",\n    \"__v\": 0,\n    \"calculations\": []\n  }\n]\n\n ```\n\nThe response contains an array of objects, each representing an admin user. The properties include:\n\n- `_id`: The unique identifier for the user.\n    \n- `email`: The email address of the user.\n    \n- `password`: The password of the user.\n    \n- `name`: The name of the user.\n    \n- `isDisabled`: A boolean indicating whether the user is disabled.\n    \n- `createdAt`: The timestamp when the user was created.\n    \n- `updatedAt`: The timestamp when the user was last updated.\n    \n- `__v`: Version control field.\n    \n- `calculations`: An array of calculations associated with the user.",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "1808"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"710-N1ughZZdUzh36Mo5QegB4XXpPa0\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sat, 28 Sep 2024 17:49:14 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": [
                  {
                    "_id": "66f7f95a03ca68358c6d6713",
                    "email": "mariyasajichiramel@gmail.com",
                    "password": "$2a$10$3IlZLBKWLOMbBZTY3cb./Og15U5e6TM0GZ1ksc625QqnWnVFvRx5a",
                    "name": "marii",
                    "isDisabled": false,
                    "createdAt": "2024-09-28T12:40:58.397Z",
                    "updatedAt": "2024-09-28T12:43:19.194Z",
                    "__v": 0,
                    "calculations": []
                  },
                  {
                    "_id": "66f80808487800cf7dd72580",
                    "email": "anagha123@gmail.com",
                    "password": "$2a$10$x8jq/02M1v5pXtzYts67AO5sTke976M0EKUczp3xNQXAh7Yk8d/ca",
                    "name": "Anaghappi",
                    "isDisabled": false,
                    "createdAt": "2024-09-28T13:43:36.676Z",
                    "updatedAt": "2024-09-28T14:50:13.584Z",
                    "__v": 5,
                    "calculations": [
                      {
                        "tdee": 2369.61365,
                        "weight": 70,
                        "height": 175,
                        "age": 25,
                        "gender": "female",
                        "activityLevel": "moderately active",
                        "_id": "66f81112dc2154cd5727326c",
                        "date": "2024-09-28T14:22:10.467Z"
                      },
                      {
                        "tdee": 2369.61365,
                        "weight": 70,
                        "height": 175,
                        "age": 25,
                        "gender": "female",
                        "activityLevel": "moderately active",
                        "_id": "66f8120cd519c07a7f8d57c8",
                        "date": "2024-09-28T14:26:20.403Z"
                      },
                      {
                        "tdee": 2369.61365,
                        "weight": 70,
                        "height": 175,
                        "age": 25,
                        "gender": "female",
                        "activityLevel": "moderately active",
                        "_id": "66f81415d519c07a7f8d57d6",
                        "date": "2024-09-28T14:35:01.540Z"
                      },
                      {
                        "tdee": 2369.61365,
                        "weight": 70,
                        "height": 175,
                        "age": 25,
                        "gender": "female",
                        "activityLevel": "moderately active",
                        "_id": "66f817a510ab316d88c60199",
                        "date": "2024-09-28T14:50:13.576Z"
                      }
                    ]
                  },
                  {
                    "_id": "66f8187be28aea5844aacee4",
                    "email": "maxy@gmail.com",
                    "password": "$2a$10$Zr2epGquqUGey6pWuFkq.utkYPrTZYVkw6HBALnlVbhINW9vEekyS",
                    "name": "Max",
                    "isDisabled": false,
                    "calculations": [],
                    "createdAt": "2024-09-28T14:53:47.912Z",
                    "updatedAt": "2024-09-28T15:05:33.386Z",
                    "__v": 0
                  },
                  {
                    "_id": "66f83f5f58abe0fab23385ca",
                    "email": "raju@gmail.com",
                    "password": "$2a$10$KqBegLH93kaks98gk8g6.elHi/wnlMObjHoVwjBbXj5RFVSpaIaw2",
                    "name": "Raju",
                    "isDisabled": false,
                    "calculations": [],
                    "createdAt": "2024-09-28T17:39:43.377Z",
                    "updatedAt": "2024-09-28T17:39:43.377Z",
                    "__v": 0
                  }
                ]
              }
            }
          }
        }
      }
    },
    "/api/admin/users/66f7f95a03ca68358c6d6713/disable": {
      "put": {
        "tags": [
          "Admin"
        ],
        "summary": "disableUser",
        "description": "### Disable User\n\nThis endpoint is used to disable a specific user.\n\n#### Request Parameters\n\n- Path Parameters\n    \n    - user_id (string, required): The unique identifier of the user to be disabled.\n        \n\n#### Response\n\n- Status: 200 OK\n    \n- Content-Type: application/json\n    \n- { \"message\": \"\" }\n    \n\n#### Example\n\nRequest:\n\n```\nPUT http://localhost:5000/api/admin/users/66f7f95a03ca68358c6d6713/disable\n\n ```\n\nResponse:\n\n``` json\n{\n    \"message\": \"User account disabled successfully\"\n}\n\n ```",
        "requestBody": {
          "content": {}
        },
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "48"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"30-qKiHe6Lv64ckYgz7sEsw+jCjYtg\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 29 Sep 2024 04:57:38 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "message": "User account disabled successfully"
                }
              }
            }
          }
        }
      }
    },
    "/api/admin/users/66f7f95a03ca68358c6d6713/enable": {
      "put": {
        "tags": [
          "Admin"
        ],
        "summary": "enableUser",
        "description": "### Enable User\n\n#### Request\n\n- Method: PUT\n    \n- URL: `http://localhost:5000/api/admin/users/66f7f95a03ca68358c6d6713/enable`\n    \n\n#### Request Body\n\n- Not applicable\n    \n\n#### Response\n\nThe response is a JSON object with the following schema:\n\n``` json\n{\n    \"message\": \"User account enabled successfully\",\n    \"user\": {\n        \"_id\": \"66f7f95a03ca68358c6d6713\",\n        \"email\": \"mariyasajichiramel@gmail.com\",\n        \"password\": \"$2a$10$3IlZLBKWLOMbBZTY3cb./Og15U5e6TM0GZ1ksc625QqnWnVFvRx5a\",\n        \"name\": \"marii\",\n        \"isDisabled\": false,\n        \"createdAt\": \"2024-09-28T12:40:58.397Z\",\n        \"updatedAt\": \"2024-09-29T05:09:33.617Z\",\n        \"__v\": 1,\n        \"calculations\": []\n    }\n}\n\n ```",
        "requestBody": {
          "content": {}
        },
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "340"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"154-WwedRpVWjZk2fECirR/qXxWS8B0\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 29 Sep 2024 05:09:33 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "message": "User account enabled successfully",
                  "user": {
                    "_id": "66f7f95a03ca68358c6d6713",
                    "email": "mariyasajichiramel@gmail.com",
                    "password": "$2a$10$3IlZLBKWLOMbBZTY3cb./Og15U5e6TM0GZ1ksc625QqnWnVFvRx5a",
                    "name": "marii",
                    "isDisabled": false,
                    "createdAt": "2024-09-28T12:40:58.397Z",
                    "updatedAt": "2024-09-29T05:09:33.617Z",
                    "__v": 1,
                    "calculations": []
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/auth/register": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "userRegister",
        "description": "This endpoint allows users to register by sending a POST request to [http://localhost:5000/api/auth/register](http://localhost:5000/api/auth/register). The request should include the user's name, email, and password in the raw request body.\n\n### Request Body\n\n- `name` (string, required): The name of the user.\n    \n- `email` (string, required): The email address of the user.\n    \n- `password` (string, required): The password for the user account.\n    \n\n### Response\n\nUpon successful registration, the server will respond with a status code of 201 and a JSON object in the response body with the following properties:\n\n- `message` (string): A message confirming the successful registration.\n    \n- `token` (string): A token for the registered user.\n    \n\n#### Example Response\n\n``` json\n{\n    \"message\": \"User Registration successful\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\"\n}\n\n ```",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "name": "kichu",
                  "email": "kichu@gmail.com",
                  "password": "kichu@123"
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "224"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"e0-8oASr21Eb9C5IZGKCN+TvMRbdxA\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 29 Sep 2024 05:12:22 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "message": "User registered successfully",
                  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjhlMWI1MTU1MmJkMzE2NTA5NDk2MyIsImlhdCI6MTcyNzU4Njc0MiwiZXhwIjoxNzI3NTkwMzQyfQ.HHh6bgFzcZFEVvq8R6do36zmPPItvBLLKrOpXjJ7Z_0"
                }
              }
            }
          }
        }
      }
    },
    "/api/auth/login": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "userLogin",
        "description": "### Request\n\nThis API endpoint is used to authenticate and login a user. The request should be sent as an HTTP POST to `http://localhost:5000/api/auth/login`.\n\n#### Request Body\n\n- `email` (string): The email address of the user.\n    \n- `password` (string): The password of the user.\n    \n- `token` (string): Optional token for additional authentication.\n    \n\n### Response\n\nThe response for this request is in JSON format and includes the following fields:\n\n``` json\n\n    \"message\": \"Login successful\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjhlMWI1MTU1MmJkMzE2NTA5NDk2MyIsImlhdCI6MTcyNzU4Njg2NiwiZXhwIjoxNzI3NTkwNDY2fQ.Cy9hsElMQhtgjqm2WxQbjM-scmjOIlWt4iDwHvskgzo\"\n}\n\n ```\n\n- `message` (string): A message related to the authentication status.\n    \n- `token` (string): A token for authenticated user session.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "email": "raju@gmail.com",
                  "password": "raju@123",
                  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjgzZjVmNThhYmUwZmFiMjMzODVjYSIsImlhdCI6MTcyNzU0NTE4NCwiZXhwIjoxNzI3NTQ4Nzg0fQ.3PrJMuynjoJeB_GoNYneLz3R_y1EmpubzN7gJDGriDA"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "212"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"d4-Q5dh3Mq/gQPz/JMFkq4OYDc91Vg\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sat, 28 Sep 2024 17:43:46 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "message": "Login successful",
                  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjgzZjVmNThhYmUwZmFiMjMzODVjYSIsImlhdCI6MTcyNzU0NTQyNiwiZXhwIjoxNzI3NTQ5MDI2fQ.SMFXIjXcrOqsC-3TbdaJw7l8KboDLoOMsUL9fAYeP4k"
                }
              }
            }
          }
        }
      }
    },
    "/api/auth/tdee": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "tdee",
        "description": "### TDEE\n\nThis endpoint is used to calculate Total Daily Energy Expenditure (TDEE) based on the provided user information.\n\n#### Request Body\n\n- `weight` (number): The weight of the user.\n    \n- `height` (number): The height of the user.\n    \n- `age` (number): The age of the user.\n    \n- `gender` (string): The gender of the user.\n    \n- `activityLevel` (string): The activity level of the user.\n    \n\n#### Response\n\n- `message` (string): A message related to the response.\n    \n- `tdee` (number): The calculated Total Daily Energy Expenditure.\n    \n\nAn example of a response for this request is:\n\n``` json\n{\n    \"message\": \"TDEE calculated and saved successfully\",\n    \"tdee\": 1841.6666000000005\n}\n\n ```",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "weight": 50,
                  "height": 175,
                  "age": 22,
                  "gender": "male",
                  "activityLevel": "moderately active"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "70"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"46-z2fD8u3YdEcv7Hv32+5c1XgvelE\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sat, 28 Sep 2024 18:05:50 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "message": "TDEE calculated and saved successfully",
                  "tdee": 2283.37165
                }
              }
            }
          }
        }
      }
    },
    "/api/auth/tdee/history": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "tdeeHistory",
        "description": "### History\n\n#### Request\n\nThis HTTP GET request retrieves the Total Daily Energy Expenditure (TDEE) history.\n\n#### Response\n\nThe response for this request is a JSON object with the following schema:\n\n``` json\n{\n    \"message\": \"TDEE history retrieved successfully\",\n    \"calculations\": [\n        {\n            \"tdee\": 1841.6666000000005,\n            \"weight\": 30,\n            \"height\": 175,\n            \"age\": 25,\n            \"gender\": \"male\",\n            \"activityLevel\": \"moderately active\",\n            \"_id\": \"66f8e27d1552bd3165094968\",\n            \"date\": \"2024-09-29T05:15:41.493Z\"\n        }\n    ]\n}\n\n ```\n\nThe response body contains an array of TDEE calculations, each object within the \"calculations\" array includes the TDEE, weight, height, age, gender, activity level, ID, and date.",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "239"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"ef-HY8zdSJSWK2jq/lYXqYtfDeh3P0\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sat, 28 Sep 2024 18:07:23 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "message": "TDEE history retrieved successfully",
                  "calculations": [
                    {
                      "tdee": 2283.37165,
                      "weight": 50,
                      "height": 175,
                      "age": 22,
                      "gender": "male",
                      "activityLevel": "moderately active",
                      "_id": "66f8457e58abe0fab23385e8",
                      "date": "2024-09-28T18:05:50.347Z"
                    }
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/api/auth/users/profile": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "userProfile",
        "description": "### Profile Request\n\nThis endpoint retrieves the profile of the authenticated user.\n\n#### Request Body\n\nThis request does not require a request body.\n\n#### Response\n\nThe response will be in JSON format and will follow the schema below:\n\n``` json\n{\n    \"_id\": \"66f8e1b51552bd3165094963\",\n    \"email\": \"kichu@gmail.com\",\n    \"name\": \"kichu\",\n    \"isDisabled\": false,\n    \"calculations\": [\n        {\n            \"tdee\": 1841.6666000000005,\n            \"weight\": 30,\n            \"height\": 175,\n            \"age\": 25,\n            \"gender\": \"male\",\n            \"activityLevel\": \"moderately active\",\n            \"_id\": \"66f8e27d1552bd3165094968\",\n            \"date\": \"2024-09-29T05:15:41.493Z\"\n        }\n    ],\n    \"createdAt\": \"2024-09-29T05:12:21.739Z\",\n    \"updatedAt\": \"2024-09-29T05:15:41.496Z\",\n    \"__v\": 1\n}\n\n ```",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "368"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"170-5W8Y1X7+6aySMdG8ixeQU4ZWLu4\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sat, 28 Sep 2024 18:08:45 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "_id": "66f83f5f58abe0fab23385ca",
                  "email": "raju@gmail.com",
                  "name": "Raju",
                  "isDisabled": false,
                  "calculations": [
                    {
                      "tdee": 2283.37165,
                      "weight": 50,
                      "height": 175,
                      "age": 22,
                      "gender": "male",
                      "activityLevel": "moderately active",
                      "_id": "66f8457e58abe0fab23385e8",
                      "date": "2024-09-28T18:05:50.347Z"
                    }
                  ],
                  "createdAt": "2024-09-28T17:39:43.377Z",
                  "updatedAt": "2024-09-28T18:05:50.361Z",
                  "__v": 1
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "user"
        ],
        "summary": "editProfile",
        "description": "### Update User Profile\n\n**Description:**  \nThis endpoint is used to update the user's profile information.\n\n**Request Body:**\n\n- {    \"name\":\"kichumon\"}  \n      \n    \n\n**Response:**  \nThe response is in JSON format and follows the schema below:\n\n``` json\n{\n    \"message\": \"Profile updated successfully\",\n    \"user\": {\n        \"_id\": \"66f8e1b51552bd3165094963\",\n        \"email\": \"kichu@gmail.com\",\n        \"password\": \"$2a$10$GbMiAyU4giE/Q.Ii0ESW2uP2L/F/kIVYDyQyv5kbboq8k1ijut1t2\",\n        \"name\": \"kichumon\",\n        \"isDisabled\": false,\n        \"calculations\": [\n            {\n                \"tdee\": 1841.6666000000005,\n                \"weight\": 30,\n                \"height\": 175,\n                \"age\": 25,\n                \"gender\": \"male\",\n                \"activityLevel\": \"moderately active\",\n                \"_id\": \"66f8e27d1552bd3165094968\",\n                \"date\": \"2024-09-29T05:15:41.493Z\"\n            }\n        ],\n        \"createdAt\": \"2024-09-29T05:12:21.739Z\",\n        \"updatedAt\": \"2024-09-29T05:20:19.615Z\",\n        \"__v\": 1\n    }\n}\n\n ```",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "name": "kichumon"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "495"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"1ef-otE4apskpGpw9IlSpLgQtwYuwnQ\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sat, 28 Sep 2024 18:11:42 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "message": "Profile updated successfully",
                  "user": {
                    "_id": "66f83f5f58abe0fab23385ca",
                    "email": "raju@gmail.com",
                    "password": "$2a$10$KqBegLH93kaks98gk8g6.elHi/wnlMObjHoVwjBbXj5RFVSpaIaw2",
                    "name": "newraju",
                    "isDisabled": false,
                    "calculations": [
                      {
                        "tdee": 2283.37165,
                        "weight": 50,
                        "height": 175,
                        "age": 22,
                        "gender": "male",
                        "activityLevel": "moderately active",
                        "_id": "66f8457e58abe0fab23385e8",
                        "date": "2024-09-28T18:05:50.347Z"
                      }
                    ],
                    "createdAt": "2024-09-28T17:39:43.377Z",
                    "updatedAt": "2024-09-28T18:11:42.495Z",
                    "__v": 1
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/auth/change-password": {
      "put": {
        "tags": [
          "user"
        ],
        "summary": "changePassword",
        "description": "### Change Password\n\n#### Request Body\n\n- Type: JSON\n    \n\n| Key | Type | Description |\n| --- | --- | --- |\n| newPassword | string | New password |\n\n#### Response\n\n- Status: 200\n    \n- Content-Type: application/json\n    \n\n``` json\n{\n    \"message\": \"Password changed successfully\"\n}\n\n ```",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "newPassword": "kichumon@123"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "43"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"2b-BcqZXnJsIxPWaT5KqbeKFU83Xws\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sat, 28 Sep 2024 18:14:26 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "message": "Password changed successfully"
                }
              }
            }
          }
        }
      }
    }
  }
}
# Registro de Errores

| N | Archivo | Problema encontrado | Como lo detectaron | Solucion aplicada | Como se valido |
|---|---------|----------------------|---------------------|--------------------|------------------|
| 1 | src/app.js | La ruta de auth estaba mal escrita, decia `/api/loginn` | Leyendo el codigo y viendo las otras rutas | Se cambio a `/api/auth`. | Validacion con postman |

| 2 | src/app.js | `adminRoutes` estaba con la misma direccion que user | Leyendo el codigo | Se separo en su propia ruta `/api/admin`. | Validacion con postman |

| 3 | src/middleware/authMiddleware.js | Usaba `jwt.decode` en vez de `jwt.verify`, no validaba la firma | Comparando con la doc de jsonwebtoken | Se cambio a `jwt.verify` con el secreto | Validacion con postman |

| 4 | src/middleware/authMiddleware.js | La condicion dejaba pasar sin token como "guest" | Leyendo la logica del if | Se corto con 401 si no hay token | Validacion con postman |

| 5 | src/middleware/authMiddleware.js | `jwt.verify` no tenia try/catch, tiraba 500 | Leyendo el codigo | Se agrego try/catch, devuelve 403 | Validacion con postman |

| 6 | src/controllers/authController.js | Faltaba el return despues del 400 en register | Leyendo el codigo | Se agrego el return | Validacion con postman |

| 7 | src/controllers/authController.js | Se devolvia el hash de password en register | Mirando la respuesta | Se saca password antes de responder | Validacion con postman |

| 8 | src/controllers/authController.js | Usuario duplicado respondia 200 en vez de error | Viendo el status code | Se cambio a 409 | Validacion con postman |

| 9 | src/controllers/authController.js | Faltaba el return en el `if (!user)` del login | Probando login con email inexistente | Se agrego el return | Validacion con postman |

| 10 | src/controllers/authController.js | `bcrypt.compare` tenia los argumentos al reves | Comparando con la doc de bcryptjs | Se dio vuelta el orden | Validacion con postman |

| 11 | src/controllers/authController.js | Se devolvia el hash de password en login | Mirando la respuesta | Se saca password antes de responder | Validacion con postman |

| 12 | src/utils/token.js | `module.export` sin la "s", no exportaba nada | Sabiendo como funciona module.exports | Se corrigio a `module.exports` | Validacion con postman |

| 13 | src/utils/token.js | `JWT_SECRETT` con doble T, no coincidia con el .env | Revisando el .env | Se saco la T de mas | Validacion con postman |

| 14 | src/utils/token.js | El token no llevaba el id, solo el role | Comparando el payload con el uso despues | Se agrego id al payload | Validacion con postman |

| 15 | src/utils/token.js | El token expiraba en 2 segundos | Leyendo el codigo | Se paso a 2 horas | Validacion con postman |
| 16 | src/routes/userRoutes.js | El middleware corria despues del controlador en /me | Leyendo el orden de la ruta | Se invirtio el orden | Validacion con postman |

| 17 | src/controllers/userController.js | Se podia editar el perfil de otro mandando su id | Pensando en la logica de la ruta | Se uso siempre req.user.id | Validacion con postman |

| 18 | src/controllers/userController.js | La comparacion en getProfile quedo rota por el `\|\|` | Siguiendo la expresion a mano | Se volvio a `u.id === req.user.id` | Validacion con postman |

| 19 | src/controllers/adminController.js | El listado de usuarios traia el hash de password | Mirando la respuesta | Se filtra password antes de responder | Validacion con postman |

| 20 | src/routes/adminRoutes.js | La ruta /all no tenia proteccion de admin | Leyendo el codigo | Se agrego authMiddleware y chequeo de rol | Validacion con postman |

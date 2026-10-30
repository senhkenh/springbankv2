# SpringBank

Aplicación web bancaria full-stack construida con **Spring Boot** en el backend y **Angular** en el frontend.

![SpringBank Preview](springbankv2.png)

---

## Características

- **Landing page** con hero, productos, simulador de crédito, sección app y testimonios
- **Banca Empresas** con página propia, planes y formulario de contacto
- **Login** con diseño de dos columnas, autenticación real contra la API
- **Banca Personas** con sidebar lateral y 3 páginas internas:
  - **Dashboard** — resumen de saldo, movimientos recientes y accesos rápidos
  - **Mis Cuentas** — tarjetas por cuenta, filtros y tabla de movimientos en CLP
  - **Transferencias** — flujo en 2 pasos, confirmación y contactos frecuentes
- **Seguridad** con Spring Security, BCrypt y bloqueo automático por intentos fallidos
- Íconos de **Font Awesome 7**
- Fuente **Inter** y paleta corporativa `#0029FF`

---

## Vista previa

| Sección | Descripción |
|---|---|
| **Home** | Hero con imagen de fondo, accesos rápidos, grid de productos, banner crédito, app móvil, testimonios y CTA |
| **Empresa** | Página dedicada con navbar propia, productos, beneficios, planes y testimonios |
| **Login** | Panel izquierdo con foto, panel derecho con formulario conectado a la API |
| **Dashboard** | 4 tarjetas resumen en CLP, últimas transacciones, cuentas y 6 accesos rápidos |
| **Cuentas** | 3 tarjetas seleccionables con filtro Todos / Abonos / Cargos |
| **Transferencias** | Stepper 2 pasos, selector de cuenta origen, confirmación en banner navy |

---

## Tecnologías

### Backend
| Tecnología | Versión |
|---|---|
| Java | 17 |
| Spring Boot | 4.1.2 |
| Spring Security | — |
| Spring Data JPA | — |
| H2 Database | Runtime |
| Maven | 3.10 |

### Frontend
| Tecnología | Versión |
|---|---|
| Angular | 22 |
| TypeScript | 6 |
| SCSS | — |
| Font Awesome | 7 |

---

## Cómo ejecutar

### Backend (Spring Boot)

```bash
JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64 ./mvnw spring-boot:run
```

El servidor arranca en `http://localhost:8080`.  
La consola H2 queda disponible en `http://localhost:8080/h2-console`  
(JDBC URL: `jdbc:h2:mem:springbank` · usuario: `sa` · sin contraseña).

### Frontend (Angular)

```bash
cd frontend
npm install
npx ng serve
```

La app estará disponible en `http://localhost:4200`.

---

## Usuarios de prueba

| RUT (usuario) | Contraseña | Rol |
|---|---|---|
| `12345678-9` | `Password123!` | Cliente |
| `98765432-1` | `Password123!` | Cliente |
| `11223344-5` | `Password123!` | Cajero |
| `55667788-9` | `Password123!` | Admin |

> Las cuentas se crean automáticamente al iniciar el backend (`data.sql`).

---

## Estructura del proyecto

```
springbank/
├── src/main/java/com/example/springbank/
│   ├── controller/
│   │   └── AuthController.java       # POST /api/auth/login, /register
│   ├── config/
│   │   └── SecurityConfig.java       # Spring Security
│   ├── model/
│   │   ├── BankUser.java             # Entidad JPA
│   │   └── Role.java                 # Enum ROLE_CLIENT / CASHIER / ADMIN
│   ├── repository/
│   │   └── BankUserRepository.java   # JPA Repository
│   ├── AuthService.java              # Lógica de login y registro
│   └── SpringbankApplication.java
├── src/main/resources/
│   ├── application.properties        # H2, JPA, servidor
│   └── data.sql                      # Datos de prueba
└── frontend/src/app/
    ├── pages/
    │   ├── home/                     # Landing page
    │   ├── empresa/                  # Banca empresas
    │   ├── login/                    # Inicio de sesión
    │   ├── dashboard/                # Panel principal
    │   ├── accounts/                 # Mis cuentas
    │   ├── transfer/                 # Transferencias
    │   ├── tarjetas/                 # Tarjetas de crédito
    │   ├── creditos/                 # Créditos con simulador
    │   ├── inversiones/              # Fondos mutuos
    │   ├── seguros/                  # Seguros
    │   └── ayuda/                    # Centro de ayuda
    └── shared/
        ├── public-navbar/            # Navbar pública
        ├── public-footer/            # Footer público
        ├── sidebar/                  # Sidebar banca personas
        └── navbar/                   # Navbar interna (legacy)
```

---

## Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Azul principal | `#0029FF` | Botones, acentos, links |
| Azul oscuro | `#001fcc` | Hover |
| Navy | `#001240` | Hero, footer, topbar |
| Fondo | `#f8f9fc` | Background general |
| Éxito | `#16a34a` | Abonos, estados positivos |
| Error | `#dc2626` | Cargos, errores |
| Warning | `#d97706` | Advertencias |

---

## Licencia

MIT © 2026 SpringBank

# 🏦 SpringBank

Aplicación web bancaria full-stack construida con **Spring Boot** en el backend y **Angular** en el frontend.

![SpringBank Preview](presentacion.png)

---

## ✨ Características

- **Landing page** estilo banco real (inspirada en Banco de Chile)
- **Login** con diseño de dos columnas y foto de fondo
- **Dashboard** con resumen de saldo, ingresos, gastos y transacciones recientes
- **Cuentas** con tarjetas por cuenta y tabla de movimientos
- **Transferencias** con formulario validado y confirmación de éxito
- Iconos de **Font Awesome 6**
- Colores corporativos **#0029FF**
- Diseño **responsive**

---

## 🖥️ Vista previa

| Sección | Descripción |
|---|---|
| **Home** | Hero con foto de fondo, productos, banner de crédito, sección app, testimonios |
| **Login** | Panel izquierdo con foto4, panel derecho con formulario, Google/Apple login |
| **Dashboard** | Tarjetas de resumen + lista de últimas transacciones |
| **Cuentas** | 3 cuentas con saldo + tabla de movimientos |
| **Transferencias** | Formulario con validación + pantalla de éxito |

---

## 🛠️ Tecnologías

### Backend
| Tecnología | Versión |
|---|---|
| Java | 17 |
| Spring Boot | 4.1.2 |
| Maven | 3.x |

### Frontend
| Tecnología | Versión |
|---|---|
| Angular | 19+ |
| TypeScript | 5.x |
| SCSS | — |
| Font Awesome | 6.x |

---

## 🚀 Cómo ejecutar

### Backend (Spring Boot)

```bash
# Desde la raíz del proyecto
./mvnw spring-boot:run
```

El servidor arranca en `http://localhost:8080`

### Frontend (Angular)

```bash
cd frontend
npm install
npx ng serve
```

La app estará disponible en `http://localhost:4200`

---

## 📁 Estructura del proyecto

```
springbank/
├── src/                          # Backend Spring Boot
│   └── main/
│       ├── java/com/example/springbank/
│       └── resources/
├── frontend/                     # Frontend Angular
│   └── src/
│       └── app/
│           ├── pages/
│           │   ├── home/         # Landing page
│           │   ├── login/        # Inicio de sesión
│           │   ├── dashboard/    # Panel principal
│           │   ├── accounts/     # Cuentas bancarias
│           │   └── transfer/     # Transferencias
│           └── shared/
│               └── navbar/       # Barra de navegación
├── images/                       # Imágenes originales
├── presentacion.png              # Captura de pantalla
└── README.md
```

---

## 🎨 Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Azul principal | `#0029FF` | Navbar, botones, acentos |
| Azul oscuro | `#001fcc` | Hover, degradados |
| Azul navy | `#001299` | Hero overlay, footer |
| Fondo | `#f4f6ff` | Background general |
| Éxito | `#22c55e` | Transacciones positivas |
| Error | `#ef4444` | Mensajes de error |

---

## 📄 Licencia

MIT © 2025 SpringBank

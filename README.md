<h1 align="center">Talenavi Login Page</h1>

A modern login page application built with **Vue**, **TypeScript**, and **Vite**, equipped with form validation using **Vee Validate** and **Zod**.

## ⚙️ Tech Stack
- **[Vue](https://vuejs.org/)** is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.

- **[Vite](https://vitejs.dev/)** is a lightning-fast build tool and development server that powers this project’s workflow. It enables instant hot module replacement, fast startup, and optimized production builds—ideal for an animation-heavy React site with smooth, real-time development feedback and minimal config.


- **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework that allows developers to design custom user interfaces by applying low-level utility classes directly in HTML, streamlining the design process.

- **[Vee Validate](https://vee-validate.logaretm.com/v4/)**  is a popular validation framework specifically designed for Vue.js applications, simplifying form handling for developers. It allows developers to easily implement validation rules, track form state (like valid or dirty), handle submissions, and manage error messages.

- **[Zod](https://zod.dev/)** is a TypeScript-first validation library. Using Zod, you can define schemas you can use to validate data, from a simple string to a complex nested object.

## 🔋 Features
👉 **Responsive Layout**: 
- Desktop ≥ 1024px the layout should follow the left–right design as shown in the Figma file.
-  Mobile (≤ 768px) the layout should switch to a single-column format (centered form, banner becomes background).

👉 **Form Validation**: Email must follow a proper email format and password minimum have 6 characters.

👉 **Functionality**: If form valid, display success message via `alert("Login successful!")` and save the following data to `localestorage`
```json
{
  "email": "user@gmail.com",
  "loginAt": "timestamp"
}
```
If the form is invalid, show a simple error message

## 🤸 Quick Start
Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/algazza/talenavi-login.git

cd talenavi-login
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

---
<h4 align="center">
Made with ❤️ for Talenavi
</h4>
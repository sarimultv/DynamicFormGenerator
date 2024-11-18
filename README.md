# Project Requirements Survey

Project Requirements Survey is a dynamic form generator web app built using the below tech stack,

- React JS
- React router
- JavaScript
- React Redux Toolkit for global State Management
- Tailwind CSS for consistent Design
- Vite for creating scaffolding React Application
- Firebase for deployement and hosting

# Setup

For running form generator web app, you need to create scaffolding of React using vite.
You need to install React Router DOM, React Redux Toolkit, React Redux, & Tailwind CSS.

Install all the pakages using the below commands,

- npm create vite@latest dynamic_form_generaor -- --template react
- npm install react-redux
- npm install @reduxjs/toolkit
- npm install react-router-dom

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

After installing Tailwind CSS, add the below paths to all of your template files in your tailwind.config.js file.

content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

@tailwind base;
@tailwind components;
@tailwind utilities;

# Example JSON Schema

- Below is the basic JSON schema for the reference, config driven form UI can be generated using dynamic JSON schema.

{
formTitle: "Project Requirements Survey",
formDescription: "Please fill out this survey about your project needs",

fields: [
{
id: "email",
type: "email",
label: "Email Address",
required: true,
placeholder: "you@example.com",
validation: {
pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
message: "Please enter a valid email address",
},
},
{
id: "companySize",
type: "select",
label: "Company Size",
required: true,
options: [
{ value: "1-50", label: "1-50 employees" },
{ value: "51-200", label: "51-200 employees" },
{ value: "201-1000", label: "201-1000 employees" },
{ value: "1000+", label: "1000+ employees" },
],
},
]
}

# Local Development Guide

To run the Dynamic Form Generator web app, execute the below command,

- npm run dev

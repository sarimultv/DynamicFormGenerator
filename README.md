# Project Requirements Survey

Project Requirements Survey is a dynamic form generator web app built using the below tech stack,

- React JS
- React Router
- JavaScript
- React Redux Toolkit for global State Management
- Tailwind CSS for consistent Design
- Vite for creating scaffolding React Application
- Firebase for deployement and hosting

# Setup

For running form generator web app, you need to create scaffolding of React using Vite.
You need to install React Router DOM, React Redux Toolkit, React Redux, & Tailwind CSS.

Install all the packages using the below commands,

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
  id: "name",

            type: "text",

            label: "Full Name",

            required: true,

            placeholder: "Enter your full name",

        },

        {
        id: "industry",

            type: "radio",

            label: "Industry",

            required: true,

            options: [
                { value: "tech", label: "Technology" },

                { value: "healthcare", label: "Healthcare" },

                { value: "finance", label: "Finance" },

                { value: "retail", label: "Retail" },

                { value: "other", label: "Other" },
            ],

        },

        {
        id: "comments",

            type: "textarea",

            label: "Additional Comments",

            required: false,

            placeholder: "Any other details you'd like to share...",

        },

  ],
  }

# Local Development Guide

To run the Dynamic Form Generator web app, execute the below command,

- npm install
- npm run dev
- Create a .env file and add the firebase key with name VITE_REACT_FIREBASE_KEY and provide the API key of firebase.

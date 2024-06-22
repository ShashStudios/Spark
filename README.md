<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spark</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        h1 {
            color: #333;
            font-size: 2em;
            margin-bottom: 10px;
        }

        h2 {
            color: #333;
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 20px;
        }

        code {
            background-color: #f4f4f4;
            padding: 5px;
            border-radius: 3px;
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }

        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }
    </style>
</head>

<body>
    <h1>⚡ Spark</h1>
    <p>Spark is a powerful npm package that provides a standardized webpage with three pages featuring different input types such as text-to-text, voice-to-text, and text-to-speech. It allows developers and businesses to quickly set up applications without spending hours on styling and coding the front end, making it ideal for those focusing on their own trained models and custom needs.</p>

    <h2>✨ Features</h2>
    <ul>
        <li>⚡ <strong>Fast Setup</strong>: Quickly prop up a basic web application with minimal configuration.</li>
        <li>🗣️ <strong>Multiple Input Types</strong>: Supports text-to-text, voice-to-text, and text-to-speech inputs.</li>
        <li>🎨 <strong>Customizable</strong>: Easily customize the appearance and layout to match your brand.</li>
        <li>📱 <strong>Responsive Design</strong>: Works well on different devices and screen sizes.</li>
        <li>🔗 <strong>Backend Integration</strong>: Simple methods for connecting to backend services or APIs.</li>
    </ul>

    <h2>🛠️ Technologies Used</h2>
    <ul>
        <li><a href="https://nextjs.org">Next.js</a> - React framework for production.</li>
        <li><a href="https://tailwindcss.com">Tailwind CSS</a> - Utility-first CSS framework.</li>
        <li>Shadow CSS - CSS encapsulation technique.</li>
        <li><a href="https://github.com/aeternity/aepp-components">Aeternity UI</a> - UI components library.</li>
        <li><a href="https://www.mongodb.com">MongoDB</a> - NoSQL database.</li>
    </ul>

    <h2>📦 Installation</h2>
    <p>To install Spark, use npm:</p>
    <pre><code>npm install spark</code></pre>

    <h2>🚀 Usage</h2>
    <p>Here is an example of how to use Spark in your Next.js project:</p>
    <pre><code>import { createApp } from 'spark';

const appConfig = {
  pages: [
    { type: 'home', content: 'Welcome to the application' },
    { type: 'input', inputType: 'text-to-text', placeholder: 'Enter text here...' },
    { type: 'output', content: 'Results will be displayed here' },
  ],
  backendUrl: 'https://api.yourservice.com',
};

createApp(appConfig);</code></pre>

    <h3>🌐 Customization</h3>
    <p>You can customize the appearance and layout by modifying the styles with Tailwind CSS.</p>

    <h3>📄 Configuration</h3>
    <p>The <code>appConfig</code> object can be configured with the following options:</p>
    <ul>
        <li><strong>pages</strong>: An array of page objects, each with a <code>type</code> and <code>content</code>.
            <ul>
                <li><code>type</code>: Type of the page (<code>home</code>, <code>input</code>, <code>output</code>).</li>
                <li><code>content</code>: Text content or placeholder for the page.</li>
                <li><code>inputType</code>: Type of input (<code>text-to-text</code>, <code>voice-to-text</code>, <code>text-to-speech</code>).</li>
            </ul>
        </li>
        <li><strong>backendUrl</strong>: The URL of your backend service to connect the front end with.</li>
    </ul>

    <h2>🌟 Example Project</h2>
    <p>Check out our <a href="https://github.com/yourusername/spark-example">example project</a> to see Spark in action and get started quickly.</p>

    <h2>🤝 Contributing</h

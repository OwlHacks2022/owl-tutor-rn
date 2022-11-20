<p align="center">
  <a href="" rel="noopener">
 <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/308/394/datas/gallery.jpg" alt="Project logo"></a>
</p>
<h3 align="center">owl-tutor</h3>
<div align="center">

[![Hackathon](https://img.shields.io/badge/hackathon-name-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 Problem Statement <a name = "problem_statement"></a>](#-problem-statement-)
- [💡 Idea / Solution <a name = "idea"></a>](#-idea--solution-)
- [⛓️ Dependencies / Limitations <a name = "limitations"></a>](#️-dependencies--limitations-)
- [🚀 Challenges <a name = "future_scope"></a>](#-challenges-)
- [🏁 Getting Started <a name = "getting_started"></a>](#-getting-started-)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [🎈 Usage <a name="usage"></a>](#-usage-)
- [⛏️ Built With <a name = "tech_stack"></a>](#️-built-with-)
- [✍️ Authors <a name = "authors"></a>](#️-authors-)
- [🎉 Acknowledgments <a name = "acknowledgments"></a>](#-acknowledgments-)

## 🧐 Problem Statement <a name = "problem_statement"></a>

Team O noticed the inefficiency in Foothill's current LCR Learning Resources Center). We all have experienced that feeling of being stuck in a homework question. It would be absurd to book a 30-minutes appointment to resolve this problem. Even the drop-in session can feel very awkward if we only ask a single question. Most of the time, we ended up guessing or searching the answer online without fully comprehending the topic. Owl Tutor aims to resolve this problem by connecting the Foothill community and enable these questions to be answered in a community-driven discussion forum.

## 💡 Idea / Solution <a name = "idea"></a>

The app has 3 main features: dashboard, appointment, and forum. The dashboard is presented in the main page and acts as a to-do list for the students. The dashboard allows students to get an overview of their days/weeks. The appointment features presents a user-friendly and easy-to-use interface that connects students with tutors pertaining to a particular subject. Lastly, the forum is a discussion space where students and tutors are able to answer course-specific questions. The app is personalized for each user as it utilizes Canvas API integration that provides almost all the data we need

## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

Owl Tutor uses React Native (frontend) and Firebase (backend) as well as Canvas API. Additionally, presentation video is made through canva.com

## 🚀 Challenges <a name = "future_scope"></a>

There are a lot of problems that we ran into such as Canvas API implementation. Canvas API documentation was vague with some of its components not working properly. One major problem, however, was the authentication system. In order to access the OAuth2 system, it requires a devkey which can further complicate the data structure and implementation. Another problem we ran into is processing data format output. The user ID for canvas students has more than 16 digits of number and is outputted as an integer. As a result, an integer overflow occurs and the user id outputted does not match the actual one. Other challenges include UI/UX design, presentation, and time managements as Team O only consists of 2 members. A less technical challenge include academic integrity for app usage.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

- nodejs
- yarn

### Installing

A step by step series of examples that tell you how to get a development env running.

```
yarn install
```

## 🎈 Usage <a name="usage"></a>

```
yarn start
```

## ⛏️ Built With <a name = "tech_stack"></a>

- [React Native](https://reactnative.dev/) - Mobile App
- [Firebase](https://firebase.google.com/) - Backend
- [Expo](https://expo.dev/) - Runtime

## ✍️ Authors <a name = "authors"></a>

- [@oliverchou](https://github.com/knhn1004) - Idea & Initial work
- [@christopher-kusmana](https://github.com/Christopher-Kusmana) - Video, Paperwork, Idea, UI/UX Design

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors)
who participated in this project.

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References

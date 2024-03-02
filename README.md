# Assessment for Unit 3

Being a developer requires an acute attention to detail. The expectation of this assessment is that all instructions are read carefully and followed completely.

A good developer will ask clarifying questions when a task is unclear and use all the resources at their disposal.

The step-by-step instructions [here](https://github.com/LEARNAcademy/Syllabus/blob/main/github/assessments.md) breakdown the git and GitHub process for this assessment.

Assessment should be accessed through the GitHub Classroom link provided to you in Slack.

PRs should be posted _before_ class begins on Monday, March 4, 2024.

#### Process

- Accept the assignment via GitHub Classroom link shared with you in Slack
- `cd` into an appropriate location on your local, we recommend the Desktop
- Clone the assessment repository
- `cd` into the assessment
- Create a branch with the unit and your name, e.g `unit-3-sarah-proctor`
- Run $ `yarn` to install the React dependencies
- Run $ `yarn start` to start the server
- Complete all assessment tasks
- Git add files, commit, push to your branch
- Create a pull request and leave the branch open for review!

---

### React Challenge

1. React Debugging: The Card Draw React application has three (3) errors that need to be fixed. Use the console and error messages to guide you to the solution. ✅

2. React Feature: Add functionality to the `Return Cards and Shuffle Deck` button using the `shuffle` function to reset the Card Draw application to its original state. ✅

3. React Concepts: Add comments to the seven (7) notations in the `drawCard` function describing in detail the functionality line of code BELOW the comment. ✅

4. STRETCH (optional): Add stylings of your choice to the application. Ensure the styling does not interfere with the card draw functionality.

### Interview Practice Questions

1. What are three (3) syntax differences between HTML and JSX?

- ability to use component call syntax in jsx
- jsx curly brackets to implement js within an html element
- the ability to use event handlers like onClick within the element

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?
   Yarn is a package manager 😁 ummm... I'm not exactly sure what yarn is and what it does, but I know it's responsible for installing all the node modules and extensions and dependencies that work to make our react apps function. When the command is run in the terminal, I'm not sure what exact files are modified, but I know it creates a lot of new files and directories like index.html, App.js, package.json, etc.

3. What is the difference between state values and props in React?
   State values hold any type of data and are intended to be changed at some point (mutable). Props is an object whose properties' values may change, but it is technically immutable. For example, I couldn't go into Card.js right now and try to reset the value of hand, but I could use setHand in App.js to alter the value of the hand state variable.

4. STRETCH (optional): What is the difference between a div tag and a span tag?
   If my understanding is correct, a div tag is a general, all-purpose element in html and is a block level element. I've only ever seen span tags used to style text so I'd imagine that's its' main purpose and it's inline.

### Looking Ahead: Terms for Next Unit

1. Object-oriented programming: From my understanding, OOP is a programming style primarily used in back-end, but its' principles can also be implemented into front-end. I think the general premise is to compartmentalize related code, kind of like classes in js, so that code becomes more reusable and organized.

_I will be using the internet for the next 2 questions because I know nothing about Ruby_ 2. Ruby: Ruby utilizes OOP! Ruby is a loosely typed language meaning variable types don't have to be declared (looking at you, java 🙄). It's also read top down left to right just like js! It uses something called garbage collection which sounds pretty cool. It seems like it just helps save memory which is important when working in back-end!

3. Ruby Hashes:
   Ruby hashes are collections of key-value pairs and are denoted by curly braces which contain key-value pairs separated by commas (sounds like an object to me!). The only difference is instead of using a colon to assign pairs, a fat arrow is used. And rather than using dot notation to access the property and its value, one must call the hash by name followed by the key name within brackets.

---

### Assessment Review Process

When an instructor reviews a student's assessment the instructor is evaluating the work through the lens of the Dreyfus model of skill acquisition. The Dreyfus model describes how individuals progress through various levels in their learning process of new skills in the following levels: novice, advanced beginner, competent, proficient, expert. For this course students will be evaluated as novice, advanced beginner, or competent skill levels. Skill levels are not grades! Skill levels measure the current understanding of a set of topics covered in class.

Assessments are expected to be completed on time. In the event of an emergency, a professional developer will communicate with the instructor and reestablish a deadline suitable to both parties. Assessments turned in late without communication will be evaluated at a lower level of skill acquisition.

### Incomplete

An assessment that is considered incomplete is one that does not meet the requirements of a valid attempt on every question. Incomplete assessments will not be reviewed and will be returned to the student for completion. Students with incomplete assessments will not be able to access the next assessment until the current one is complete. An assessment will be considered incomplete due to the following:

- questions with no answer (excluding STRETCH options)
- no pseudo code when requested
- non-working code with no accompanying explanation

### Complete

An assessment that is considered complete is one that meets the bare minimum requirements of a valid attempt on every question. An assessment that is considered complete did not display enough effort to reach the novice level of skill acquisition.

### Novice

The novice stage is the first level of skill acquisition. In the novice level, the student is just beginning to understand the skill and requires a step-by-step "recipe" to produce an output. An assessment that is considered at the novice level of skill acquisition is one that meets the requirements of a valid attempt on every question while closely following process notes from class to produce:

- basic pseudo code
- code that will output content in the terminal
- "your answers" written in the student's own words
- researched answers written in the student's own words that provide additional context

### Advanced Beginner

The advanced beginner stage is the second level of skill acquisition. At the advanced beginner level, the student can begin to troubleshoot problems on their own and can decide if the "recipe" will be able to produce a particular outcome. An assessment that is considered at the advanced beginner level of skill acquisition is one that meets the requirements of a valid attempt on every question while adapting process notes from class to produce:

- pseudo code with proper vocabulary terms
- code that will output correct content in the terminal
- "your answers" written in complete sentences in the student's own words that provide partially correct comments
- researched answers written in complete sentences in the student's own words that provide additional context

### Competent

The competent stage is the third level of skill acquisition. At the competent level, the student can decide what information is relevant to solve the problem and can begin to create their own "recipe" to produce a particular outcome. An assessment that is considered at the competent level of skill acquisition is one that meets the requirements of a valid attempt on every question while adapting process notes from class as well as from other resources to produce:

- detailed pseudo code with proper vocabulary terms
- code that will output correct content in the terminal following best practices
- "your answers" written in complete sentences in the student's own words that provide correct answers
- well-researched and detailed answers written in complete sentences in the student's own words that provide additional context

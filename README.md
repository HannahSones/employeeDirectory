# employeedirectory
An employee directory built using React, so that a user can view their entire employee directory at once and have quick access to information.

## Table of contents
* [About](#about-the-project)
  * [Built using](#built-using)
* [Functionality](#functionality)
* [Installation](#installation)
* [Deployed Link](#deployed-link)
* [Further Development](#further-development)
* [License](#license)

----------

## About the project
This employee directory uses randomuser.me api to populate an employee database and create a directory. Users of the app can then search for specific employees by name or organise alphabetically using the filter buttons in the column headings.   

I found this project quite testing initially as I had to get my head around working in React. Creating the html and CSS and getting that to statically display was straightforward but using UseState and UseEffect took some work reading the documentation and using AskBCS.

### Built using
* React
* axios
* randomuser api

----------

## Functionality  
The following screen record demonstrates the employee directory's functionality.   
![Employee Directory video walkthrough]()   

By clicking on the filter buttons in the email and location columns, a user can filter employees alphabetically by these criteria. There is also a search bar to find a specific employee by name.

-------------

## Installation
1. Clone the code from the GitHub repo
2. Open project directory, then install all required dependencies
3. Enter `yarn start` to run the application in development mode in your localhost

------------------
## Deployed link   
Or you can view the live deployment of the application on [Github Pages]().

-------------
## Further Development
If I had more time available, I would like to improve the app by:
* Having a list of previous searches for quick and easy access. This could be saved in the local storage
* Add a filter function for the name to sort these in ascending or descending order
* Have a reset button to clear all functions and return the page to its first settings

-------------
## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/).   
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.   
![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)

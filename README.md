# LazyChoice
LazyChoice is a web application that random the restaurant name for you! Just select the location and hit that Random button!

# Demo
<img src="https://raw.githubusercontent.com/mekpavit/lazychoice/master/stoic-neumann-af5db8.netlify.com_.png" width=200>
https://stoic-neumann-af5db8.netlify.com/

# Installation

* Clone the project
```
git clone git@github.com:mekpavit/lazychoice.git
```
* Go to `src/frontend` folder
```
cd lazychoice/src/frontend
```
* Install dependencies
```
yarn install
```
* Start the development server!
```
yarn start
```

# Usage

* Restaurant list can be changed by modifiying `src/frontend/src/restaurants.js`
```
const restaurants = [
    {
        "name": "Restaurant A",
        "url": "https://restaurant-a-website.com",
        "location": "Bangkok"
    },
    {
        "name": "Restaurant B",
        "url": "https://restaurant-b-website.com",
        "location": "Chaingmai"
    }
]
export default restaurants
```

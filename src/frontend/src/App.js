import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import restaurants from './restaurants'


class App extends React.Component {
  render() {
    return (
      <div>
        <RestaurantRandomizer />
      </div>
    )
  }
}

function RestaurantInformation(props) {

  const [currentRestaurantsIndex, setCurrentRestaurantsIndex] = useState(0)

  function getNextRestaurantsIndex(currentRestaurantsIndex) {
    if (currentRestaurantsIndex === props.restaurants.length) {
      return 0
    } else {
      return currentRestaurantsIndex + 1
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setCurrentRestaurantsIndex(getNextRestaurantsIndex(currentRestaurantsIndex))
    }, 100)
  })

  return (
    <div>
      <Container fixed>
        <Typography align='center' variant='h4'><b>RESTAURANT NAME</b></Typography>
      </Container>
      <Container fixed>
        <Typography align='center' variant='h4'>
          <Link href={props.restaurant.url} data-cy="restaurant-name">
            {props.restaurant.name ? props.restaurant.name : props.restaurants[currentRestaurantsIndex].name}
          </Link>
        </Typography>
      </Container>
    </div>
  )
}

function RestaurantFilterForm(props) {

  function handleChange(e) {
    props.setSelectedLocation(e.target.value)
  }

  function renderLocationOption(locations) {
    return locations.map((location) => <MenuItem value={location}>{location}</MenuItem>)
  }

  return (
    <div>
      <Container fixed>
        <FormControl fullWidth={true}>
            <InputLabel id='label-for-location-dropdown'>Location</InputLabel>
            <Select labelId='label-for-location-dropdown' value={props.selectedLocation} onChange={handleChange} data-cy='location-dropdown'>
              {renderLocationOption(props.locations)}
            </Select>
            <Box mt={2}>
              <Button variant="contained" color="primary" data-cy='random-button' onClick={props.onClickRandom}>
                {props.isAlreadyRandom ? "Random Again!" : "Random!"}
              </Button>
            </Box>
          </FormControl>
      </Container>
    </div>
  )
}

function RestaurantRandomizer() {

  const [randomedRestaurant, setRandomedRestaurant] = useState({"name": "", "url": "", "location": ""})

  const [selectedLocation, setSelectedLocation] = useState('Siam')

  const [isAlreadyRandom, setIsAlreadyRandom] = useState(false)

  function onClickRandom() {
    if (!isAlreadyRandom) {
      const randomedRestaurantIndex = Math.floor((restaurants.length * Math.random()))
      setRandomedRestaurant(
        restaurants[randomedRestaurantIndex]
      )
      setIsAlreadyRandom(true)
    } else {
      setRandomedRestaurant({"name": "", "url": "", "location": ""})
      setIsAlreadyRandom(false)
    }
  }

  function getLocationsFromRestaurants(restaurants) {
     return restaurants.reduce((locations, restaurant) => {
       if (locations.indexOf(restaurant.location) === -1) {
         locations.push(restaurant.location)
       }
       return locations
     }, [])
  }

  return (
    <Grid
      container
      spacing={0}
      align="center"
      justify="center"
      direction="column"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        <RestaurantInformation restaurants={restaurants} restaurant={randomedRestaurant}/>
        <RestaurantFilterForm 
          locations={getLocationsFromRestaurants(restaurants)} 
          selectedLocation={selectedLocation} 
          setSelectedLocation={setSelectedLocation} 
          onClickRandom={onClickRandom}
          isAlreadyRandom={isAlreadyRandom}
        />
      </Grid>
    </Grid>
  )
}

export default App
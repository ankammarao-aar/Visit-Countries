import {ListItem, CountryName, Button, Visited} from './styledComponents'

const CountriesView = props => {
  const {countriesDetails, addCountries} = props
  const {id, name, isVisited} = countriesDetails

  const onClickVisit = () => {
    addCountries(id)
  }

  return (
    <ListItem>
      <CountryName>{name}</CountryName>
      {isVisited === true ? (
        <Visited>Visited</Visited>
      ) : (
        <Button type="button" onClick={onClickVisit}>
          Visit
        </Button>
      )}
    </ListItem>
  )
}

export default CountriesView

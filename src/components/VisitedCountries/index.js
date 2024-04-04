import {ListItem, Image, NameCard, Name, RemoveButton} from './styledComponents'

const VisitedCountries = props => {
  const {visitedDetails, removeCountry} = props
  const {id, name, imageUrl} = visitedDetails

  const onClickRemove = () => {
    removeCountry(id)
  }

  return (
    <ListItem>
      <Image src={imageUrl} alt="thumbnail" />

      <NameCard>
        <Name>{name}</Name>
        <RemoveButton type="button" onClick={onClickRemove}>
          Remove
        </RemoveButton>
      </NameCard>
    </ListItem>
  )
}

export default VisitedCountries

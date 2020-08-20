import React from 'react'
import { Dropdown, Input, Header, Icon} from 'semantic-ui-react'

const Filter = (props) =>{

  const filterOptions = [
    {
      key: 'None',
      text: 'None',
      value: 'none',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'IPA',
      text: 'IPA',
      value: 'ipa',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'Lager',
      text: 'Lager',
      value: 'lager',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'Ale',
      text: 'Ale',
      value: 'ale',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'Pilsner',
      text: 'Pilsner',
      value: 'pilsner',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'Stout',
      text: 'Stout',
      value: 'stout',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'Sour',
      text: 'Sour',
      value: 'sour',
      label: { color: 'black', empty: true, circular: true },
    },
  ]

  const sortOptions = [
    {
      key: 'none',
      text: 'none',
      value: 'none',
      content: 'None',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'abv ascending',
      text: 'abv ascending',
      value: 'abv ascending',
      content: 'ABV Ascending',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'abv descending',
      text: 'abv descending',
      value: 'abv descending',
      content: 'ABV Descending',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'reviews ascending',
      text: 'reviews ascending',
      value: 'reviews ascending',
      content: 'Reviews Ascending',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'reviews descending',
      text: 'reviews descending',
      value: 'reviews descending',
      content: 'Reviews Descending',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'likes ascending',
      text: 'likes ascending',
      value: 'likes ascending',
      content: 'Likes Ascending',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'likes descending',
      text: 'likes descending',
      value: 'likes descending',
      content: 'Likes Descending',
      label: { color: 'black', empty: true, circular: true },
    }
  ]
  
  const recommendedDrinking = [
    {
      key: 'none',
      text: 'none',
      value: 'none',
      content: 'none',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'all year',
      text: 'all year',
      value: 'all year',
      content: 'all year',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'beach',
      text: 'beach',
      value: 'beach',
      content: 'beach',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'grilling',
      text: 'grilling',
      value: 'grilling',
      content: 'grilling',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'baseball',
      text: 'baseball',
      value: 'baseball',
      content: 'baseball',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'winter',
      text: 'winter',
      value: 'winter',
      content: 'winter',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'outdoors',
      text: 'outdoors',
      value: 'outdoors',
      content: 'outdoors',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      key: 'summer',
      text: 'summer',
      value: 'summer',
      content: 'summer',
      label: { color: 'black', empty: true, circular: true },
    }
  ]
       
  return(
    <>
        {/* <label>Search by Recommended Drinking</label>
        <input onChange={props.searchHandler} value={props.search} type="text" placeholder="Search" /> */}
       
        <Header as='h4'>
          <Header.Content inline>
            Filter beers{' '}
            <Dropdown
              inline
              onChange={props.filterChange}
             
              header='Select Style Option'
              options={filterOptions}
              defaultValue=''
            />
          </Header.Content>
        </Header>
    
        <Header as='h4'>
            <Header.Content inline>
              Sort beers by {' '}
              <Dropdown
                inline
                onChange={props.sortHandler}
                
                header='Select Sort Option'
                options={sortOptions}
                defaultValue=''
              />
            </Header.Content>
          </Header>
        
          <Header as='h4'>
            <Header.Content >
              View beers by recommended drinking {' '}
              <Dropdown
                inline
                onChange={props.searchHandler}
                value={props.search}
                
                header='Select category'
                options={recommendedDrinking}
                defaultValue=''
              />
            </Header.Content>
          </Header>
      </>
    )
}

export default Filter 
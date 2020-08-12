import React from 'react'

const Filter = (props) =>{
    return(
      <div>
        <label>Search by Recommended Drinking</label>
        <input onChange={props.searchHandler} value={props.search} type="text" placeholder="Search" />

        <label for="filter">Filter Beers</label>
          <select onChange={props.filterChange} name="filter" id="filter">
            <option value="none">None</option>
            <option value="lager">Lager</option>
            <option value="ipa">IPA</option>
            <option value="ale">Ale</option>
            <option value="pilsner">Pilsner</option>
            <option value="stout">Stout</option>
            <option value="sour">Sour</option>
          </select>
        
        <label for="sort">Sort</label>
          <select onChange={props.sortHandler} name="sort" id="sort">
            <option value="none">None</option>
            <option value="abv asc">ABV Ascending</option>
            <option value="abv desc">ABV Desednding</option>
            <option value="reviews asc">Reviews Ascending</option>
            <option value="reviews desc">Reviews Descending</option>
            <option value="likes asc">Likes Ascending</option>
            <option value="likes desc">Likes Descending</option>
            {/* <option value="rating asc">Average Rating Ascending</option>
            <option value="rating desc">Average Rating Descending</option> */}
          </select>
      </div>
    )
}

export default Filter 
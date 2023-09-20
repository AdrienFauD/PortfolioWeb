import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import '../shop/css/filtermenu.css'

export default function FilterMenu() {
  const [minPrice, setMinPrice] = useState(null)
  const [maxPrice, setMaxPrice] = useState(null)
  useEffect(() => {
    setMinPrice(0)
    setMaxPrice(1500)
  }, [])

  const [filterSearchParams, setFilterSearchParams] = useSearchParams()
  const params = Object.fromEntries([...filterSearchParams])

  const handleUpdateMin = (e) => {
    const value = parseInt(e.target.value)
    if (value > maxPrice) setMaxPrice(value)
    setMinPrice(value)
  }
  const handleUpdateMax = (e) => {
    const value = parseInt(e.target.value)
    if (value < minPrice) setMinPrice(value)
    setMaxPrice(value)
  }

  const handlePriceFilter = (e, filterParam) => {
    params[filterParam] = e.target.value
  }

  const handleSetFilterParam = () => {
    setFilterSearchParams(params)
  }

  return (
    <div className="filter-menu">
      <p>Sort by price : </p>
      <div className="filter-menu-radio">
        <input
          type="radio"
          name="searchorder"
          value={"DSC"}
          onChange={(e) => handlePriceFilter(e, "dir")}
        />
        <label htmlFor="DSC">Descendant</label>
        <input
          type="radio"
          name="searchorder"
          value={"ASC"}
          onChange={(e) => handlePriceFilter(e, "dir")}
        />
        <label htmlFor="ASC">Ascendant</label>

      </div>

      <div className="filter-menu-slider">
        <input
          className="input-filter-range-from"
          type="range" min={0} max={1500} step={5}
          onChange={(e) => handleUpdateMin(e)}
          value={minPrice}
          onMouseUp={(e) => handlePriceFilter(e, "price_from")}
        />
        <input
          className="input-filter-range-to"
          type="range" min={0} max={1500} step={5}
          value={maxPrice}
          onChange={(e) => handleUpdateMax(e)}
          onMouseUp={(e) => handlePriceFilter(e, "price_to")} />
        <label>{minPrice}€</label>
        <label>{maxPrice}€</label>
        <div className="slider-bar"></div>
      </div>
      <button onClick={(e) => handleSetFilterParam()}>Filter</button>
    </div>
  )
}

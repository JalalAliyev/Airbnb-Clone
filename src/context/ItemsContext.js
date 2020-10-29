import React, {Component, createContext} from 'react'

export const ItemsContext = createContext();
class ItemsContextProvider extends Component {
    state = {
        items: [
            {item1: [
                {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"},
                {location: "Private room in center of London"},
                {title: "Stay at this spacious Edwardian House"},
                {description: "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"},
                {star: 4.73},
                {price: "£30 / night"},
                {total: "£117 total"},
            ]}
        ]
    }
    render() {
        return (
        <ItemsContext.Provider value={{...this.state/* , toggleHeart: this.toggleHeart */}}>
            {this.props.children}
        </ItemsContext.Provider>
    )
}
    }

export default ItemsContextProvider

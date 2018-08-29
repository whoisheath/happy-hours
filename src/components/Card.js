import React, { Component } from 'react';


class Card extends Component {
    render() {
        const { barName, neighborhood, special, id } = this.props;
        let specialsMessage = "Looks like we don't have info on the happy hour special here. Send us a note to have it updated!";

        return (
            <div className="tc bg-navy br3 pa0 dib mw5 ma3 grow white outline">
                <img src={`https://picsum.photos/300/200/?${id}`} alt="bar"/>
                <h2 className="f4">{barName}</h2>
                <h5>Neighborhood: {neighborhood}</h5>
                <p className="f6 pa3 h4">{!special ? specialsMessage : special}</p>
            </div>
        )
    }
}

export default Card;
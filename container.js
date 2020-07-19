import React, { Component } from "react";
import update from "react/lib/update";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Card from "./Card";

const style = {
  width: 400,
};

@DragDropContext(HTML5Backend)
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      cards: [
        {
          id: 11,
          text: "colorado",
        },
        {
          id: 12,
          text: "texas",
        },
        {
          id: 13,
          text: "Florida",
        },
        {
          id: 14,
          text: "louisiana",
        },
        {
          id: 15,
          text: "mississippi",
        },
        {
          id: 16,
          text: "california",
        },
        {
          id: 17,
          text: "washingoton",
        },
      ],
    };
  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState({ dragIndex, hoverIndex });

    this.setState(
      update(this.state, {
        cards: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        },
      })
    );
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        <div>dragIndex: {this.state.dragIndex}</div>
        <div>hoverIndex: {this.state.hoverIndex}</div>
        <div>{JSON.stringify(cards)}</div>
        <div style={style}>
          {cards.map((card, i) => (
            <Card
              key={card.id}
              index={i}
              id={card.id}
              text={card.text}
              moveCard={this.moveCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

import React from "react";
import "./HomeThreeColumns.scss";

function HomeThreeColumns() {
  return (
    <section className="container ">
      <div className="columns">
        <div className="number">10</div>
        <p className="title">ODDANYCH WORKÓW</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut
          nesciunt delectus dolore praesentium distinctio possimus illo.
        </p>
      </div>
      <div className="columns">
        <div className="number">5</div>
        <p className="title">WSPARTYCH ORGANIZACJI</p>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsum
          neque aspernatur exercitationem ipsam voluptas obcaecati suscipit
          eligendi?
        </p>
      </div>
      <div className="columns">
        <div className="number">7</div>
        <p className="title">ZORGANIZOWANYCH ZBIÓREK</p>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nesciunt
          cum omnis non atque quia rem commodi!
        </p>
      </div>
    </section>
  );
}

export default HomeThreeColumns;

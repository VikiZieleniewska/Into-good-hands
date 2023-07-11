import { useEffect, useState } from "react";

import getData from "../../firebase/getData";
import "./AssociatesTableComponent.scss";

function AssociatesTableComponent({ collection }) {
  const [data, setData] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 3;

  useEffect(() => {
    if (!data) {
      getData(collection).then((res) => {
        setData(res.result);
        setTotalPages(Math.ceil(res.result.length / pageSize));
      });
    }
  });

  const buttons = [];
  if (totalPages > 1) {
    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <button
          key={`${collection}-page-button-${i}`}
          className={pageIndex === i ? "secondary-button" : "link-button"}
          onClick={() => setPageIndex(i)}
        >
          {i + 1}
        </button>
      );
    }
  }

  return (
    <div className="table">
      {!data ? (
        <h3>Ładowanie...</h3>
      ) : (
        data
          .slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
          .map((item, index) => {
            return (
              <div key={`item-${index}`} className="table-row">
                <div className="row-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="row-tags">{item.tags}</div>
              </div>
            );
          })
      )}
      <div className="table-pagination">{buttons}</div>
    </div>
  );
}

export default AssociatesTableComponent;

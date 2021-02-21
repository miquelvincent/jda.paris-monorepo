import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  return (
    <div>
      <div>
        <div>
          {articles.map((article, i) => {
            return (
              <React.Fragment key="i">
                <Card
                  article={article}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
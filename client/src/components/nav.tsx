import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
      }
    `}
    render={(data) => (
      <div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">{data.strapiGlobal.siteName}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )}
  />
);

export default Nav;
import React from "react";

const Paginator = (props: {
  postsPerPage: number;
  totalPosts: number;
  paginate: any;
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              className={"page-link"}
              onClick={() => props.paginate(number)}
              href="/#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Paginator;

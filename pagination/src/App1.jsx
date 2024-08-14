import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App1() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    await axios
      .get(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`)
      .then((response) => {
        setProducts(response.data.products);
        setTotalPages(Math.floor(response.data.total / 10));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const selectPageHandler = (selectedPage) => {
    // const maxPage = Math.ceil(products.length / 10);
    // console.log("maxPage", maxPage);
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    )
      setPage(selectedPage);
    console.log(selectedPage);
  };
  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((item) => {
            return (
              <div className="products__single">
                <img
                  src={item.thumbnail}
                  alt=""
                />
                <h4>{item.title}</h4>
              </div>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination__disabled"}
            onClick={() => selectPageHandler(page - 1)}
          >
            ⬅️
          </span>
          {[...Array(totalPages)].map((_, i) => {
            return (
              <span
                key={i}
                onClick={() => selectPageHandler(i + 1)}
                className={page === i + 1 ? "pagination__selected" : ""}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            className={page < totalPages ? "" : "pagination__disabled"}
            onClick={() => selectPageHandler(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}

export default App1;

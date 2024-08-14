import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setTotalPages(response.data.total);
        console.log(totalPages);
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
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };
  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((item) => {
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
          {[...Array(products.length / 10)].map((_, i) => {
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
            className={
              page < products.length / 10 ? "" : "pagination__disabled"
            }
            onClick={() => selectPageHandler(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}

export default App;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation } from "../../../../services/GoodsAPI";
import GoodsItem from "../GoodsItem/GoodsItem";
import styles from "./GoodsData.module.scss";

const GoodsData = () => {
  const [newProduct, setNewProduct] = useState("");
  const { data = [], isError, error, isLoading } = useGetGoodsQuery(10);
  const [addProduct, { isSuccess }] = useAddProductMutation();
  // eslint-disable-next-line no-empty-pattern
  const [deleteProduct, {}] = useDeleteProductMutation();

  const handleAddProduct = async () => {
    if (newProduct) {
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct("");
    }
  };

  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id).unwrap();
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError)
    return (
      <h1>
        <> {error} </>
      </h1>
    );
  return (
    <div className={styles["block"]}>
      <div className={styles["block__head"]}>
        <h1 className={styles["block__heading"]}> goodsAPI </h1>

        <input
          className={styles["block__input"]}
          type="text"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />

        <button className={styles["block__button"]} onClick={handleAddProduct}>
          AddProduct
        </button>

        <p className={styles["block__paragraph"]}>Командуем в терминале: json-server --watch db.json --port 5000</p>

        <ul>
          {data.map((item) => (
            <li className={styles["block__paragraph"]} key={item.id} onClick={() => handleDeleteProduct(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GoodsData;

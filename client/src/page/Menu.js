import React from "react";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function Menu({ className }) {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [isEdit, setEdit] = useState(false);
  const { user, authToken } = useContext(AuthContext);
  const getCategory = async () => {
    await fetch("http://127.0.0.1:8000/api/category/")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => {
        console.log("Error fetching cat:", error);
      });
  };
  const getMenu = async () => {
    await fetch("http://127.0.0.1:8000/api/menu/")
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.log("Error fetching menu:", error);
      });
  };
  const isLoaded = () => {
    return data && category;
  };
  useEffect(() => {
    // Use the fetch API to make a GET request
    getMenu();
    getCategory();
  }, []);
  return (
    <div className={"container"}>
      <h1>Menu</h1>

      {user?.username === "admin" && (
        <>
          <AddMenu category={category} getMenu={getMenu} />
          <button onClick={() => setEdit(!isEdit)}>
            Edit : <strong>{isEdit ? "On" : "Off"}</strong>
          </button>
        </>
      )}
      {isLoaded() ? (
        category.map((cat) => (
          <ListByCategory
            data={data}
            category={cat}
            isEdit={isEdit}
            getMenu={getMenu}
          ></ListByCategory>
        ))
      ) : (
        <h2>Loading .... </h2>
      )}
    </div>
  );
}
export default Menu;

export const ListByCategory = ({ data, category, isEdit, getMenu }) => {
  return (
    <>
      <h4>{category.title}</h4>
      {data.map((item) => {
        if (item.category === category.id)
          return (
            <ul>
              <li key={item.id}>
                {item.title} <strong>Price</strong> : ${item.price}{" "}
                {isEdit && (
                  <>
                    <strong>amount</strong> : {item.inventory}
                  </>
                )}
                <br></br>
                {isEdit && (
                  <>
                    <EditMenu menu={item} getMenu={getMenu} />
                    <DeleteMenu id={item.id} getMenu={getMenu} />
                  </>
                )}
              </li>
            </ul>
          );
      })}
    </>
  );
};

export const EditMenu = ({ menu, getMenu }) => {
  let [isEdit, setEdit] = useState(false);
  let { authToken } = useContext(AuthContext);
  const updateMenu = async (e) => {
    e.preventDefault();

    let response = await fetch(`http://127.0.0.1:8000/api/menu/${menu.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authToken?.access),
      },
      body: JSON.stringify({
        title: e.target.title.value,
        price: e.target.price.value,
        inventory: e.target.amount.value,
        category: menu.category,
      }),
    });
    let data = await response.json();
    console.log(response);

    if (response.status === 200) {
      setEdit(false);
      getMenu();
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <>
      <button onClick={() => setEdit(!isEdit)}>Edit</button>
      {isEdit && (
        <form onSubmit={updateMenu}>
          <label htmlFor="title">title : </label>
          <input type="text" name="title" defaultValue={menu.title} />
          <label htmlFor="price">price</label>
          <input type="text" name="price" defaultValue={menu.price} />
          <label htmlFor="amount">amount</label>
          <input type="text" name="amount" defaultValue={menu.inventory} />
          <input type="submit" defaultValue={"update"}></input>
        </form>
      )}
    </>
  );
};
export const DeleteMenu = ({ id, getMenu }) => {
  let [isConfirmDelete, setConfirmDelete] = useState(false);
  let { authToken } = useContext(AuthContext);

  const deleteMenu = async (e) => {
    e.preventDefault();

    let response = await fetch(`http://127.0.0.1:8000/api/menu/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authToken?.access),
      },
    });

    if (response.status === 204) {
      setConfirmDelete(!isConfirmDelete);
      getMenu();
      console.log("delete success");
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <>
      <button onClick={() => setConfirmDelete(!isConfirmDelete)}>Delete</button>
      {isConfirmDelete && (
        <>
          <p>Are you sure for delete this menu ?</p>
          <button onClick={deleteMenu}>Yes</button>
          <button
            onClick={() => {
              setConfirmDelete(!isConfirmDelete);
            }}
          >
            No
          </button>
        </>
      )}
    </>
  );
};

export const AddMenu = ({ category, getMenu }) => {
  let [newMenu, setNewMenu] = useState({
    title: "",
    price: null,
    inventory: null,
    category: "",
  });
  let { authToken } = useContext(AuthContext);

  const addMenu = async (e) => {
    e.preventDefault();

    let response = await fetch(`http://127.0.0.1:8000/api/menu/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authToken?.access),
      },
      body: JSON.stringify({
        title: newMenu.title,
        price: newMenu.price,
        inventory: newMenu.inventory,
        category: newMenu.category,
      }),
    });
    let data = await response.json();
    console.log(response);

    if (response.status === 201) {
      getMenu();
      setNewMenu({
        ...newMenu,
        title: "",
        price: "",
        inventory: "",
        category: "",
      });
    } else {
      alert("Something went wrong");
    }
  };
  let isValid = () => {
    return (
      newMenu.title &&
      newMenu.price &&
      /^[^\.]+$/.test(newMenu.inventory) &&
      newMenu.category !== ""
    );
  };
  return (
    <>
      <h4>Add menu</h4>

      {category && (
        <form onSubmit={addMenu}>
          <label htmlFor="title">title : </label>
          <input
            type="text"
            name="title"
            value={newMenu.title}
            onChange={(e) => setNewMenu({ ...newMenu, title: e.target.value })}
          />
          <label htmlFor="price">price</label>
          <input
            type="number"
            name="price"
            value={newMenu.price}
            onChange={(e) => setNewMenu({ ...newMenu, price: e.target.value })}
          />
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            name="amount"
            value={newMenu.inventory}
            onChange={(e) =>
              setNewMenu({ ...newMenu, inventory: e.target.value })
            }
          />
          <select
            value={newMenu.category}
            onChange={(e) =>
              setNewMenu({ ...newMenu, category: e.target.value })
            }
          >
            <option value="">Select category</option>
            {category.map((cat) => (
              <option value={cat.id}>{cat.title}</option>
            ))}
          </select>
          <input
            type="submit"
            defaultValue={"update"}
            disabled={!isValid()}
          ></input>
        </form>
      )}
    </>
  );
};

import React, { useEffect, useState } from "react";
import { del, get } from "../../services/apiEndpoint";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import MoonLoader from "react-spinners/ClipLoader";

const AllUsersCard = () => {
  const user = useSelector((state) => state.Auth.user);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = user._id;

  // Get cart items
  useEffect(() => {
    const getAllCartItems = async () => {
      try {
        const response = await get(`/api/user/cart/${id}`);
        if (response.status == 200) {
          setCartItems(response.data.cartItems);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllCartItems();
  }, []);

  //Delete cart items

  const deleteItemFromCart = async (ids) => {
    try {
      const response = await del(`/api/user/cart/item/${ids}/${id}`);
      if (response.status == 200) {
        setCartItems(response.data.fetchRemainingCartItems);
        console.log(response);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Make stripe Payments
  const makePayment = async () => {
    setLoading(true);
    const stripe = await loadStripe(
      "pk_test_51PhnyARr4CnxscyiC7mxEeahErBl7sW2Gr82URoynJXCD2u1wOXy45xR66lGDZWvAdtvGAC5dlarfGeZxYtf1C3Z00DEhGJrgL"
    );

    const body = {
      products: cartItems,
      userId: user._id,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:3000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    if (session.id) {
      setLoading(false);
    }
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
      <div className="relative mb-4 overflow-x-auto shadow-md sm:rounded-lg bg-transparent">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-transparent">
          <thead className="text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-transparent">
            <tr>
              <th scope="col" className="px-6 py-3 text-white">
                Departure Place
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Arrival place
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((currItem) => {
              return (
                <tr key={currItem._id}>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.departurePlace}
                  </td>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.arrivalPlace}
                  </td>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.quantity}
                  </td>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.totalPrice}
                  </td>
                  <td className="px-6 py-4 text-white flex gap-4">
                    <a
                      onClick={() => deleteItemFromCart(currItem._id)}
                      className="font-medium text-red-700 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {loading ? (
        <MoonLoader
          color={"#fff"}
          // loading={loading}
          // cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="ml-4"
        />
      ) : (
        <a
          onClick={makePayment}
          className=" font-medium p-2 bg-[#09131f] rounded-md text-white dark:text-blue-500 hover:underline"
        >
          Checkout
        </a>
      )}
    </>
  );
};

export default AllUsersCard;

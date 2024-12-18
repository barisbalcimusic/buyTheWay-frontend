import { useState } from "react";
import AccountNavigation from "./AccountNavigation";
import { orders, productsInOrder } from "../../data/fakeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  // LOCAL STATES
  const [openOrderId, setOpenOrderId] = useState(null);

  return (
    <div>
      <AccountNavigation />
      <section className="mt-[5vw]">
        <h2 className="text-[5vw] font-bold">Bestellungen</h2>
        <div className="flex flex-col gap-[3vw] mt-[2vw]">
          {/* FAKE DATA FOR TESTING */}
          {orders.map(({ id, date, total }) => (
            <div
              key={id}
              className="w-full shadow-md border-gray-300 border-customBorder rounded-lg bg-gray-100 p-[2vw]"
              onClick={() => setOpenOrderId(openOrderId === id ? null : id)}>
              {/* ACCORDION HEADER (ORDER SUMMARY) */}
              <button className="w-full p-[2vw] text-start">
                <div className="w-full flex font-bold">
                  <span className="w-1/3">Auftragsnr.:</span>
                  <span className="w-1/3">Datum:</span>
                  <span className="w-1/3">Summe:</span>
                </div>
                <div className="w-full flex mt-[1vw]">
                  <span className="w-1/3">{id}</span>
                  <span className="w-1/3">{date}</span>
                  <span className="w-1/3">{total}€</span>
                </div>
              </button>

              {/* ACCORDION CONTENT (ORDER DETAILS)*/}
              {openOrderId === id && (
                <div className="bg-white text-gray-700 p-[2vw] mb-[2vw] rounded-md shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.2)]">
                  <table className="w-full">
                    <thead className="font-bold">
                      <tr className="p-2">
                        <td>Artikelnr.</td>
                        <td>Stückpreis</td>
                        <td>Menge</td>
                      </tr>
                    </thead>
                    {/* FAKE DATA FOR TESTING */}
                    <tbody>
                      {productsInOrder.map((product) => (
                        <tr>
                          <td>{product.id}</td>
                          <td>{product.price}€</td>
                          <td>{product.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="text-center">
                <FontAwesomeIcon
                  className="text-[4vw]"
                  icon={openOrderId === id ? faAngleUp : faAngleDown}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Orders;

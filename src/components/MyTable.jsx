import { useEffect, useState } from "react";
import { MyModal } from "./MyModal";
import PropTypes from "prop-types";

export const MyTable = ({ data = [], update = null, deletefct = null }) => {
  // Attention, pour que notre tableau fonctionne,
  // il faut que tous les objets de la liste aient les mm attributs/propriétés)

  // update est un type {fct, form}

  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setKeys(Object.keys(data[0]));
    }
  }, [data]);

  const handleClickOnUpdate = (product) => {
    update.setUpdateProduct(product);
    document.getElementById("my_modal").showModal();
  };

  return (
    <>
      <h1>Mon tableau</h1>

      <table className="table">
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}
            {(update || deletefct) && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((element, idx) => (
            <tr key={element.id ? element.id : idx}>
              {keys.map((key) => (
                <td key={key}>{element[key]}</td>
              ))}
              <td>
                {update && (
                  <button
                    onClick={() => handleClickOnUpdate(element)}
                    className="btn btn-warning"
                  >
                    Modifier
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {update && <MyModal content={update.form} />}
    </>
  );
};

MyTable.propTypes = {
  data: PropTypes.array.isRequired,
  // update: PropTypes.object
  update: PropTypes.shape({
    fct: PropTypes.func,
    form: PropTypes.func,
  }),
};

import { useEffect, useState } from "react";

export const MyTable = ({ data = [] }) => {
  // Attention, pour que notre tableau fonctionne,
  // il faut que tous les objets de la liste aient les mm attributs/propriétés)

  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setKeys(Object.keys(data[0]));
    }
  }, [data]);

  return (
    <>
      <h1>Mon tableau</h1>

      <table className="table">
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr>
              {keys.map((key) => (
                <td>{element[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

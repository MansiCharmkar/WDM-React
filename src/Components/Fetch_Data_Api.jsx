import { useEffect, useState } from "react";

const Fetch_Data_Api = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await api.json();
      setApiData(data);
      console.log("My Data : ", data);
    };
    fetchDataFromApi();
  }, []);

  return (
    <div>
      {apiData.map((data) => (
        <div
          key={data.id}
          style={{
            backgroundColor: "blue",
            color: "white",
            margin: "0.5rem",
            padding: "0.5rem",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Fetch_Data_Api;

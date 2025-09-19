// Q.1 In a React application, you need to handle a click event on a button that triggers an API call to fetch data. How would you handle this event and ensure that the API call is made only once, even if the user clicks the button multiple times?

// Approach
// Use a state flag (loading or hasFetched) to track whether the API call has already been made.
// Disable the button immediately when the request starts so multiple clicks won’t trigger multiple calls.
// Store the API response in state so that you don’t need to call the API again if data is already fetched.

// import React, { useState } from "react";
// import axios from "axios";

// function FetchButton() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [hasFetched, setHasFetched] = useState(false);

//   const handleClick = async () => {
//     if (hasFetched || loading) return; // Prevent multiple calls
//     setLoading(true);
//     try {
//       const response = await axios.get("https://api.example.com/data");
//       setData(response.data);
//       setHasFetched(true);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div>
//       <button onClick={handleClick} disabled={loading || hasFetched}>
//         {loading ? "Loading..." : hasFetched ? "Data Loaded" : "Fetch Data"}
//       </button>
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </div>
//   );
// }
// export default FetchButton;

// ========================================================================================================================



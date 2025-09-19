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

// Q.2 In a React application, you have a component that displays a list of items. The component receives the list of items as a prop from its parent component. The component also has a button that, when clicked, should filter the list of items based on a specific condition. Write an approach to handle the filtering of the list items within the component, considering the use of props and state.

// Fine Answer (Exam-Style)
// I will receive the list of items from the parent component as a prop. Inside the child component, I will maintain a local state to store the filtered items. When the user clicks the button, I will apply the filter condition on the props data and update the state with the filtered list. The component will then render the filtered list by mapping over the state. This way, props always keep the original data intact, while state manages the filtered data.

// import React, { useState } from "react";

// function ItemList({ items }) {
//   const [filteredItems, setFilteredItems] = useState(items);
//   const handleFilter = () => {
//     const result = items.filter(item => item.active);
//     setFilteredItems(result);
//   };
//   return (
//     <div>
//       <button onClick={handleFilter}>Filter Active Items</button>
//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ItemList;

// ======================================================================================================================

// Q.3 Design a JavaScript function that uses asynchronous programming to fetch data from two different APIs and then combines the results into a single array. The first API returns an array of user IDs, and the second API returns an array of user objects with IDs as keys. Assume that the APIs have the following interfaces:

// Function to fetch and combine user data
// async function fetchUsers() {
//   try {
//     // Fetch both APIs in parallel
//     const [userIds, userObjects] = await Promise.all([
//       getUserIDs(),
//       getUserObjects()
//     ]);

//     // Merge user IDs with user details
//     const result = userIds.map(id => {
//       const user = userObjects.find(u => u.id === id);
//       return {
//         id,
//         name: user ? user.name : null,
//         email: user ? user.email : null
//       };
//     });

//     return result;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// }

// ================================================================================================================
// Q.4 Create a JavaScript function that takes a string as an input and creates a new HTML paragraph element with the input string as its text content. The function should also add an event listener to the paragraph element that logs a message to the console when clicked. The message should include the text content of the paragraph element.

//function createParagraph(str) {
  // Create a new paragraph element
//   const paragraph = document.createElement("p");
//   paragraph.textContent = str;

//   // Add event listener
//   paragraph.addEventListener("click", () => {
//     console.log(`You clicked: ${paragraph.textContent}`);
//   });

//   // Return the created paragraph
//   return paragraph;
// }

// // Example usage:
// const para = createParagraph("Hello World");
// document.body.appendChild(para);

// Q.5 Design a JavaScript function that uses asynchronous programming to fetch data from two different APIs and then combines the results into a single array.
// getUserIds(): Promise<Array<number>> → returns an array of IDs
// getUserObjects(): Promise<{ id:number, name:string, email:string }[]> → returns an array of user objects
// 👉 Function should return a Promise that resolves to an array of user objects with {id, name, email}.
// async function fetchUsers() {
//   try {
//     // Fetch both APIs in parallel
//     const [userIds, userObjects] = await Promise.all([
//       getUserIds(),
//       getUserObjects()
//     ]);
//     // Merge user IDs with corresponding objects
//     const result = userIds.map(id => {
//       const user = userObjects.find(u => u.id === id);
//       return {
//         id,
//         name: user ? user.name : null,
//         email: user ? user.email : null
//       };
//     });
//     return result; // resolves to final array
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// }

//==================================================================================================================

// Q.6 In the context of web development, semantic HTML plays a crucial role in improving accessibility and SEO. Consider a scenario where you are asked to create an online article platform that displays blog posts related to various topics, such as health, technology, and travel. Your task is to use semantic HTML elements to structure the layout of a single blog post effectively. Discuss what elements you would use for the title, content section, author information, and related keywords. Explain why each element is semantically appropriate for its purpose in this context with respect to usability and search engine indexing.

{/* <article>
  <!-- Title -->
  <header>
    <h1>10 Tips for Staying Healthy While Traveling</h1>
    <p><time datetime="2025-09-19">September 19, 2025</time></p>
  </header>

  <!-- Author Information -->
  <section>
    <address>Written by <a href="/authors/john-doe">John Doe</a></address>
  </section>

  <!-- Main Blog Content -->
  <section>
    <p>Traveling can be exhausting, but following these health tips can help you stay energized and safe...</p>
  </section>

  <!-- Related Keywords -->
  <footer>
    <p>Tags: <span>Health</span>, <span>Travel</span>, <span>Wellness</span></p>
  </footer>
</article> */}

//=====================================================================================================================

//Q.7 Unique Characters
// You are given a string str.
// Your task is to write a function uniqueChars(str) that returns a new string containing only the unique characters of the input string.

// function uniqueChars(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (result.indexOf(str[i]) === -1) {
//       result += str[i];
//     }
//   }
//   return result;
// }

// ====================================================================================================================
// Q.8 









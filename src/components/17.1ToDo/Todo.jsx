// import { useState } from "react";

// const Todo = () => {
//   const [tasks, setTask] = useState([]);
//   const [addTask, setAddTask] = useState("");
//   const ToAddHandel = (e) => {
//     e.preventDefault();
//     if (addTask !== "") {
//       const data = localStorage.setItem(addTask, JSON.stringify(false));
//       console.log(data);

//       setTask([...tasks, { task: addTask, completed: false }]);
//       setAddTask("");
//     }
//   };
//   return (
//     <>
//       <h1> To do list </h1>
//       <form onSubmit={ToAddHandel}>
//         <label> Add To do</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setAddTask(e.target.value);
//           }}
//         />
//         <button type="submit"> Add</button>
//       </form>
//       {/* i want to print the data in list  */}
//       <ul>
//         {tasks.map((task) => {
//           return (
//             <>
//               <li
//                 id={task.task}
//                 onClick={(e) => {
//                   console.log(localStorage.getItem(e.target.id));
//                   localStorage.setItem(
//                     e.target.id,
//                     JSON.stringify(!localStorage.getItem(e.target.id))
//                   );
//                   //   console.log(!localStorage.getItem(e.target.id), "hhhhe");
//                 }}
//               >
//                 {task.task}
//               </li>
//             </>
//           );
//         })}
//       </ul>
//     </>
//   );
// };
// export default Todo;

import { Routes, Route } from "react-router-dom";
import SessionDialog from './login2.jsx'; // ✅ Corrected `from`, not `form`

function App() {
  return (
    <>
      <SessionDialog />
    </>
  );

  // To use routes instead:
  // return (
  //   <Routes>
  //     <Route path="/" element={<LoginForm />} />
  //     <Route path="/session-expired" element={<SessionDialog />} />
  //   </Routes>
  // );
}

export default App;















// import { Routes, Route } from "react-router-dom";
// import LoginForm from "./LoginForm";
// // import Simple from "./simple"; // assuming your `/simple` route

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<LoginForm />} />
//       {/* <Route path="/simple" element={<Simple />} /> */}
//     </Routes>
//   );
// }

// export default App;

import { Link, Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>The Welcome Page.</h1>
      <Link style={{ display: "block" }} to="new-user">
        New User
      </Link>

      <Link to="/welcome/hello">Hello</Link>

      <Routes>
        <Route path="hello" element={<p>Hello Route!!!</p>} />
      </Routes>
    </>
  );
};

export default Welcome;

import React, { useEffect } from "react";
import Layout from "./hoc/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import Quiz from "./containers/Quiz/Quiz";
import Home from "./components/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import Logout from "./components/Logout/Logout";
import { autoLogin } from "./redux/actions/auth";

// yarn upgrade-interactive --latest
// yarn add -D [package]
const App = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  let routes = (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/quiz-list" element={<QuizList />} />
      <Route path="/" element={<Home />} />
      {/*<Route path="/" element={} />*/}
      {/*<Navigate to="/" />*/}
    </Routes>
  );

  if (token) {
    routes = (
      <Routes>
        <Route path="/quiz-creator" element={<QuizCreator />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/quiz-list" element={<QuizList />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return <Layout>{routes}</Layout>;
};

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     this.props.autoLogin();
//   }
//
//   render() {
//     let routes = (
//       <Routes>
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/quiz/:id" element={<Quiz />} />
//         <Route path="/quiz-list" element={<QuizList />} />
//         <Route path="/" element={<Home />} />
//         {/*<Route path="/" element={} />*/}
//         {/*<Navigate to="/" />*/}
//       </Routes>
//     );
//
//     if (this.props.isAuth) {
//       routes = (
//         <Routes>
//           <Route path="/quiz-creator" element={<QuizCreator />} />
//           <Route path="/quiz/:id" element={<Quiz />} />
//           <Route path="/quiz-list" element={<QuizList />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/auth" element={<Navigate to="/" />} />
//         </Routes>
//       );
//     }
//
//     return <Layout>{routes}</Layout>;
//   }
// }
//
// function mapStateToProps(state) {
//   return {
//     isAuth: !!state.auth.token,
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     autoLogin: () => dispatch(autoLogin()),
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

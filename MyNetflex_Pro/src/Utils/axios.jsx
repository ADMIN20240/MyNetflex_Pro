import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;


// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
// });

// export default instance;

// Utils:
// The utils folder is the place for utility functions that can be reused across your application

// Tests:
// Include a separate tests folder for your unit and integration tests. This ensures code quality and prevents regressions

// Services:
// The services folder can hold complex business logic that isn't directly tied to a specific endpoint. This helps keep controllers clean and focused.

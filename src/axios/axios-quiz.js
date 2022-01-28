import axios from "axios";

export default axios.create({
  baseURL:
    "https://quiz-project-fb1e2-default-rtdb.europe-west1.firebasedatabase.app/",
});

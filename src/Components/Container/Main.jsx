import axios from "axios";

export default function MainContainer() {
  axios
    .get("http://127.0.0.1:7000/")
    .then(function (res) {
      console.log(res);
    })
    .catch((e) => console.log(e));
  return (
    <>
      <div>
        <h3>MAin</h3>
      </div>
    </>
  );
}

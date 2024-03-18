import { useState } from "react";
import axios from "axios";

function App() {
  const [Img, setImg] = useState();
  const [response, setResponse] = useState(null);
  const execute = async () => {
    // let res = await axios({
    //   method: "post",
    //   url: process.env.BACKEND_URL,
    //   data: Img,
    // });
    // console.log(Img);

    let formData = new FormData();
    formData.append("file", Img);

    console.log(`type of formdata ${formData} type of image ${Img}`);
    // const value = Img;
    axios
      .post(process.env.BACKEND_URL, formData)
      .then((response) => {
        console.log("lucky");
        console.log(response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        console.log("error", error); //handle error
      });
  };

  const storeImg = (e) => {
    // console.log(e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]));
    const value = e.target.files[0];
    setImg(value);
  };
  const a = process.env.BACKEND_URL;
  // console.log(a);
  return (
    <>
      <input
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        onChange={(e) => {
          storeImg(e);
        }}
      />
      <button
        onClick={() => {
          execute();
        }}
      >
        CLick here
      </button>
      <br />
      <div> Class : {response ? response.class : null}</div>
      <div> Confidence : {response ? response.confidence : null}</div>
    </>
  );
}

export default App;

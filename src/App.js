import "./App.css";
import ImageUploader from "./img_quality";
import {useState} from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  function calculateProgress(){
    const fields = [document.getElementById("cname"),
      document.getElementById("prodname"),
      document.getElementById("price"),
      document.getElementById("mno"),
      document.getElementById("war"),
      document.getElementById("des")
    ];
    let totalFields = fields.length + 4; // 1 for images
    let filledFields = 0;

    for (const field of fields) {
      if (field.value.trim().length > 0) filledFields++;
    }
    const uploadImageInput = document.getElementById("images");
    // Calculate progress for images
    if(uploadImageInput.files.length<=4)filledFields += uploadImageInput.files.length;
    else filledFields += 4;

    return (filledFields / totalFields) * 100;
  };
  const updateProgress = () => {
    const progress = calculateProgress();
    setProgress(progress);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateProgress();
    console.log("Product submitted:", {
      CompanyName: document.getElementById("cname").value,
      ProductName: document.getElementById("prodname").value,
      Price: document.getElementById("price").value,
      ModelNumber: document.getElementById("mno").value,
      Warranty: document.getElementById("war").value,
      UploadImages: Array.from(document.getElementById("images").files),
      Description: document.getElementById("des").value
    });
  };

  return (
      <div className="App">
        <h1>Product Details</h1>
        <fieldset> <br/>
          <form action="#" method="get" onSubmit={handleSubmit}>
            <label>Product Category</label>
            <select name="select" id="select">
              <option value="" disabled selected>
                Select your Ans
              </option>
              <optgroup  label="Categories">
                <option value="1">Mobile</option>
                <option value="2">Refrigerator</option>
                <option value="3">Laptop</option>
                <option value="4">Television</option>
                <option value="5">Air Conditioner</option>
              </optgroup>
            </select>
            <br /><br />

            <label for="cname">Company Name*</label>
            <input
                type="text"
                name="cname"
                id="cname"
                placeholder="Enter Company Name"
                required
            />
            <br /><br />
            <label for="prodname">Product Name* </label>
            <input
                type="text"
                name="prodname"
                id="prodname"
                placeholder="Enter Product Name"
                required
            />
            <br /><br />
            <label for="price">Price* </label>
            <input
                type="text"
                name="price"
                id="price"
                placeholder="Enter Price"
                required
            />
            <br /><br />
            <label for="mno">Model Number </label>
            <input
                type="text"
                name="mno"
                id="mno"
                placeholder="Enter Model Number"
            />
            <br /><br />
            <label for="war">Warranty </label>
            <input
                type="text"
                name="war"
                id="war"
                placeholder="Enter Warranty"
            />
            <br /><br />
            <label for="des">Description</label> <br/>
            <textarea
                name="des"
                id="des"
                cols="30"
                rows="10"
                placeholder="Enter Description"
            ></textarea>
            <br /><br />
            <label for="aip">Additional Items Provided</label>
            <br />
            <textarea
                name="aip"
                id="aip"
                cols="30"
                rows="10"
                placeholder="Enter Additional Items"
            ></textarea>
            <br /><br />

            <ImageUploader/>
            <br /><br />
            <label>Submit OR Reset</label>
            <br />
            <button type="reset" value="reset">
              Reset
            </button>
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
          <div id="progress-bar" style={{ width: `${progress}%`,height: '10px' }}></div>
          <span id="progress-text">{progress.toFixed(2)}%</span>
        </fieldset>
      </div>
  );
}

export default App;

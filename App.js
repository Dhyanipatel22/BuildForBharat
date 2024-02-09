// App.js 
  
import "./App.css"; 
import ImageUploader from "./img_quality";
  
function App() {
    return ( 
        <div className="App"> 
            <h1>Product Details</h1> 
            <fieldset> <br/>
                <form action="#" method="get"> 
                <label>Product Category*</label> 
                    <select name="select" id="select" required> 
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
                    <label for="mno">Model Number* </label> 
                    <input 
                        type="text"
                        name="mno"
                        id="mno"
                        placeholder="Enter Model Number"
                        required 
                    /> 
                    <br /><br /> 
                    <label for="war">Warranty* </label> 
                    <input 
                        type="text"
                        name="war"
                        id="war"
                        placeholder="Enter Warranty"
                        required 
                    /> 
                    <br /><br /> 
                    <label for="des">Description</label> <br/>
                    <textarea 
                        name="des"
                        id="des"
                        cols="15"
                        rows="2"
                        placeholder="Enter Description"
                        required 
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
                        required 
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
            </fieldset> 
        </div> 
    ); 
} 
  
export default App;



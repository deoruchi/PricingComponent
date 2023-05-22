import { useState } from "react";
import "./style.css";
export default function Card(props) {
  const [val, setVal] = useState(16);

  function alertFucntion() {
    alert("Your trail Has been started");
  }
  return (
    <main class={`card ${props.theme ? "card3" : ""}`} id="cardi">
      <div class="adjust">
        <h5 class="parastyle pageview">100k Pageviews</h5>
        <p class="parastyle desktop">
          <strong>
            <span id="price2" class="change">
              ${val}.00
            </span>
          </strong>
          /month
        </p>
      </div>

      <div class="input-range">
        <input
          type="range"
          min="0"
          max="100"
          id="rangeinput"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <p class="parastyle mobile">
          <strong>
            <span id="price" class="change">
              ${val}.00
            </span>
          </strong>
          /month
        </p>
      </div>

      <div class="style-bills parastyle">
        <p class="parastyle">Monthly Billing </p>

        <label class="switch">
          <input type="checkbox"></input>
          <span class="slider round"></span>
        </label>

        <p class="parastyle">Yearly Billing </p>

        <span class="discount d">25% discount</span>
        <span class="discount m">-25%</span>
      </div>

      <hr></hr>
      <div class="container1">
        <ul class="parastyle list-style">
          <li>Unlimited websites </li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>

        <button class="buttony" onclick={alertFucntion}>
          Start my Trail
        </button>
      </div>
    </main>
  );
}

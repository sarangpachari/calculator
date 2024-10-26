import "./App.css";

function App() {
  let resultVal = null;
  let resultGot = false;

  const numClicked = (val) => {
    let num = val;

    let resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.value += num;

    resultVal = resultDisplay.value;
  };



  const result = () => {
    let result = eval(resultVal);
resultGot=true
  
    document.getElementById("resultDisplay").value = result;
  
    
    setTimeout(() => {
      document.getElementById("resultDisplay").value = "";
      resultVal = null;
    }, 3000); 
  };

  const clearBtnClicked = () => {
    document.getElementById("resultDisplay").value = "";
    resultVal = null;
  };




const removeCharacter = () => {
  let resultDisplay = document.getElementById("resultDisplay");
  resultDisplay.value = resultDisplay.value.substring(
    0,
    resultDisplay.value.length - 1
  );
  if (resultDisplay.value.length === 0) {
    resultVal = null;
  } else {
    resultVal = resultDisplay.value;
  }
};



  return (
    <>
      <div className="h-lvh flex bg-black flex-col justify-center items-center">
        <div className="flex flex-col gap-10 bg-slate-900 p-5 rounded-3xl">
          {/* HEADING */}
          <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-white font-extralight">Calculator</h1>
          </div>
          {/* DISPLAY OF CALCULATOR */}
          <div className="">
            <input
              id="resultDisplay"
              type="text"
              placeholder="0"
              className="text-right px-4 py-2 w-full text-3xl rounded-md text-slate-900"
            />
          </div>
          {/*CALCULATION BUTTONS */}
          <div className="flex flex-col gap-5 ">
            {/* CLEAR AND BACKSPACE BUTTON */}
            <div className="flex justify-between">
              <button onClick={removeCharacter} className="bg-blue-950 py-3 px-10 text-2xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all ">Backspace</button>
              <button
                id="clearBtn"
                onClick={clearBtnClicked}
                className="bg-blue-950 py-3 px-10 text-2xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                C
              </button>
            </div>
            {/* ROW 1 */}
            <div className="flex justify-between items-center">
              <button
                id="numBtn"
                onClick={() => numClicked("7")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                7
              </button>
              <button
                id="numBtn"
                onClick={() => numClicked("8")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                8
              </button>
              <button
                id="numBtn"
                onClick={() => numClicked("9")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                9
              </button>
              <button
                id="clearBtn"
                onClick={() => numClicked("*")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                *
              </button>
            </div>
            {/* ROW 2 */}
            <div className="flex justify-between items-center">
              <button
                id="numBtn"
                onClick={() => numClicked("4")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                4
              </button>
              <button
                id="numBtn"
                onClick={() => numClicked("5")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                5
              </button>
              <button
                id="numBtn"
                onClick={() => numClicked("6")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                6
              </button>
              <button
                id="clearBtn"
                onClick={() => numClicked("-")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                -
              </button>
            </div>
            {/* ROW 3 */}
            <div className="flex justify-between items-center">
              <button
                id="numBtn"
                onClick={() => numClicked("1")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                1
              </button>
              <button
                id="numBtn"
                onClick={() => numClicked("2")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                2
              </button>
              <button
                id="numBtn"
                onClick={() => numClicked("3")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                3
              </button>
              <button
                id="clearBtn"
                onClick={() => numClicked("+")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                +
              </button>
            </div>
            {/* ROW 4 */}
            <div className="flex justify-between items-center">
              <button
                id="numBtn"
                onClick={() => numClicked(".")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                .
              </button>
              <button
                id="numBtn"
                onClick={() => numClicked("0")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                0
              </button>
              <button
                id="numBtn"
                onClick={() => numClicked("/")}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                /
              </button>
              <button
                id="clearBtn"
                onClick={result}
                className="bg-blue-950 py-3 px-7 text-3xl rounded-full text-white font-semibold hover:bg-blue-500 hover:scale-90 transition-all "
              >
                =
              </button>
            </div>
          </div>
          <div className="text-center">
          <h1 className="text-blue-300 font-thin text-sm">Copyright &copy; Designed and Developed by Sarang P Achari</h1>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcActions } from "../store/calc";
import "./calculator.css";

const Calculator = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);

  const display = (value) => {
    dispatch(calcActions.display(value));
  };
  const calculate = () => {
    dispatch(calcActions.calculate());
  };
  const backSpace = () => {
    dispatch(calcActions.backSpace());
  };
  const clear = () => {
    dispatch(calcActions.clear());
  };
  const square = () => {
    dispatch(calcActions.square());
  };
  const squareRoot = () => {
    dispatch(calcActions.squareRoot());
  };
  const cube = () => {
    dispatch(calcActions.cube());
  };
  const cubeRoot = () => {
    dispatch(calcActions.cubeRoot());
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="container-2 p-3 mb-5 mt-3 bg-white">
          <h3 className="heading">Calculator</h3>
          <table className="table">
            <tr>
              <td colSpan="4">
                <input type="text" placeholder="0" className="" value={input} />
              </td>
            </tr>

            <tr>
              <td className="p-2"></td>
            </tr>

            <tr>
              <td colSpan="2">
                <button className="red-bg" onClick={clear}>
                  CLEAR
                </button>
              </td>
              <td colSpan="2">
                <button onClick={backSpace}>&#8592;</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="operator" onClick={square}>
                  x<sup>2</sup>
                </button>
              </td>
              <td>
                <button className="operator" onClick={squareRoot}>
                  &#8730;x
                </button>
              </td>
              <td>
                <button className="operator" onClick={cube}>
                  x<sup>3</sup>
                </button>
              </td>
              <td>
                <button className="operator" onClick={cubeRoot}>
                  &#8731;x
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button
                  onClick={() => {
                    display("1");
                  }}
                >
                  1
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    display("2");
                  }}
                >
                  2
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    display("3");
                  }}
                >
                  3
                </button>
              </td>
              <td>
                <button
                  className="operator"
                  onClick={() => {
                    display("/");
                  }}
                >
                  &#247;
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    display("4");
                  }}
                >
                  4
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    display("5");
                  }}
                >
                  5
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    display("6");
                  }}
                >
                  6
                </button>
              </td>
              <td>
                <button
                  className="operator"
                  onClick={() => {
                    display("-");
                  }}
                >
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    display("7");
                  }}
                >
                  7
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    display("8");
                  }}
                >
                  8
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    display("9");
                  }}
                >
                  9
                </button>
              </td>
              <td>
                <button
                  className="operator"
                  onClick={() => {
                    display("+");
                  }}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    display(".");
                  }}
                >
                  .
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    display("0");
                  }}
                >
                  0
                </button>
              </td>
              <td>
                <button className="answer" onClick={calculate}>
                  =
                </button>
              </td>
              <td>
                <button
                  className="operator"
                  onClick={() => {
                    display("*");
                  }}
                >
                  &#215;
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button
                  onClick={() => {
                    display("(");
                  }}
                >
                  (
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    display(")");
                  }}
                >
                  )
                </button>
              </td>
              <td>
                <button>x</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

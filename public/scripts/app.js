'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    //state is an object that allows data to change
    //and re-render components
    //we set the default state in the constructor.
    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addOne = _this.addOne.bind(_this);
        _this.subOne = _this.subOne.bind(_this);
        _this.resetCount = _this.resetCount.bind(_this);

        //define default state of component.
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'addOne',
        value: function addOne() {
            //this.setState() is a function that requires a function that
            //returns a new state object. Upon assigning the new state object
            //the component re-renders.
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
            //setState() method does not override state, only injects changed props.
        }
    }, {
        key: 'resetCount',
        value: function resetCount() {
            var _this2 = this;

            this.setState(function () {

                //return an object to update the state object and reRender the component.
                //setState does not need an argument since it's not
                //referencing the current count of the component,
                //its only assigning/resetting it to 0, regardless of what it is.
                return {
                    count: prevState.count = 0
                };
            });
            //you can use two setStates in conjunction ONLY
            //if you reference the previous state as an arg
            //as it is batched async by react
            this.setState(function (prevState) {
                _this2.prevState.count + 1;
            });
        }
    }, {
        key: 'subOne',
        value: function subOne() {
            //this.setState calls are async.
            //react's effeciency batches setState() simulatenouesly,
            //making it impossible to use setState in a linear way.
            //unless you pass in an argument


            this.setState(function (prevState) {
                return {
                    count: prevState.count <= 0 ? prevState.count = 0 : prevState.count - 1

                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count:',
                    this.state.count,
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: this.addOne },
                    ' +1 '
                ),
                React.createElement(
                    'button',
                    { onClick: this.subOne },
                    ' -1 '
                ),
                React.createElement(
                    'button',
                    { onClick: this.resetCount },
                    ' reset '
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// let count = 0;
// let someId = 'javaScriptVar-forID'
// let subId = 'subId';

// //modified data does not automatically re-render the template.
// //Therefore having the template nested within a function
// //that is called everytime a piece of data changes is the solution.

// const addOne = () => {
//     count++;
//     // console.log('addOne', count);
//     renderCounterApp();
// };
// const subOne = () => {
//     count > 0 && count--;
//     // console.log('subOne');

//     renderCounterApp();
// };
// const resetCount = () => {
//     count = 0;
//     renderCounterApp();
// };


// //challenge make button = -1 = setup minusOne function adn register -log "minusOne"
// //make reset button 'reset' - setup reset function - log 'reset' 


// const appRoot = document.getElementById("app");


// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//           <h1>
//               Count: {count}
//           </h1>
//           <button id = {someId} className = "button" onClick = { addOne }>
//               +1
//           </button>
//           <button id = {subId} className = "subButton" onClick = { subOne }>
//               -1
//           </button>
//           <button id = {someId} className = "button" onClick = { resetCount }>
//               Reset
//           </button>
//         </div>
//       );

//       ReactDOM.render(
//         // indecisonTemplate,
//         // templateTwo,
//         templateThree,
//         appRoot
//     );
// };

// renderCounterApp();

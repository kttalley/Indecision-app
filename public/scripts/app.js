'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityComponent = function (_React$Component) {
    _inherits(VisibilityComponent, _React$Component);

    function VisibilityComponent(props) {
        _classCallCheck(this, VisibilityComponent);

        var _this = _possibleConstructorReturn(this, (VisibilityComponent.__proto__ || Object.getPrototypeOf(VisibilityComponent)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(VisibilityComponent, [{
        key: 'handleToggleVisibility',
        value: function handleToggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: prevState.visibility ? prevState.visibility = false : prevState.visibility = true
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
                    ' Visibility Toggle Component '
                ),
                !this.state.visibility && React.createElement(
                    'button',
                    { onClick: this.handleToggleVisibility },
                    'Reveal the TROOF'
                ),
                this.state.visibility && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        ' This app sux tho '
                    ),
                    React.createElement(
                        'button',
                        { onClick: this.handleToggleVisibility },
                        ' Hide that shit '
                    )
                )
            );
        }
    }]);

    return VisibilityComponent;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityComponent, null), document.getElementById('app'));

// // const appTitle = "Visibility Toggle";
// let buttonTitle  = "REVEAL THE TROOF"; 
// let visible = false;
// //let upper = true;
// const buttonPlacer = () => {
//     if (buttonTitle.length > 14){

//     }
// }

// const revealButton = () => {
// //    visible ? visible === true : visibile === false;
//     if(visible === false){
//         visible = true;
//         upper = false;
//         buttonTitle = 'hide that shit bro';
//     } else { 
//         visible = false;
//         upper = true;
//         buttonTitle = "REVEAL THE TROOF";
//     }
//     renderTemplate();
// }
// const renderTemplate = () => {
//     const template = (
//         <div>
//             <h1>{appTitle}</h1>
//             {upper && <button onClick = {revealButton}> {buttonTitle}</button>}
//             {visible && <div>
//                 <p>This app sucks tho. </p>
//                  <button onClick = {revealButton}> {buttonTitle} </button>
//             </div>} 
//         </div>
//     );

//     ReactDOM.render(
//         template,
//         appRoot
//     );
// };


// const appRoot = document.getElementById('app');
// renderTemplate();

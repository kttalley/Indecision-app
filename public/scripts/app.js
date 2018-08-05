'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const obj = {
//     name: 'Vikram',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind(obj);


// console.log(getName());

// stateless functional component


var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    //handleDeleteOptions


    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {

            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter a valid item to the list.';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This item has already been added to the list.';
            }
            this.setState(function (prevState) {
                // prevState.options.push(option); dont modify array
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'IndecisionApp';
            var subTitle = 'Put your life in the hands of a computerrrr';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOptions, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defualtProps = {
    options: []

    // Setup options prop for Options component
    // Render the length of the array

    // class Header extends React.Component {
    //     render() {

    //         return (
    //             <div>
    //                 <h1>{this.props.title} </h1>
    //                 <h2>{this.props.subTitle}</h2>
    //             </div>
    //         )
    //     }
    // }
};var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};
//default props
Header.defualtProps = {
    title: 'Some default',
    subtitle: 'P'

    //class component
    // class Action extends React.Component {
    //     render() {
    //         return (
    //             <div>
    //                 <button 
    //                     onClick = {this.props.handlePick}
    //                     disabled = {!this.props.hasOptions}
    //                 > 
    //                     What should I do next?
    //                 </button>
    //             </div>
    //         );
    //     }
    // }
};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions

            },
            'What should I do next?'
        )
    );
};

// class Options extends React.Component {
//     render() {
//        return (
//            <div>
//            {
//             this.props.options.map((option) => <Option key={option} optionText={option} />)
//           }
//            <button onClick = {this.props.handleDeleteOptions}> Clear list. </button>
//            </div>
//        );
//     }
// }
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        }),
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Clear list.'
        )
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                <p>{this.props.optionText}</p>
//             </div>
//         );
//     }

// }
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            null,
            props.optionText + '          ',
            React.createElement(
                'button',
                { onClick: function onClick(e) {
                        props.handleDeleteOption(props.optionText);
                    } },
                'Remove'
            )
        )
    );
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.onFormSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);
//stateless functional component


var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            ' Name: ',
            props.name,
            ' '
        ),
        React.createElement(
            'p',
            null,
            ' Age:',
            props.age,
            ' '
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, { options: [] }),
//    <User name = "Andrew" age = {26}/>, //stateless functional component
document.getElementById('app'));

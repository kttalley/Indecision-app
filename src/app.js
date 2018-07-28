class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>App</h2>
            </div>
        )
    }
}
class Action extends React.Component {
    render() {
        return (
            <div>
                <button> What should I do next? </button>
            </div>
        );
    }
}

const templateContainer = (
    <div>
        <Header />
        <Action />

    </div>
)
ReactDOM.render (
    templateContainer,
    document.getElementById('app')
);
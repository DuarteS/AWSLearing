 import React from 'react';
 import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

class TestComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            stringTest:""
        };
    }

    componentDidMount() {
        fetch("http://myawsscdplanet-env.eba-tb9pmhpq.eu-central-1.elasticbeanstalk.com/hello").then(
            result=>{
                this.setState({stringTest:result});
            }
        )
    }

    render() {
        <div>
            <h1> {this.state.stringTest} </h1>
        </div>
    }
}

const element=<TestComponent></TestComponent>
ReactDOM.render(element,document.getElementById("root"))

import React from "react"

class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render(){
        let list = '';

        if(this.state.currency === 'USD'){
            list = <li className="list-group-item"> 
            Bitcoin rate for {this.props.bpi.bpi.USD.description}:
            <span className="badge badge-primary">{this.props.bpi.bpi.USD.code}</span>
            <strong>{this.props.bpi.bpi.USD.rate}</strong>
            {console.log(this.props.bpi.bpi.USD.rate)}
        </li>

        }else if(this.state.currency === 'GBP'){
            list = <li className="list-group-item"> 
            Bitcoin rate for {this.props.bpi.bpi.GBP.description}:
            <span className="badge badge-primary">{this.props.bpi.bpi.GBP.code}</span>
            <strong>{this.props.bpi.bpi.GBP.rate}</strong>
            {console.log(this.props.bpi.bpi.GBP.rate)}
        </li>

        }else if(this.state.currency === 'EUR'){
            list = <li className="list-group-item"> 
            Bitcoin rate for {this.props.bpi.bpi.EUR.description}:
            <span className="badge badge-primary">{this.props.bpi.bpi.EUR.code}</span>
            <strong>{this.props.bpi.bpi.EUR.rate}</strong>
            {console.log(this.props.bpi.bpi.EUR.rate)}
        </li>
        }
        return(<div>
            <ul className="list-group">
                {list}
            </ul>
            <br/>
            <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
            </select>

        </div>);
    }
}

export default Prices;
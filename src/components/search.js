import React from 'react';

// Import the Autocomplete Component
import Autocomplete from 'react-autocomplete';
import Genes from "./genes";

export default class Search extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            genes: [],
            value: "",
            autocompleteData: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getItemValue = this.getItemValue.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }


    onChange(e){
        this.setState({
            value: e.target.value
        }, () => {


                fetch('http://localhost:5000/gene/autocomplete/' + this.state.value)
                    .then(res => res.json())
                    .then((data) => {
                        const list = [];
                        data.forEach(function (element, index) {
                            list.push({
                                "index":index,
                                "label": element,
                                "value": element
                            });
                        });
                        this.setState({autocompleteData: list});
                    })
                    .catch(console.log);

        });



    }

    onSelect(val){
        this.setState({
            value: val
        }, () => {
            if (this.state.value)
                this.updateTable(this.state.value);
        });

    }

    renderItem(item, isHighlighted){
        return (
            <div key={item.label} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
            </div>
        );
    }

    getItemValue(item){
        return item.value;
    }


    render() {
        return (
            <div>
                <center>Type the gene name to search his variation</center>
                <Autocomplete
                    getItemValue={this.getItemValue}
                    items={this.state.autocompleteData}
                    renderItem={this.renderItem}
                    value={this.state.value}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                    onKeyPress={this.onChange}
                />
                <br></br><br></br>
                <Genes genes={this.state.genes} />
            </div>
        );
    }

    updateTable(name) {
        fetch('http://localhost:5000/gene/'+name)
            .then(res => res.json())
            .then((data) => {
                this.setState({ genes: data })
            })
            .catch(console.log)
    }
}

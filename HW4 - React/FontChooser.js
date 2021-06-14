class FontChooser extends React.Component {

    constructor(props) {
	       super(props);
           var initialColor = '';
           if(Number(this.props.size) > Number(this.props.min) && Number(this.props.size) < Number(this.props.max)){
               initialColor = 'black';
           }
           else{
               initialColor = 'red';
           }
           this.state = { hidden: true, bold: this.props.bold, fontSize: this.props.size, color: initialColor, initialSize: this.props.size };

    }

    toggleHidden() {
        this.setState( {hidden: !this.state.hidden} );
    }

    toggleWeight() {
        var weight = this.state.bold === 'true' ? 'false' : 'true';
        this.setState( {bold: weight} );
    }

    increaseSize() {
        var size = Number(this.state.fontSize);
        var maxSize = Number(this.props.max);
        if(size < maxSize){
            this.setState( {fontSize: String(size + 1)} );
            this.setState( {color: 'black'} );
        }
        if(Number(this.state.fontSize)+1 == Number(this.props.max)){
            this.setState( {color: 'red'} );
        }
    }

    decreaseSize() {
        var size = Number(this.state.fontSize);
        var minSize = Number(this.props.min);
        if(size > minSize){
            this.setState( {fontSize: String(size - 1)} );
            this.setState( {color: 'black'} );
        }
        if(Number(this.state.fontSize)-1 == Number(this.props.min)){
            this.setState( {color:'red'} );
        }
    }

    reset(){
        this.setState( {fontSize: this.state.initialSize} );
        var initialColor = '';
        if(Number(this.props.size) > Number(this.props.min) && Number(this.props.size) < Number(this.props.max)){
            initialColor = 'black';
        }
        else{
            initialColor = 'red';
        }
        this.setState( {color: initialColor} );
    }

    render() {
        var weight = this.state.bold === 'true' ? 'bold' : 'normal';
        var size = this.state.fontSize;
        var myColor = this.state.color;
        var checked = this.state.bold === 'true' ? true : false;
        return(
            <div>
            <input type="checkbox" id="boldCheckbox" hidden={this.state.hidden} defaultChecked={checked}
                onClick={this.toggleWeight.bind(this)}/>
            <button id="decreaseButton" hidden={this.state.hidden}
                onClick={this.decreaseSize.bind(this)}>-</button>
            <span id="fontSizeSpan" hidden={this.state.hidden} style={ {color:myColor} }
                onDoubleClick={this.reset.bind(this)}>{this.state.fontSize}</span>
            <button id="increaseButton" hidden={this.state.hidden}
                onClick={this.increaseSize.bind(this)}>+</button>
            <span id="textSpan" style={ {fontWeight:weight, fontSize:Number(size)} }
                onClick={this.toggleHidden.bind(this)}>{this.props.text}</span>
            </div>
        );
    }
};

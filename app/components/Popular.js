var React = require('react');
var PropTypes = require('prop-types');

const SelectLanguage = (props) => {
    var languages = ['All','Javascript','Ruby', 'Java','CSS','Python']

   return (
    <ul className='languages'>
    {
      languages.map((lang)=> <li
      style = { lang === props.selectedLanguage ? { color: 'blue' } : null }
      onClick = {props.onSelect.bind(null, lang)}
      key={lang}> {lang} </li> )
    }
    </ul>
    )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage:'All'
    };
    this.updateLan = this.updateLan.bind(this)
  }

  updateLan(lang){
    this.setState(()=>{ return {selectedLanguage:lang} })
  }
  render(){
    return(
        <div>
          <SelectLanguage
           selectedLanguage={this.state.selectedLanguage}
           onSelect={this.updateLan}
           />
        </div>
    )
  }
}

module.exports = Popular;

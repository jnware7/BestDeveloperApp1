var React = require('react')

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

    var languages = ['All','Javascript','Ruby', 'Java','CSS','Python']
    console.log('whats the context',this)
    return(
      <ul className='languages'>
      {
        languages.map((lang)=> <li
        style = { lang === this.state.selectedLanguage ? { color: 'blue' } : null }
        onClick = {this.updateLan.bind(null, lang)}
        key={lang}> {lang} </li> )
      }
      </ul>
    )
  }
}

module.exports = Popular;

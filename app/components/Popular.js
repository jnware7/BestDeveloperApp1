var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api')

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
      selectedLanguage:'All',
      repos: null
    };
    this.updateLan = this.updateLan.bind(this)
  }

  componentDidMount () {
    //AJAX

  }

  updateLan(lang){
    this.setState(()=>{ return {
                            selectedLanguage:lang,
                            repos:null
                        }
                      })

    api.fetchPopularRepos(lang)
      .then(function (repos){
        this.setState(function (){
          return{
            repos: repos
          }
        })
      }.bind(this))
  }
  render(){
    return(
        <div>
          <SelectLanguage
           selectedLanguage={this.state.selectedLanguage}
           onSelect={this.updateLan}
           />
           {JSON.stringify(this.state.repos)}
        </div>
    )
  }
}

module.exports = Popular;

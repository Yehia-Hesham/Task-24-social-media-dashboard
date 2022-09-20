
import "./darkModeButton.css";

function DarkModeButton(props){


    return(
        <div id = 'themeSwitch' className="form-check form-switch"  onChange={() => {
          props.theme.toggleDark();
          console.log(props.theme.dark)
        }}>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
        {/* <label className="form-check-label">Default switch checkbox input</label> */}
      </div>
    )
}

export default DarkModeButton;
import './Menu.css';
import { Outlet} from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className=".topnav " id="myTopnav">

        <div className="hostname flex-container">leonardo@dev:/home/$ 
            <div className="command" role="textbox" contentEditable>Construção!</div>
            <div className="cursorTerminal"> </div>
        </div>


        </div>

      <Outlet />
    </>
  )
};

export default Menu;
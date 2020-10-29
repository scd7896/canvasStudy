import imageDraw from './Image/image'
import {artToExample, rotatePlusDraw} from './Practics/first';
import buttonEvents from './Events/Root/button';
import './root.css';
function init() {
	// artToExample();
	buttonEvents();
	imageDraw();
	// rotatePlusDraw();
}
init()

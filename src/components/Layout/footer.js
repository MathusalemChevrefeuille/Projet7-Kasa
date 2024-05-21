import "./footer.css";
import Logo from '../../assets/images/LOGOF.svg';

function Footer (){
    return (
        <footer>
            <img src={Logo} alt="Logo Kasa" />
            <div className='footertext'>
                <p>© 2024 Kasa. All </p>
                <p> rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
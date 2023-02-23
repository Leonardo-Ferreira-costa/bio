import './Inicio.css';

const Inicio = () => {

    const d = new Date();
    let year = d.getFullYear();

    return <>

            <div className='mainDiv'>
                <img className="phoyoBio" src='./photoBio.jpg' alt="Foto da bio"/>
                <h1>Leonardo F. Costa</h1>
                <h2>Desenvolvedor Fullstack e apaixonado por tecnologia.</h2>
                <span><i class='far fa-envelope'></i> leonardo.fcosta69824@gmail.com</span>
                <span><i class='fab fa-linkedin-in'></i> leonardo-f-costa-30302131</span>
                <span><i className='fab fa-github'></i> Leonardo-Ferreira-costa</span>
                <span><i class='fab fa-instagram'></i> leonardofcosta</span>
                <h3>© {year} Leonardo F.Costa</h3>
            </div>
        
        </>;
  };
  
  export default Inicio;
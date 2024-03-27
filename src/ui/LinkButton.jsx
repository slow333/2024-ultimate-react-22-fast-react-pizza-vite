import {Link, useNavigate} from 'react-router-dom';

function LinkButton({children, to}) {

    const navigate = useNavigate();
    const className = 'text-base text-green hover:text-green-800 hover:underline'

    if(to === -1) <button className={className} onClick={() => navigate(-1)}>
      {children}
    </button>

    return ( 
    <Link to={to} 
      className={className}>
        {children}
      </Link>
     );
}

export default LinkButton;
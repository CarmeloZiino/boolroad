import Rubrica from "../components/Rubrica"
import { Link } from "react-router-dom";


export default function RubricaPage() {
  return (
    <>

    <Rubrica/> 
    <div className="mt-4 text-center">
        <Link to="/" className="btn btn-primary">Torna alla Home</Link>
    </div>
    
    </>
  );
}
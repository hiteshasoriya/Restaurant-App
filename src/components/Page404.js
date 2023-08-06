import { useNavigate } from "react-router-dom";

function Page404()
{
const navigate = useNavigate();
    return(
        <div>
            <h1>404 PAGE</h1>
            <p>This URL is not present</p>
            <button onClick={()=> navigate(-1)}>GO BACK</button>
        </div>
    )
}
export default Page404;
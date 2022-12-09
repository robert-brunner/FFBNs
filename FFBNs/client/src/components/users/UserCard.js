import { getRandomUser } from "../../managers/UserProfileManager";
import { User } from "../users/User"

export const RandomUser = () => {
    // const navigate = useNavigate();
    const [user, setUser] = useState([]);

    const getUsers = () => {
        getRandomUser().then ( all => setUser(all))
    };
    useEffect(()=>{
        getUsers();
    }, []);

    return (
        <div className="m-5">
            <button className="btn btn-primary mt-3 mb-2" onClick={() => navigate("")}>Add New Category</button>
            
            <Table>
                <thead>
                    
                    <tr>
                        <th>
                            Category
                        </th>
                    </tr>
                    
                </thead>
                <tbody>
                    {user.map((use)=>(
                        <>
                        <User key={use.id} category = {use}/>
                        </>
                    ))}
                    </tbody>
            </Table>
        </div>
    );
};

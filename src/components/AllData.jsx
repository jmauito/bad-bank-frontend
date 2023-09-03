import { users } from "./Context";
import Card from "./Card";

const AllData = () => {
  
  const body = 
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          { users.map( (user) => 
            <tr key={user.id}>
            <th scope="row" >{user.id}</th>
            <td >{user.name}</td>
            <td >{user.email}</td>
            <td >{user.balance}</td>
          </tr>
           )}
          
        </tbody>
      </table>
    </div>;

  return <Card
    header="All data"
    text={body}
    
  />
}

export default AllData;
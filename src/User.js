import './Users.css';
function User(props){
    return(
        <div className="col">
            <div className="card">
  <div class="contain">
    <h2><b>{props.u.id}</b></h2>
    <h2><b>{props.u.name}</b></h2>
    <h3><b>{props.u.username}</b></h3>
    <h5><b>{props.u.email}</b></h5>
    <button className="bn1 btn-info" onClick={()=>props.add()}>Add User</button>
  </div>
</div>
        </div>
    )
}
export default User;
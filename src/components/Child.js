import PropTypes from 'prop-types';


function Child({name,age,handleAlert,names,user,isAdult,children}){
   
    return (
<div>
    <h1>{name}</h1>
    <span>{age}</span>
    <br />
    <br />
    <h3>{user.username}</h3>
    <h3>{user.email}</h3>
    <div>
        <h6>List of names</h6>
        {
            names.map(name=><h3 key={name}>
                {name}
                </h3>)
        }
    </div>
    <button onClick={()=>handleAlert(name)} >click me</button>
    <br />
    {
        isAdult && <h3>is adult</h3>
    }
    {children}
    </div>
    )
}

Child.defaultProps={
    name:"youssef"
}
Child.propTypes={
    age:PropTypes.number.isRequired
}
export default Child
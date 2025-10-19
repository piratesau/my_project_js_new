import React from "react"

class Users extends React.Component {
    user =[
        {
            id:1,
            age: 17
        }
    ]
    render(){
        if(this.user.length>0)
            return(
                <div>
                    {this.user.map((el)=>(
                        <div className="user" key={el.id}>
                            <h3> {el.age}</h3>
                        </div>
                    ))}
                </div>
            )
            else
            return (<div className="user">
                <h3>Пользователей нет</h3>
            </div>
        )
    }
}
export default Users
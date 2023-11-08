import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const AddProduct = () => {
    const [name, setname] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [project, setproject] = useState('');
    const history = useHistory();
 
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            name: name,
            lastName: lastName,
            email: email,
            project: project
        });
        history.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <label className="label">Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={ (e) => setname(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Last name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="LastName"
                        value={ lastName }
                        onChange={ (e) => setlastName(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Email"
                        value={ email }
                        onChange={ (e) => setemail(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Project</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Project"
                        value={ project }
                        onChange={ (e) => setproject(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct
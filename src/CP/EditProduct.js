/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
 
const EditProduct = () => {
    const [name, setname] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [project, setproject] = useState('');
    const history = useHistory();
    const { id } = useParams();
 
    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`,{
            name: name,
            lastName: lastName,
            email: email,
            project: project
        });
        history.push("/");
    }
 
    useEffect(() => {
        getProductById();
    }, []);
 
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setname(response.data.name);
        setlastName(response.data.lastName);
        setemail(response.data.email);
        project(response.data.project);
    }
 
    return (
        <div>
            <form onSubmit={ updateProduct }>
                <div className="field">
                    <label className="label">name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="name"
                        value={ name }
                        onChange={ (e) => setname(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">lastName</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="lastName"
                        value={ lastName }
                        onChange={ (e) => setlastName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="email"
                        value={ email }
                        onChange={ (e) => setemail(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">project</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="project"
                        value={ project }
                        onChange={ (e) => setproject(e.target.value) }
                    />
                </div>

                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditProduct
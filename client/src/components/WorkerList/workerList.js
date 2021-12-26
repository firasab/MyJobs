import React from 'react';
import axios from 'axios' ;
import { NotificationContainer, NotificationManager } from 'react-notifications';
export default class WorkerList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            workerList:[],
            error:{}
      }
    }
    componentDidMount()
    {
        axios.defaults.headers.common["Authorization"] = localStorage.getItem('token');
        axios.get("http://localhost:9000/api/workers").then(res => {
            if(res.data.success)
                this.setState({workerList:res.data.workers});
        }).catch(error => {
            if(error.response.status && error.response.status===400)
            NotificationManager.error("Bad Request");
            else NotificationManager.error("Something Went Wrong");
            this.setState({ errors: error })
        });
    }
    render() {
        return (
            <div className="content">
                <NotificationContainer/>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center">Workers List</div>
                                <div className="card-body">
                                   
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Worker Name</th>
                                                <th>Email</th>
                                                <th>password</th>
                                                <th>id</th>
                                                <th>location</th>
                                                <th>Phone Number</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.workerList.map((data, idx)=>
                                            <tr key={data._id} >
                                                <td>{data.workerId.name}</td>
                                                <td>{data.workerId.email}</td>
                                                <td>{data.workerId.password}</td>
                                                <td>{data.workerId.id}</td>
                                                <td>{data.workerId.location}</td>
                                                <td>{data.workerId.phoneNumber}</td>
                                                {/*<td> /////////////////////////////////////////////////////////////////////////
                                                    <Link className="btn btn-primary" to={"/worker-detail/"+data._id}><i className="fa fa-eye" aria-hidden="true"></i></Link>
                                                </td> ////////////////////////////////////////////////////////////////////   */}
                                            </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
            </div>
        );
    }
}
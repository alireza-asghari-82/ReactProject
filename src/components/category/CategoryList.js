import React, { useEffect } from 'react'
import { Loading } from '../../custom-components/Loading';

export const CategoryList = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    //Class Coponent => ComponentDidMount => call api
    //Function Component => useEffect => DidMount => call api
    useEffect(() => {
        //DidMount
        getCategories();
    }, [])

    const getCategories = () => {
        const apiUrl = 'http://apitester.ir/api/Categories';
        fetch(apiUrl)
            .then(response => response.json())
            .then(
                (data) => {
                    console.log(data);
                    setItems(data);
                    setIsLoading(false);
                },
                (error) => {
                    alert('error');
                    setIsLoading(false);
                },
                // () =>{ //finally - تو هر شرایطی کدهای این بخش اجرا می شود
                //     setIsLoading(false);
                // }
            )
    }

    return (
        <div className="card">
            <div className="card-header">گروه بندی محصولات</div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? <Loading /> :
                                 items.map(item =>
                                    <tr key={item.categoryId}>
                                        <td>{item.categoryId}</td>
                                        <td>{item.categoryName}</td>
                                        <td>{item.description}</td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

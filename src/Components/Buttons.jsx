import '../App.css'

function Buttons(props) {
    // console.log(props)

    let storeArray = props.data
    let handleUpdate = props.updateBtn
    let handleDeleteBtn = props.deleteBtn

    return (
        <div>
            {
                storeArray.map((element, index) => (
                    <div key={index} className="display-container">
                        <h1>{element}</h1>

                        <button onClick={() => {
                            handleUpdate(index)
                        }}>Update</button>


                        <button onClick={() => {
                            handleDeleteBtn(index, element)
                        }} >Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Buttons
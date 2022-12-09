export default function NotifyDelete(props){

    const echostyle = props.styleprop
    
    const displayVal = echostyle.display;
    const opacityVal = echostyle.opacity



    return(<>

        <div className="notifydelete" style={{display:displayVal,opacity:opacityVal}}>
        <h3>            Product Deleted
        </h3>
        </div>
    </>)
}
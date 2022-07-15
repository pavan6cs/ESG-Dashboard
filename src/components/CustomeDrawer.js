import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import toTitleCase from './../utils';
import CustomeTab from './CustomeTab'

const CustomeDrawer = (props) => {
    const style = {
        float: "right",
        marginTop: "1rem",
        marginLeft: "2rem",
        cursor:"pointer"
    }
    const getElementByid = (id) => {
        return props.data.filter(data => data.id == id);
    }
    return (
        <>
            <div onClick={props.togle} style={style}><CloseIcon sx={{ fontSize: 25 }} /></div>
            <Typography variant="h5" component="h5" style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                {
                    getElementByid(props.index).length > 0 ? toTitleCase(getElementByid(props.index)[0].name) : "sample"
                }
            </Typography>
            <CustomeTab style={{ marginTop: "1rem", marginLeft: "0.5rem" }} 
            data={getElementByid(props.index)[0]}
            allScores={props.data}
            />
            {console.log(getElementByid(props.index), props.index)
            }

        </>
    )
}


export default CustomeDrawer;
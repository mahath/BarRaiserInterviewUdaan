import classes from "./CarCrashPagination.module.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const CarCrashPagination = props =>{
    return <div className={classes.pagination}>
        <button className={classes.leftButton}><RemoveIcon /></button>
        <p>2</p>
        <button className={classes.rightButton}><AddIcon /></button>
    </div>
};

export default CarCrashPagination;
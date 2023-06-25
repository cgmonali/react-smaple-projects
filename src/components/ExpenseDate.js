

import './ExpenseDate.css';


function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'numeric'});
    const year=props.date.getFullYear();

    return (
        <div className="expense-date" >
            <div className="expense-date__month" >{month}</div>
            <div className="expense-date__year" >{day}</div>
            <div className="expense-date__day" >{year}</div>
        </div>
    );
}

export default ExpenseDate;
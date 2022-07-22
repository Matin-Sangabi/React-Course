
import Select from "react-select";

const options = [
    {value : 'All' , label : 'All'},
    {value : 'Uncompleted' , label : 'Un Completed'},
    {value : 'Completed' , label : 'Completed'},
]

const FilterTodo = ({onSelect , status , setStatus}) => {
   
    const changeHandlers = (e)=>{
        setStatus(e.value);
        onSelect(e.value);
    }
    return (  
        <>
            <Select className="filter-todo" 
                value={status}
                options={options}
                onChange={changeHandlers}
            />
        </>
    );
}
 
export default FilterTodo;
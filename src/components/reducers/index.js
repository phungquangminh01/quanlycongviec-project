import  { combineReducers }  from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import ItemEditing from './ItemEditing';
import filterTable from './filterTable';
import Search from './Search';
import Sort from './Sort';
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    ItemEditing,
    filterTable,
    Search,
    Sort
});

export default myReducer;
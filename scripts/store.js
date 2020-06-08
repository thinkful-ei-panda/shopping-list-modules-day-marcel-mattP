import item from './item.js';


const items = [];
const hideCheckedItems = false;

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addItem = (name) => {
  try {
    item.validateName(name);
    items.push(item.create(name));
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
};

const findAndToggleChecked = (id) => {
  const foundItem = findById(id);
  foundItem.checked = !foundItem.checked;
};

const findAndUpdateName = (id, newName) => {
  try {
    item.validateName(newName);
    
    const foundItem = findById(id);
    foundItem.name = newName;
    
  } catch (error) {
    console.log(`Cannot update name: ${error.messaage}`);
  }
};

const findAndDelete = (id) => {
  const index = items.findIndex(item => item.id === id);
  items.splice(index, 1);
};

const toggleCheckedFilter = () => {
  items.hideCheckedItems = !items.hideCheckedItems;
  console.log(items.hideCheckedItems)
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndDelete,
  findAndToggleChecked,
  findAndUpdateName,
  toggleCheckedFilter
};


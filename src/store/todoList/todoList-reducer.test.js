import { reducer } from './todoList-reducer';
import { addItem, deleteItem, toggleComplete, toggleDetails } from './todoList-reducer';

describe('toDoListReducer', () => {
  it('can add an item', () => {
    const state = {
      todoList: [],
    }
    Object.freeze(state);
    const item = { name: "item1"}
    let action = addItem(item);

    let updatedState = reducer(state, action);

    expect(updatedState).toEqual({ todoList:[{ name: "item1" }] });
  });

  it('can delete an item by _id', () => {
    const state = {
      todoList: [],
    }
    Object.freeze(state);
    const item = { 
      name: "item1",
      _id: 12345,
    }
    let add = addItem(item);
    let deleteID = deleteItem(12345);

    let addedState = reducer(state, add);
    expect(addedState).toEqual({ todoList:[{ name: "item1", _id: 12345 }] });
    
    let deletedState = reducer(addedState, deleteID)
    expect(deletedState).toEqual({ todoList:[]});
  });

  it('can toggle if an item has been completed', () => {

    const state = { todoList:[{ 
        name: "item1",
        _id: 12345,
        complete:false,
      },
      { 
        name: "item2",
        _id: 55555,
        complete:true,
      }]
    };
    Object.freeze(state);

    let updatedState = reducer(state, toggleComplete(12345));
    let updatedState2 = reducer(state, toggleComplete(55555));

    expect(updatedState.todoList[0].complete).toEqual(true);
    expect(updatedState2.todoList[0].complete).toEqual(false);
    
  })
  describe('Details Reducer', () => {

    it('can toggleDetails', () => {
      let item = {
        name: 'Testing',
        _id: 12345,
      };
  
      let updatedDetails = reducer(initialState, toggleDetails(item));
      expect(updatedDetails).toEqual({
        details: item,
        showDetails: true
      });
    });
  
  })

})
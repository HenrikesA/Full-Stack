const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      important: true
    }
]

const App = (props) => {
    const { notes } = props
  
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(note => 
            <li key={note.id}>
              {note.content}
            </li>
          )}
        </ul>
      </div>
    )
}

// As the linked React page in the error message suggests;
// the list items, i.e. the elements generated by the map method, must each have a unique key value: an attribute called key.
// ---------------------------------------------------------------------------------------------->


// Keys should be given to the elements inside the array to give the elements a stable identity
// The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs
// https://reactjs.org/docs/lists-and-keys.html#keys


// When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:

const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs  
  <li key={index}>    
    {todo.text}
  </li>
);
// ---------------------------------------------------------------------------------------------->


// Keys only make sense in the context of the surrounding array.

// For example, if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather
//  than on the <li> element in the ListItem itself.


// Example: Incorrect Key Usage

function ListItem(props) {
    const value = props.value;
    return (
      // Wrong! There is no need to specify the key here:    
      <li key={value.toString()}>      
        {value}
      </li>
    );
}
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Wrong! The key should have been specified here:    
      <ListItem value={number} />  );
    return (
      <ul>
        {listItems}
      </ul>
    );
}


// Example: Correct Key Usage

function ListItem(props) {
    // Correct! There is no need to specify the key here:  
    return <li>{props.value}</li>;
}
  
function NumberList(props) {
const numbers = props.numbers;
const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.    
    <ListItem key={number.toString()} value={number} />  );
return (
    <ul>
    {listItems}
    </ul>
);
}
// ---------------------------------------------------------------------------------------------->

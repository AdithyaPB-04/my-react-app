function List(props) {
  // const fruits = ["apple","orange","banana","coconut","pineapple"];
  // fruits.sort();
  // const listItems = fruits.map(fruit =><li>{fruit}</li>)
  // return(<ol>{listItems}</ol>);

  //or
//   const fruits = [
//     { id: 1, name: "apple", calories: 95 },
//     { id: 2, name: "orange", calories: 45 },
//     { id: 3, name: "banana", calories: 105 },
//     { id: 4, name: "coconut", calories: 159 },
//     { id: 5, name: "pineapple", calories: 37 },
//   ];
  //alphabetic order
  //   fruits.sort((a,b)=>{
  //     a.name.localeCompare(b.name)
  //   });
  //reverse alphabetic order
  //   fruits.sort((a,b)=>{
  //     b.name.localeCompare(a.name)
  //   });

//   fruits.sort((a, b) => a.calories - b.calories); //numeric order
//   fruits.sort((a,b)=>b.calories-a.calories);   //reverse numeric order

//   const listItems = fruits.map((fruit) => (
//     <li key={fruit.id}>
//       {fruit.name}: &nbsp;
//       <b>{fruit.calories}</b>
//     </li>
//   ));
//   return <ol>{listItems}</ol>;
                    //or
    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map(item => (
            <li key={item.id}>
             {item.name}: &nbsp;
             <b>{item.calories}</b>
            </li>
          ));
    return (<>
    <h3>{category}</h3>
    <ol>{listItems}</ol>
    </>);
}

export default List;

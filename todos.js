let input = prompt('What Would You Like to Do ?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

while (input !== 'quit' && input !== 'q')
 {

    if (input === 'list')
     {
        console.log('***************')
        for (let i = 0; i < todos.length; i++) 
        {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***************');
    }
    else if (input === 'new') 
    {
        const newToDo = prompt("Enter the New Todo");
        todos.push(newToDo);
        console.log(`${newToDo} Added to the List`);
    }
    else if(input === 'delete')
    {
        const index = parseInt(prompt('What Would You Like to Delete ?'));
        if(!Number.isNaN(index))
        {
            const deleted = todos.splice(index, 1);
            console.log(`OK, Deleted ${deleted[0]}`);
        }
        else
        {
            console.log('Unknown Index');
        }
    }
    input = prompt('What Would You Like to Do ?');
}
console.log('OK, You Quit the App!');
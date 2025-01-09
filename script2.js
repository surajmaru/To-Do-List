
document.querySelector('.js-button').addEventListener('click',

    () => {addtodo();}



)







const todolist = [
    
    ];
    
    
    
    todofun();


    
    
    
    
    function todofun (){
    
    
    let todolisthtml = '';


    todolist.forEach((todoobject, i) => { 


        const name = todoobject.name;
        const duedate = todoobject.duedate;
        const html = `
        
        
        <div>${name}</div>
        <div> ${duedate}</div>
        <button style=" color: white; background-color: red;" class="js-delete"> Delete </button> 
        
     
        `;
        todolisthtml += html;
    

       
        


    });
    
    
    
    document.querySelector('.js-todo').innerHTML = todolisthtml;

    //here we use a "addEventListener" function instead of the "onclick" function.
    document.querySelectorAll('.js-delete').forEach((todoobject, i) =>
    
    
        {
            todoobject.addEventListener('click', ()=>{

                todolist.splice(i, 1 );
                todofun();
        


            })
    
    
        }
        
        
        );
    
    } 
    
    function addtodo(){
    
    
    
      const list =   document.querySelector('input');
    
      const list2 = document.querySelector('.js-input');
    
     const name =  list.value;
     const name2 = list2.value;
    
    
    
     todolist.push({
        
        name: name, 
        
        duedate: name2
    
    
    });
    
    
    
    list.value = '';
    
    todofun();
    
    }
    
    
    function key (event){
    
    
        if(event.key === 'Enter'){
    
    
            addtodo();
    
    
        }
    
    
    
    }
describe('Testing de la página todoMVC', () =>{

    beforeEach(()=>{
        //Navegar primero a la web: https://todomvc.com/examples/react/dist/
        cy.visit('https://todomvc.com/examples/react/dist/');
    });

    it('Crear tarea',() =>{

        //Ingresar nombre de una tarea en el campo de texto
        cy.get('.new-todo').type('Tarea 1{enter}');
        //Verificar que la tarea se agrega correcatamnte a la lista
        cy.get('.todo-list').contains('Tarea 1');
    });

    it('Marcar tarea como completada', ()=>{
        //Agregar una tarea a la lista
        cy.get('.new-todo').type('Tarea para marcar{enter}');
        //Hacer click en el botón de mnarca de verificación junto a la tarea
        cy.get('.todo-list li').first().find('.toggle').click();
        //verifica que la tarea se marque como completada
        cy.get('.todo-list li').first().should('have.class', 'completed');


    });

    it ("Desmarcar tarea completada", ()=>{
        //Agregar una tarea a la lista
        cy.get('.new-todo').type('Tarea para desmarcar{enter}');
        //Haz click en el botón de marca de verifiacion
        //junto a la tarea para marcarla como completada
        cy.get('.todo-list li').first().find('.toggle').click();
        //Haz clic nuevamente en el boton para desmarcar la tarea
        cy.get('.todo-list li').first().find('.toggle').click();
        //Verifica que la tarea se muestre como NO completada
        cy.get('.todo-list li').first().should('have.class','');

    });

    it('Editar tarea', ()=>{
        //Agregar una tarea a la lista
        cy.get('.new-todo').type('Tarea para original{enter}');
        //Haz doble click en le texto de la tarea para edarlo
        cy.get('.todo-list li').first().find('label').dblclick();
        //Ingresa un nuevo nombre para la tarea y presiona la tecla enter
        cy.get('.todo-list li').first().find('input').clear().type('Tarea editada{enter}');
        //Verifica que el nombre de la tarea se actualice correctamente en la lista
        cy.get('.todo-list').contains('Tarea editada').should('be.visible');
    });

    it('Borrar tarea', ()=>{
        //Agregar una tarea a la lista
        cy.get('.new-todo').type('Tarea borrar{enter}');
        //Haz clic en el botón 'X' junto a la tarea para eliminarla
        cy.get('.todo-list li').first().find('.destroy').click({force: true});
        //Verifica que la tarea se elimine correctamente
       cy.get('todo-list').should('not.contain', 'Tarea borrar');
    });

    describe('Filtrar tareas en TodoMVC', () => {

        beforeEach(() => {
            // Visitar la página de TodoMVC (React)
            cy.visit('https://todomvc.com/examples/react/dist/#/');
        });
    
        it('Agregar tareas y aplicar filtros', () => {
            // 1. Agregar varias tareas a la lista
            cy.get('.new-todo').type('Tarea incompleta 1{enter}');
            cy.get('.new-todo').type('Tarea incompleta 2{enter}');
            cy.get('.new-todo').type('Tarea completa 1{enter}');
            cy.get('.new-todo').type('Tarea completa 2{enter}');
            
            // 2. Marcar algunas tareas como completadas (Tarea completa 1 y 2)
            cy.get('.todo-list li').eq(2).find('.toggle').click({force: true}); // Marcar "Tarea completa 1"
            cy.get('.todo-list li').eq(3).find('.toggle').click({force: true}); // Marcar "Tarea completa 2"
            
           
            // 3. Verificar que todas las tareas están en la lista inicialmente
            cy.get('.todo-list li').should('have.length', 4);
            
            // 4. Filtrar por tareas completadas
            cy.contains('Completed').click();
            
            // 5. Verificar que solo las tareas completadas están visibles
            cy.get('.todo-list li').should('have.length', 2);
            cy.get('.todo-list').should('contain', 'Tarea completa 1');
            cy.get('.todo-list').should('contain', 'Tarea completa 2');
            
            // 6. Filtrar por tareas activas (no completadas)
            cy.contains('Active').click();

            
            // 7. Verificar que solo las tareas no completadas están visibles
            cy.get('.todo-list li').should('have.length', 2);
            cy.get('.todo-list').should('contain', 'Tarea incompleta 1');
            cy.get('.todo-list').should('contain', 'Tarea incompleta 2');
            
            // 8. Volver a mostrar todas las tareas
            cy.contains('All').click();
            
            // 9. Verificar que todas las tareas están visibles nuevamente
            cy.get('.todo-list li').should('have.length', 4);*/
        });
    
    });
    


});
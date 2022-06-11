# Actividad 08 | Ejercicios de Objetos y sus métodos básicos:
#### 1. Del siguiente objeto:
  ```js
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
  ```
> 1. Muestra en pantalla el valor de la propiedad name mediante dot notation
> 2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
> 3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"

#### 2. Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.

Objeto de muestra:
  ```js
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
  ```

#### 3. Verifica si la propiedad name se encuentra dentro del siguiente objeto:
```js
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
```

#### 4. Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto:
Objeto para usar:
```js
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
```
> Imprima también el objeto antes o después de eliminar la propiedad. 

#### 5. Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
```js
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
```
> La nueva edad debe ser 35.

#### 6. Escriba un programa para añadir una nueva propiedad al siguiente objeto:
```js
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
```
> La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.

#### 7. Crea un código para llenar un objecto vacio:
```js
    const objeto = {}
```

>Con las siguiente propiedades:
>* color
>* tamaño
>* peso
>* cantidad

#### 8. Una función que reciba un objeto y un string…
```js
    var Car = {
        wheels: 4,
        company: 'honda',
        name: 'civic',
        year: 2016
    }
```

> El string va a ser el nombre de una propiedad, y esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes la función debe retornar true o false

#### 9.Create an object that will be filled only by a function inside of it, and not from someone outside of it's function.. 
Example:
```js
    let myObject = {
        myFunction: function ()... // This function is supposed to fill this object
    }
```

```js
    myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
```

> It supposed to be filled using it's own function
Add any type of element on the object.. arrays, objects, int, strings, etc

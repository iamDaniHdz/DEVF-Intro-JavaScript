# Actividad 10 | Ejercicios compuestos

##### 1. Crea una función para encuentrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia y regresa como resultado, sus respectivas edades y la diferencia de edad.
```js
    cost Family = [
        {
            name: 'John',
            age: 13
        },
        {
            name: 'Mark',
            age: 56
        },
        {
            name: 'Rachel',
            age: 45
        },
        {
            name: 'Nate',
            age: 67
        },
        {
           name: 'Jeniffer',
            age: 65
        },
        {
            name: 'Martha',
            age: 25
        }
    ];
```

#### 2. Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.
```js
const numbers = [ 1, -4, 12, 0, -3, 29, -150];
```

#### 3. Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.

```js
    matriz = [7,2,5,3,5,3]

    br = [7,2,5,4,6,3,5,3]
```
> Los números que faltan en arr son [4,6]

#### 4. Del siguiente arreglo, retorna un objeto donde retorne unicamente los elementos sin repetir y el valor sea las ocurrencias que encontró dentro de ese arreglo. 

```js
    const arr = ['one', 'two', 'one', 'one', 'two', 'three', 'five', 'seven', 'five', 'ten', 'nine', 'one', 'two', 'four'];
```

```js
    // Resultado esperado:
    
    {
        one: 4,
        two: 3,
        three: 1,
    }
```

#### 5. Escribe una funcion que combine dos listas de arreglos alternando los elementos de cada una:

```js
    const a = [1,2,3]
    const b = [a,b,c]
```

```js
    // Resultado esperado:
    
    [1,a,2,b,3,c]
```

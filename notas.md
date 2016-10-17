1. El header debería de estar por encima de todos los elementos, no me queda muy claro porque mencionan que debería de estar por detrás. Yo he asumido la 1a forma que es que vaya encima de todo, lo que he resuelto agregando un z-index: 99 a los estilos de la etiqueta <header>

2. Pues el menú ya funciona en tamaño movil
- Se ajusta posición del botón de 3 barra para que quede en el área blanca del encabezado (estilos de .toggle)
- Se elimina el padding para que siempre se muestre pegado el header en la parte superior (estilos del header en el media query)
- Se el archivo js/index.js se realizan cambios considerables para hacer que el menú se muestre de forma adecuada tanto en la versión movil como en la versión desktop.

3. En la sección de "Conócenos" les he propuesto una solución altenativa y en caso de no ser la adecuada, entonces tienen que definir como se tiene que ver para dispositivos móviles ;)
- He mantenido el html tal cual
- Sólo he modificado los estilos relacionados con esta sección
- He agregado un media query para hacer las modificaciones para la versión móvil.

4. En la sección de "Servicios"
- Primero con la parte responsiva y lo primero es que no se puede usar un class "row" de bootstrap sin tener antes un elemento que tenga la clase "container", como lo hicieron en la sección anterior, así que lo agrego al html.
- 

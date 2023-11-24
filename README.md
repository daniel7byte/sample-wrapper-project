# Instrucciones para montar el proyecto

Este documento proporciona instrucciones detalladas sobre cómo montar el proyecto "sample-wrapper-project". Asegúrate de seguir estos pasos cuidadosamente para configurar y ejecutar el proyecto de manera correcta.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

1. **Node.js**: Debes tener Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

2. **npm**: npm es el administrador de paquetes de Node.js y generalmente se instala automáticamente con Node.js. Puedes verificar si lo tienes instalado ejecutando `npm -v` en la terminal.

3. **pnpm**: pnpm es una alternativa a npm que ofrece ventajas en cuanto a la velocidad y el espacio en disco. Para instalarlo, sigue los siguientes pasos:

   - Abre tu terminal y ejecuta el siguiente comando para instalar pnpm de forma global:

     ```bash
     npm install -g pnpm
     ```

   - Una vez que la instalación haya finalizado, puedes verificar que pnpm se ha instalado correctamente ejecutando `pnpm -v`.

4. **AWS CLI**: Si planeas usar Amazon Web Services (AWS), asegúrate de tener la AWS Command Line Interface (CLI) instalada y configurada con tus credenciales. Puedes descargarla desde [aws.amazon.com/cli](https://aws.amazon.com/cli/).

Con pnpm instalado, estarás listo para utilizarlo en lugar de npm para gestionar las dependencias de tu proyecto sample-wrapper-project.

## Configuración inicial

Antes de ejecutar el proyecto, debes realizar una configuración inicial. Sigue estos pasos:

1. **Clona el repositorio**: Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio de sample-wrapper-project:

   ```bash
   git clone https://github.com/daniel7byte/sample-wrapper-project.git
   ```

2. **Navega al directorio del proyecto**: Ve al directorio recién clonado usando el siguiente comando:

   ```bash
   cd sample-wrapper-project
   ```

3. **Instala las dependencias**: Ejecuta el siguiente comando para instalar todas las dependencias necesarias del proyecto:

   ```bash
   pnpm install
   ```

## Comandos disponibles

El proyecto sample-wrapper-project utiliza npm scripts para simplificar la gestión. A continuación, se enumeran los comandos más importantes:

- **`pnpm run dev`**: Inicia el proyecto en modo de desarrollo en el stage especificado de AWS.

- **`pnpm run build`**: Compila y construye el proyecto.

- **`pnpm run deploy`**: Despliega el proyecto en el stage especificado de AWS.

- **`pnpm run remove`**: Elimina el proyecto de un stage específico de AWS.

- **`pnpm run console`**: Accede a la consola del proyecto del un stage especificado de AWS.

- **`pnpm run typecheck`**: Realiza comprobaciones de tipo TypeScript.

Para cada comando, puede usar el flag `--stage` para especificar el stage de AWS en el que se ejecutará el comando. Por ejemplo, para ejecutar el comando `pnpm run dev` en el stage "dev", ejecuta el siguiente comando:
  
```bash
pnpm run dev --stage dev
```

## Uso del proyecto

Una vez que hayas realizado la configuración inicial y estés familiarizado con los comandos disponibles, puedes comenzar a trabajar en el proyecto sample-wrapper-project. Asegúrate de editar los archivos necesarios en el directorio "packages" y seguir las convenciones del proyecto.

## CI/CD

El proyecto cuenta con un pipeline de CI/CD que se ejecuta en cada push al repositorio. El pipeline se encarga de realizar las comprobaciones de tipo TypeScript y desplegar el proyecto en el stage correspondiente a la rama en AWS.

| branch | stage |
| ------ | ----- |
| main   | prod  |
| dev    | dev   |

Tambien puedes tener stages personalizados para cada desarrollador.


## Recursos adicionales

Si necesitas más información o detalles sobre el proyecto, consulta la documentación en el repositorio del proyecto o comunícate con el equipo de desarrollo para obtener asistencia adicional.

¡Disfruta trabajando en sample-wrapper-project!
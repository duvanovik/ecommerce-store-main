# Usa una imagen base de Node.js
FROM node:20-alpine

# Establece variables de entorno para pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Habilita pnpm
RUN corepack enable

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y pnpm-lock.yaml
COPY package*.json .
COPY pnpm-lock.yaml .

# Instala las dependencias
RUN pnpm install

# Copia todos los archivos de la aplicación
COPY . .

# Construye la aplicación
RUN pnpm build

# Expone el puerto que usa la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "pnpm", "start" ]

my-backend-app/
  ├── express-backend/
  │   └── Dockerfile
  ├── react-app/
  │   └── Dockerfile
  ├── nginx/
  │   └── nginx.conf
  └── docker-compose.yml

# Instructions
1- docker-compose build # pour build les images en locale
2- docker-compose up    # pour run les serveurs 

http://localhost:3000/  # Front-end
http://localhost:3000/login # Back-end credentials admin admin 

# Features possible 
  └── Ajout d'un service d'analyse des logs afin de faire des stats comme Elastik beat de la suite ELK

# File-ingest-front

1. **file-ingest-front**

2. file-ingest-back

3. file-ingest-db

Posts two kinds of file to the back-end.




[Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

`ng serve` -> `http://localhost:4200/`

## PROD / DOCKER ENV

`ng serve --host 0.0.0.0 --port 5001 --prod --configuration=production`

## GCP ENV (RUN)

`ng serve --host 0.0.0.0 --port 8080 --docker --prod --configuration=gcp`
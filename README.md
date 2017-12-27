# Node - Postgres file upload demo

This is a very quick demo for file upload and download with Node and Postgres.

The page has a form for you to upload a file, and a list of files that have currently been uploaded:

![initial screen](/docs/initialscreen.JPG)

Use the form to choose a file and then click Upload to upload the file:

![fileSelected](/docs/fileSelected.JPG)

As you upload files, they get displays under the "Uploaded Files" heading. You can also delete files.

![multipleFiles](/docs/multipleFiles.JPG)

You can click a file to download it:

![download](/docs/download.jpg)

## Configuring and running

* A simple JSON file is used for configuration -- `config.json` -- where you can specify the host, username, password, and database to use.
* Install dependencies with `yarn install` or `npm install`.
* A start script is included in `package.json` -- you can start the application with `yarn start` or `npm run start`.

## Schema

This uses a very simple schema, which you can see in `schema.sql`:

* Autoincrement integer field for ID (primary key).
* A character field for filenames (size 128).
* A `BYTEA` field for storing the file content.

## Dependencies

Dependencies are also minimal:

* `pg` - database driver for Postgres.
* `knex` - SQL query builder.
* `express` - web server.
* `express-hbs` - Handlebars templating engine for Express.
* `bodyParser` - Request body parser middleware for Express.
* `express-fileupload` - parser middleware for `multipart/form-data`.

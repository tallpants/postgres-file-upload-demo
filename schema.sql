CREATE TABLE public.files
(
    id integer NOT NULL DEFAULT nextval('files_id_seq'::regclass),
    name character varying(128) COLLATE pg_catalog."default" NOT NULL,
    content bytea NOT NULL,
    CONSTRAINT files_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
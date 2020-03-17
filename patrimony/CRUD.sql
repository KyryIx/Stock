CREATE TABLE item (
	id                 INTEGER PRIMARY KEY AUTOINCREMENT	NOT NULL,
    name               VARCHAR(255) NOT NULL,
    description        VARCHAR(255)NOT NULL,
    category           VARCHAR(32) DEFAULT('OTHER'),
    quantity           INTEGER NOT NULL,
	locationBox        VARCHAR(255),
	status             VARCHAR(16) DEFAULT('NOT ORGANIZED'),
	locationImage      VARCHAR(255),
    locationDatasheet  VARCHAR(255),
    locationAttachment VARCHAR(255)
);
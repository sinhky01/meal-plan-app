
CREATE TABLE appUser (
    u_id NUMBER(9) PRIMARY KEY, 
    fname VARCHAR2(100),
    lname VARCHAR2(100),
    uname VARCHAR2(100) UNIQUE, 
    pass VARCHAR2(100)
);
CREATE TABLE ingredient (
    i_id NUMBER(9) PRIMARY KEY,
    ingredient VARCHAR2(100)
);
CREATE TABLE recipe (
    r_id NUMBER(9) PRIMARY KEY,
    rname VARCHAR2(100),
    recipe VARCHAR2(2000)
);
CREATE TABLE user_preference (
    u_id NUMBER(9) CONSTRAINT fk_uid REFERENCES appUser(u_id),
    i_id NUMBER(9) CONSTRAINT fk_iid REFERENCES ingredient(i_id),
    marker NUMBER(1),
    PRIMARY KEY (u_id, i_id)
);
CREATE TABLE user_history (
    u_id NUMBER(9) CONSTRAINT fk_uid_hist REFERENCES appUser(u_id),
    r_id NUMBER(9) CONSTRAINT fk_rid_hist REFERENCES recipe(r_id),
    marker NUMBER(1),
    PRIMARY KEY (u_id, r_id)
);

CREATE TABLE meal_composition (
    r_id NUMBER(9) CONSTRAINT fk_rid_comp REFERENCES recipe(r_id),
    i_id NUMBER(9) CONSTRAINT fk_iid_comp REFERENCES ingredient(i_id),
    quantity NUMBER(10),
    units VARCHAR2(100),
    PRIMARY KEY (r_id, i_id)
);

CREATE TABLE characteristic (
    characteristic VARCHAR2(100) PRIMARY KEY
);

CREATE TABLE calendar (
    dateTime DATE,
    mealNum NUMBER(1),
    u_id NUMBER(9) CONSTRAINT fk_uid_cal REFERENCES appUser(u_id),
    r_id NUMBER(9) CONSTRAINT fk_rid_cal REFERENCES recipe(r_id),
    PRIMARY KEY (dateTime, u_id)
);

CREATE SEQUENCE u_seq
    START WITH 1
    INCREMENT BY 1
;

CREATE SEQUENCE i_seq
    START WITH 1
    INCREMENT BY 1
;
CREATE SEQUENCE r_seq
    START WITH 1
    INCREMENT BY 1
;

commit;
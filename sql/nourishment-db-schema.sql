CREATE TABLE user (
    uid NUMBER(9),
    fname VARCHAR2(20),
    lname VARCHAR2(20),
    username VARCHAR2(20),
    password VARCHAR2(20)
);
CREATE TABLE ingredient (
    iid NUMBER(9),
    ingredient VARCHAR2(20)
);
CREATE TABLE recipe (
    rid NUMBER(9),
    name VARCHAR2(50),
    recipe VARCHAR2(2000)
);
CREATE TABLE user_preference (
    uid NUMBER(9) CONSTRAINT fk_uid REFERENCES user(uid),
    iid NUMBER(9) CONSTRAINT fk_iid REFERENCES ingredient(iid),
    check NUMBER(1)
);
CREATE TABLE user_history (
    uid NUMBER(9) CONSTRAINT fk_uid REFERENCES user(uid),
    rid NUMBER(9) CONSTRAINT fk_rid REFERENCES recipe(rid),
    check NUMBER(1)
);

CREATE TABLE meal_composition (
    user_id NUMBER(9)
);
CREATE TABLE recipe_characteristic (
    user_id NUMBER(9)
);
CREATE TABLE calendar (
    user_id NUMBER(9)
);
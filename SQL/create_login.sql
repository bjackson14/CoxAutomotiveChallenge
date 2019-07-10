use coxautomotive;

create table login (
username varchar(50) not null,
password varchar(50) not null,
primary key (username)
);

insert into login (username, password)
values('foo', 'bar');
